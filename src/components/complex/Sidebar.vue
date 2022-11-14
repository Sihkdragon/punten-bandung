<template>
    <nav
        class="hidden md:block absolute right-6 border-2 bg-white shadow top-28 border-slate-300 rounded-sm px-2 py-4 mt-10 w-64 z-50">
        <h3 class="font-bold tracking-wide text-lg">Recent Post's</h3>
        <div class="border rounded  py-5 px-2 mt-3 bg-slate-100">
            <ul class="list-disc ml-3 flex flex-col gap-y-5 text-sm w-56 px-3 ">
                <li class="hover:text-blue-500 duration-100 hover:underline" v-for="post in POSTList" :key="post.id">
                    <RouterLink :to="post.url"> {{ post.title }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { POSTS_LISTS } from '../../app/libs/resource/posts';
export default {
    data() {
        return {
            POSTList: POSTS_LISTS
        }
    }
}
</script>

<style>

</style>