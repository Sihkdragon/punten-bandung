<template>
    <nav class="hidden md:block absolute right-3 2xl:right-6 border-2 bg-white shadow top-32 xl:top-28 border-slate-300 rounded-sm px-1 2xl:px-2 py-4 mt-10 w-fit z-10"
        data-aos="slide-left" data-aos-duration="1000">
        <h3 class="font-bold tracking-wide text-lg">Recent Post's</h3>
        <div class="border rounded  py-5 px-6 2xl:px-8 mt-3 bg-slate-100">
            <ul class="list-disc 2xl:ml-3 flex flex-col gap-y-5 w-44 2xl:w-64 px-2 2xl:px-3 ">
                <li class="hover:text-blue-500 duration-100 hover:underline text-[10px] 2xl:text-base "
                    v-for="post in POSTList" :key="post.id">
                    <RouterLink to="/"> {{ post.title }}
                    </RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import _Tabloid from '../../../app/services/TabloidService'
export default {
    name: 'Sidebar',
    data() {
        return {
            POSTList: []
        }
    },
    mounted() {
        _Tabloid.getAllTabloids().then((r) => {
            if (r.data.statusCode === 200) {
                this.POSTList = r.data.payload.slice(0, 5)
            }
        })
    }
}
</script>

<style>

</style>