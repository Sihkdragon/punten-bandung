<template>
    <Navbar />
    <Sidebar />
    <main class="pt-10 md:py-36 2xl:py-44 ">
        <section class="container min-h-screen" v-if="post">
            <div class="h-[500px] overflow-hidden">
                <img :src="post.thumbnail_url" alt="" srcset="">
            </div>
            <h3 class="capitalize mt-10 text-2xl font-semibold">{{ post.title }}</h3>
            <h5 class="mt-3 text-sm text-slate-500"> {{ getReadableDate(post.created_at) }}</h5>
            <h5 class="mb-3 text-sm text-slate-500"> Redaktur : {{ post.redacture.name }}
            </h5>
            <div v-html="post.body" class="leading-8 text-justify my-6 text-slate-600">

            </div>
            <!-- <p class="leading-8 indent-5 my-6 text-slate-600" >
                </p> -->
            <span class="block text-sm text-slate-500">Editor : {{ post.editor }} </span>
            <div class="w-full h-[1px] bg-slate-400 my-10"></div>
            <div class="flex items-center gap-5 mb-28">
                <span>Tags : </span>
                <div class="px-3 py-1 bg-rose-500 rounded-full text-slate-100 flex justify-center items-center text-sm"
                    v-show="post.tags.tag1 ? true : false">
                    {{ post.tags.tag1 }}</div>
                <div class="px-3 py-1 bg-amber-500 rounded-full text-slate-100 flex justify-center items-center text-sm"
                    v-show="post.tags.tag2 ? true : false">
                    {{ post.tags.tag2 }}</div>
                <div class="px-3 py-1 bg-lime-500 rounded-full text-slate-100 flex justify-center items-center text-sm"
                    v-show="post.tags.tag3 ? true : false">
                    {{ post.tags.tag3 }}</div>
                <div class="px-3 py-1 bg-slate-500 rounded-full text-slate-100 flex justify-center items-center text-sm"
                    v-show="post.tags.tag4 ? true : false">
                    {{ post.tags.tag4 }}</div>
                <div class="px-3 py-1 bg-blue-500 rounded-full text-slate-100 flex justify-center items-center text-sm"
                    v-show="post.tags.tag5 ? true : false">
                    {{ post.tags.tag5 }}</div>
            </div>
            <H1>Comments</H1>
            <form>
                <h1>Tulis Komentar :</h1>
                <textarea name="" id="" cols="30"
                    class="w-full border rounded-sm h-44 bg-gray-200 p-2 focus:outline outline-slate-300">
                </textarea>
                <div class="flex items-center justify-between gap-x-10 py-2">
                    <div class="inline-flex flex-col text-slate-700 gap-2">
                        <label for="Nama">Nama*</label>
                        <input type="text" name="" id="Nama"
                            class="border bg-gray-200 p-2 rounded  focus:outline outline-slate-300" size="30">
                    </div>
                    <div class="inline-flex flex-col text-slate-700 gap-2">
                        <label for="email">Email*</label>
                        <input type="text" name="" id="email"
                            class="border bg-gray-200 p-2 rounded  focus:outline outline-slate-300" size="30">
                    </div>
                    <div class="inline-flex flex-col text-slate-700 gap-2 items-center pt-8">
                        <button
                            class="bg-blue-500 flex justify-center items-center px-5 py-2 text-white rounded-full hover:bg-opacity-70 duration-500">Post</button>
                    </div>
                </div>
            </form>
        </section>
    </main>
    <Footer />
</template>
    
<script>

import H1 from '../../components/basic/Home/HeadingSection.vue'
import Navbar from '../../components/complex/Public/Navbar.vue'
import Sidebar from '../../components/complex/Public/Sidebar.vue'
import Footer from '../../components/complex/Public/Footer.vue'
import _Tabloid from '../../app/services/TabloidService'
import getReadableDate from '../../app/libs/helpers/utils/dateHelpers'
import { POSTS_LISTS } from '../../app/libs/resource/posts'
export default {
    components: {
        H1,
        Navbar,
        Sidebar,
        Footer
    },
    data() {
        return {
            getReadableDate,
            allPost: POSTS_LISTS,
            post: null
        }
    },
    mounted() {
        _Tabloid.getTabloid(this.$route.params.id).then((r) => {
            if (r.data.statusCode === 200) {
                this.post = r.data.payload
            }
        })
    },
    watch: {
        post: function () {

        }
    }
}
</script>
    
<style>

</style>