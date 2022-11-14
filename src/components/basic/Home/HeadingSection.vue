<template>
    <div class="w-full flex items-baseline">
        <div class="w-full h-[2px] bg-slate-300 rounded-full"></div>
        <div class="w-full">
            <h1 class="text-lg md:text-3xl font-extrabold text-slate-800 text-center mb-12">
                <slot></slot>
            </h1>
        </div>
        <div class="w-full h-[2px] bg-slate-300 rounded-full"></div>
    </div>
</template>

<script>
export default {
    props: ['className']
}
</script>

<style>

</style>