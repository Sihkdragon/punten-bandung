<template>
    <section class="w-96 h-full border-r fixed min-h-screen flex justify-center pt-40 px-10">
        <nav class="w-full h-fit border shadow rounded py-4 px-2">
            <h1 class="text-center font-semibold text-lg">Menu</h1>
            <div class="h-[1px] bg-slate-200 my-5">
            </div>
            <MenuChild />
        </nav>
    </section>
</template>

<script>
import MenuChild from '../../basic/Home/MenuChild.vue';
export default {
    components: {
        MenuChild
    },
    data() {
        return {

        }
    }
}
</script>

<style>

</style>