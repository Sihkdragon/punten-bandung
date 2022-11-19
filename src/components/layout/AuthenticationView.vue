<template>
    <main class="min-h-screen px-10 py-5 flex flex-wrap bg-stone-500/30 overflow-hidden">
        <section class="w-full min-h-full bg-stone-600 rounded md:flex shadow">
            <div class="basis-3/5 h-full w-full hidden md:block">
                <img src="@/assets/img/loginhero.jpg" alt="loginhero" class="object-cover w-full h-full">
            </div>
            <div class="md:basis-2/5 bg-white px-5 py-10 ">
                <img src="@/assets/img/logo/mainlogo.png" alt="loginhero" class="object-cover mx-auto w-36">
                <slot></slot>
            </div>
        </section>
    </main>
</template>

<script>
export default {

}
</script>

<style>

</style>