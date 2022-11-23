<template>
    <main class="min-h-screen flex relative">
        <NavbarUserVue />
        <div class="w-full py-10 px-12 container">
            <h1 class="text-4xl font-bold text-zinc-600">Dashboard</h1>
            <div class="w-full h-[1px] bg-black/40 my-10"></div>
            <slot></slot>
        </div>
    </main>
</template>

<script>
import NavbarUserVue from '../complex/User/NavbarUser.vue';
export default {
    props: {
        Head: String
    },
    components: {
        NavbarUserVue
    }
}
</script>

<style>

</style>