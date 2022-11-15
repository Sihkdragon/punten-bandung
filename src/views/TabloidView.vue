<template>
    <main class="pt-10 md:pt-24 2xl:pt-28 ">
        <section class="container min-h-screen">
            <H1>Tabloid's</H1>
            <div class="grid grid-cols-2 gap-5">
                <div class="w-full border rounded-sm overflow-hidden" v-for="post in POSTList" :key="post.id">
                    <figure class="w-full h-64 overflow-hidden group">
                        <img :src="`https://source.unsplash.com/300x27${post.id}?bandung`" alt="thumbnail"
                            class="object-fill w-full group-hover:scale-110 duration-500">
                    </figure>
                    <div class="p-3 shadow">
                        <h3 class="font-semibold text-slate-700 text-lg my-1">{{ post.title }}</h3>
                        <p class="font-extralight text-sm text-slate-500 my-3">Preview : Lorem ipsum dolor sit, amet
                            consectetur
                            adipisicing elit. Earum facilis quo sit
                            necessitatibus, cupiditate id corporis culpa quisquam eligendi ipsa....</p>
                        <span class="text-slate-600 my-1">Editor : {{ post.editor }}</span>
                        <span class="text-slate-500 my-1 block text-sm">Senin, 12 November 2022</span>
                        <div class="flex justify-between  items-center my-4">
                            <div class="flex gap-4 items-center">
                                <span class="text-slate-600">Tag : </span>
                                <div
                                    class="rounded-full text-sm px-2 py-1 bg-blue-500 text-slate-100 cursor-pointer hover:bg-opacity-80 duration-300">
                                    Tag 1</div>
                                <div
                                    class="rounded-full text-sm px-2 py-1 bg-amber-500 text-slate-100 cursor-pointer hover:bg-opacity-80 duration-300">
                                    Tag 2</div>
                                <div
                                    class="rounded-full text-sm px-2 py-1 bg-lime-500 text-slate-100 cursor-pointer hover:bg-opacity-80 duration-300">
                                    Tag 3</div>
                            </div>
                            <a :href="post.url"
                                class="border border-slate-700 text-slate-700 px-3 py-1 rounded duration-500 hover:bg-blue-500 hover:text-white hover:border-blue-700">Baca</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import H1 from '../components/basic/Home/HeadingSection.vue'
import { POSTS_LISTS } from '../app/libs/resource/posts'
export default {
    components: {
        H1
    },
    data() {
        return {
            POSTList: POSTS_LISTS
        }
    }
}
</script>

<style>

</style>