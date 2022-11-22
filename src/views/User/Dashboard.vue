<template>
    <main class="min-h-screen flex relative">
        <NavbarUser />
        <div class="w-full py-10 px-12 ml-96">
            <h1 class="text-4xl font-bold text-zinc-600">Tulis Tabloid</h1>
            <div class="w-full h-[1px] bg-black/40 my-10"></div>
            <form class="w-full h-full ">
                <div class="form-control w-full flex gap-10">
                    <div class="basis-1/2">
                        <label for="thumbnail" v-if="!image"
                            class="text-zinc-700 text-2xl  cursor-pointer font-semibold">
                            Thumbnail
                        </label>
                        <label for="thumbnail" class="block cursor-pointer my-5">
                            <img :src="ShownImage" alt="" srcset="">
                        </label>
                        <div class="form-control w-full">
                            <input type="file" accept="image/*" id="thumbnail"
                                class="border-b w-full text-lg text-zinc-800 focus:outline-none" @change="imageUpload">
                        </div>
                        <label for="title" class="text-zinc-700 text-lg">Judul</label>
                        <div class="form-control w-full">
                            <input type="text" placeholder="Judul" id="title"
                                class="border-b w-full text-2xl text-zinc-800 focus:outline-none">
                        </div>
                    </div>
                    <div class="flex flex-col w-full gap-y-5 py-5 basis-1/2">
                        <label for="writer" class="text-zinc-700 text-lg">Penulis</label>
                        <div class="form-control w-full">
                            <input type="text" placeholder="Penulis" id="writer"
                                class="border-b text-xl xl:w-1/2 text-zinc-800 focus:outline-none">
                        </div>
                        <label for="editor" class="text-zinc-700 text-lg">Editor</label>
                        <div class="form-control w-full">
                            <input type="text" placeholder="Editor" id="editor"
                                class="border-b text-xl xl:w-1/2 text-zinc-800 focus:outline-none">
                        </div>
                        <label for="tag" class="text-zinc-700 text-lg">Tag</label>
                        <div class="form-control w-full">
                            <input type="text" placeholder="Tags" id="tag"
                                class="border-b text-xl xl:w-1/4 text-zinc-800 focus:outline-none" v-model="tagContent">
                            <span class="block text-sm text-zinc-400 mt-1 ">Tekan Tanda Koma ( , ) atau Spasi untuk
                                memasukan tag
                                baru</span>
                        </div>
                        <div class="tag-group w-full h-10">
                            <ul class="flex gap-2 ">
                                <li v-for="(item, index) in tags" :key="index"
                                    class="px-2 py-1 rounded-full text-white font-semibold flex gap-2 items-center"
                                    :class="`bg-${tagColor[index]}`">
                                    <span>
                                        #{{ item }}
                                    </span>
                                    <button type="button" class="" @click="deleteTag(index)">
                                        <XMarkIcon class="w-5" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <QuillEditor contentType="html" theme="snow" v-model:content="content" ref="myQuillEditor"
                    toolbar="essential" class="min-h-full text-base text-zinc-700" placeholder="Tulis berita disini" />
            </form>
        </div>
    </main>
</template>
<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { XMarkIcon } from '@heroicons/vue/24/outline'
import NavbarUser from '../../components/complex/User/NavbarUser.vue'

export default {
    components: {
        QuillEditor,
        NavbarUser,
        XMarkIcon
    },
    data() {
        return {
            ShownImage: 'https://fakeimg.pl/700x400/',
            title: '',
            writer: '',
            editor: '',
            image: null,
            body: '',
            redacture_id: '',
            content: '',
            tagContent: '',
            tags: [],
            tagColor: [
                'rose',
                'amber',
                'lime',
                'slate',
                'blue',
            ]
        }
    },
    methods: {
        deleteTag(index) {
            this.tags.splice(index, 1)
        },
        imageUpload(e) {
            const file = e.target.files[0]
            const MaxSize = 2 //MB
            if (e.target.files[0].size / 1048576 > MaxSize) {
                alert('Ukuran gambar terlalu besar')
            } else {
                this.ShownImage = URL.createObjectURL(file)
                this.image = file
            }
        },
        handleSubmit(e) {
            e.preventDefault()
            const formData = new FormData()
            // formData.append('title', this.t)
        }
    },
    watch: {
        content(val) {
            console.table(val)
        },
        tagContent(val) {
            if (val !== '') {
                if (val.length > 1 && this.tags.length <= 5) {
                    if (val.charAt(val.length - 1) === ',' || val.charAt(val.length - 1) === ' ') {
                        let word = val.substring(0, val.length - 1)
                        this.tagContent = ''
                        this.tags.push(word.toLowerCase())
                        console.log(this.tags)
                    }
                } else if (this.tags.length > 5) {
                    this.tagContent = ''
                }
            }
        }
    }
}
</script>

<style scoped>
.form-control {
    margin-bottom: 2rem;
}

.form-control>input {
    padding: 5px 2px;
}

.form-control>label {
    padding: 5px 2px;
}

.bg-rose {
    background-color: #e11d48;
}

.bg-amber {
    background-color: #d97706;
}

.bg-lime {
    background-color: #65a30d;
}

.bg-slate {
    background-color: #475569;
}

.bg-blue {
    background-color: #2563eb;
}
</style>