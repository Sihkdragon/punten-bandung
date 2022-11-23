<template>
    <main class="flex justify-center items-center bg-black/50 min-h-screen">
        <div class="w-full max-w-xl border bg-white rounded px-2 py-24 flex flex-col gap-10">
            <h1 class="text-center text-rose-700 text-2xl animate-pulse">404 Not Found</h1>
            <h1 class="text-center text-slate-600 text-lg">Halaman yang anda maksud tidak ditemukan</h1>
            <div class="flex justify-center">
                <router-link to="/"
                    class="text-center mx-auto flex items-center gap-2 text-slate-400 hover:text-blue-500 duration-500">
                    <HomeIcon class="w-5" /> Halaman
                    Utama
                </router-link>
            </div>
        </div>
    </main>
</template>

<script>
import { HomeIcon } from '@heroicons/vue/24/outline';
export default {
    components: {
        HomeIcon
    }
}
</script>

<style>

</style>