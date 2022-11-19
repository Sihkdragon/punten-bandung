<template>
    <nav class="fixed top-0 right-0 left-0 z-50 bg-white">
        <div class="container">
            <div class="py-4 md:py-8 flex items-center justify-between border-b border-slate-500/75 shadow-sm">
                <div class="font-main text-2xl font-extrabold font-slate-700  relative w-20 md:w-32 ">
                    <RouterLink to="/">
                        <img alt="logo" src="@/assets/img/logo/mainlogo.png" class="object-fill " />
                    </RouterLink>
                </div>
                <button class="block md:hidden" @click="openNavbar">
                    <Bars3Icon class="w-8" />
                </button>
                <ul class="gap-x-5 items-center hidden md:flex">
                    <li class="hover:text-slate-400 duration-500 hover:underline" v-for="item in menu" :key="item.id">
                        <RouterLink :to="item.to">{{ item.name }}</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/login"
                            class="text-blue-700 rounded border border-blue-700 px-3 py-1 text-sm duration-500 hover:text-white hover:bg-blue-500 hover:border-blue-500">
                            Masuk</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <ul :class="isNavOpen ? smallScreenMenuDisplay : defaultMenuDisplay" class="md:hidden duration-1000 ease-in-out">
        <h1 class="my-5 text-lg font-semibold text-slate-700">Menu</h1>
        <button class="absolute top-5 right-5" @click="closeNavbar">
            <XMarkIcon class="w-8" />
        </button>
        <li class="hover:text-slate-400 duration-500 hover:underline" v-for="item in menu" :key="item.id">
            <RouterLink :to="item.to">{{ item.name }}</RouterLink>
        </li>
    </ul>
</template>

<script>
import MENU from '../../../app/libs/resource/menu';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
export default {
    components: {
        Bars3Icon,
        XMarkIcon
    },
    data() {
        return {
            menu: MENU,
            defaultMenuDisplay: 'bg-white rounded  fixed  top-1 right-1 left-1 bottom-0 z-30 border h-full items-center flex flex-col gap-y-5 py-20 text-slate-500 translate-y-full ',
            smallScreenMenuDisplay: 'bg-white rounded  fixed  top-1 right-1 left-1 bottom-0 z-50 border h-full items-center flex flex-col gap-y-5 py-20 text-slate-500 translate-y-0 ',
            isNavOpen: false
        }
    },
    methods: {
        openNavbar() {
            this.isNavOpen = true
        },
        closeNavbar() {
            this.isNavOpen = false
        },
    }
};
</script>

<style scoped>
.router-link-exact-active {
    text-decoration: underline;
}
</style>