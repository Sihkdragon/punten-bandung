<template>
    <Navbar />
    <Sidebar />
    <section class="min-h-screen container py-10 2xl:py-16">
        <H1>Gallery</H1>
        <div class="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-5 duration-500">
            <figure v-for="item in galleryData" :key="item.id" data-aos="fade-up" data-aos-duration="3000"
                class="w-full bg-slate-300 h-96  overflow-hidden group relative">
                <img alt="galleryphoto" :src="item.image_url"
                    class="w-full h-full object-fill duration-500 group-hover:scale-110 group-hover:-rotate-3" />
                <div
                    class="absolute bg-black/20 top-0 right-0 left-0 bottom-0 opacity-0 group-hover:opacity-100 duration-500 transition-opacity flex justify-center items-center flex-col cursor-pointer">

                    <figcaption class="font-main text-slate-200 mx-auto text-sm font-semibold text-shadow text-center">
                        {{ item.location }}
                    </figcaption>
                    <figcaption class=" text-slate-300 mx-auto text-xs font-extralight text-shadow">
                        by {{ item.author }}
                    </figcaption>
                </div>
            </figure>
        </div>
    </section>
    <Footer />
</template>

<script>
import H1 from '../../components/basic/Home/HeadingSection.vue'
import _Gallery from '../../app/services/GalleryService'
import Navbar from '../../components/complex/Public/Navbar.vue'
import Sidebar from '../../components/complex/Public/Sidebar.vue'
import Footer from '../../components/complex/Public/Footer.vue'
export default {
    components: {
        H1,
        Navbar,
        Sidebar,
        Footer
    },
    mounted() {
        _Gallery.getAllImage().then((r) => {
            if (r.data.statusCode === 200) {
                this.galleryData = r.data.payload
            } else {
                alert(r.data.message)
            }
        }).catch((e) => { console.log(e.message) })
    },
    data() {
        return {
            galleryData: [
                {
                    id: 1,
                    author: "Titin Salma",
                    image_url: "https://loremflickr.com/500/900",
                    created_at: "2022-11-18T16:46:31.016Z",
                    update_at: "2022-11-18T16:46:31.016Z",
                    location: 'Dummy, Place'
                },
            ]
        }
    }
}
</script>

<style>

</style>