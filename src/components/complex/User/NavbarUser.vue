<template>
    <button class="absolute top-10 left-5" @click="isOpen = !isOpen">
        <Bars3Icon class="w-8" />
    </button>
    <section class="md:w-96 h-full border-r absolute min-h-screen flex justify-center pt-40 px-10 bg-white z-50"
        :class="isOpen ? 'flex' : 'hidden'">
        <button class="absolute top-10 right-5" @click="isOpen = !isOpen">
            <XMarkIcon class="w-10" />
        </button>
        <nav class="w-full h-fit border shadow rounded py-4 px-2">
            <h1 class="text-center font-semibold text-lg">Menu</h1>
            <div class="h-[1px] bg-slate-200 my-5">
            </div>
            <MenuChild />
        </nav>
    </section>
</template>

<script>
import MenuChild from '../../basic/User/MenuChild.vue';
import { XMarkIcon, Bars3Icon } from '@heroicons/vue/24/outline';
export default {
    props: {
        isOpen: Boolean
    },
    components: {
        MenuChild,
        XMarkIcon,
        Bars3Icon
    },


    data() {
        return {
            isNavOpen: true,
        }
    },
    methods: {
        HandleOpenNav() {
        }
    }
}
</script>

<style>

</style>