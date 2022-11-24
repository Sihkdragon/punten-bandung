<template>
    <UserLayout :Head="'Foto Baru'">
        <form class="w-full h-full" @submit="handleSubmit">
            <fieldset class="flex">
                <div class="basis-1/2 ">
                    <label for="image" class="block w-fit mx-auto h-fit cursor-pointer">
                        <img :src="ShownImage" alt="shown" class="object-contain h-[375px] w-[225px]">
                    </label>
                    <input type="file" accept="image/*" id="image"
                        class="border-b mx-auto mt-2 block text-zinc-800 focus:outline-none py-2 w-96"
                        @change="imageUpload" />
                </div>
                <div class="basis-1/2 flex flex-col gap-5 ">
                    <label for="author" class="text-zinc-700 text-lg">Fotografer</label>
                    <input type="text" placeholder="Fotografer" id="author" v-model="author"
                        class="border-b w-full text-2xl text-zinc-800 focus:outline-none">
                    <label for="location" class="text-zinc-700 text-lg">Lokasi</label>
                    <input type="text" placeholder="Lokasi" id="location" v-model="location"
                        class="border-b w-full text-2xl text-zinc-800 focus:outline-none">
                    <div class="ml-auto float-right">
                        <button type="submit"
                            class="bg-blue-500 px-4 py-1 text-lg rounded text-white hover:bg-opacity-80">Post</button>
                        <button type="reset"
                            class="ml-2 bg-white text-lg hover:bg-slate-200 px-4 py-1 border rounded text-slate-500 hover:bg-opacity-80">Reset</button>
                    </div>
                </div>
            </fieldset>
        </form>
    </UserLayout>
</template>

<script>
import _Gallery from '../../../app/services/GalleryService'
import UserLayout from '../../../components/layout/UserLayout.vue'
export default {
    data() {
        return {
            ShownImage: 'https://fakeimg.pl/225x375/',
            image: null,
            author: '',
            location: ''
        }
    },
    methods: {
        imageUpload(e) {
            const file = e.target.files[0]
            const MaxSize = 2 // MB
            if (e.target.files[0].size / 1048576 > MaxSize) {
                alert('Ukuran gambar terlalu besar')
                this.image = null
            } else {
                this.ShownImage = URL.createObjectURL(file)
                this.image = file
            }
        },
        async handleSubmit(e) {
            e.preventDefault()
            const formData = new FormData()
            formData.append('author', this.author)
            formData.append('location', this.location)
            formData.append('image', this.image)

            const { status, message } = await _Gallery.postImage(formData)

            if (status) {
                const result = confirm(message + '\n ke halaman Gallery?')
                if (result) {
                    this.$router.replace('/gallery')
                } else {
                    this.$router.go()
                }
            } else {
                alert(message)
            }
        }

    },
    watch: {
        author(val) {
            this.author = val
        },
        location(val) {
            this.location = val
        }
    },
    handleSubmit(e) {
        e.preventDefault()

    },
    components: {
        UserLayout
    }
}
</script>

<style>

</style>