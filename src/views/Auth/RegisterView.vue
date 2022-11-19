<template>
    <AuthenticationView>
        <div class="rounded border shadow w-full h-fit mt-10 pt-5 pb-3">
            <form class="w-full h-full flex flex-col gap-3 justify-center items-center">
                <input type="text" name="name" id="name" placeholder="Nama Lengkap"
                    class="my-1 w-64 focus:outline-none border-b border-stone-400 focus:border-stone-500 px-1 py-2 duration-500 rounded-sm text-gray-600">
                <input type="email" name="email" id="email" placeholder="Email"
                    class="my-1 w-64 focus:outline-none border-b border-stone-400 focus:border-stone-500 px-1 py-2 duration-500 rounded-sm text-gray-600">
                <input type="text" name="username" id="username" placeholder="Username"
                    class="my-1 w-64 focus:outline-none border-b border-stone-400 focus:border-stone-500 px-1 py-2 duration-500 rounded-sm text-gray-600">
                <input type="password" name="password" id="password" placeholder="Password"
                    class="my-1 w-64 focus:outline-none border-b border-stone-400 focus:border-stone-500 px-1 py-2 duration-500 rounded-sm text-gray-600">
                <button type="submit"
                    class="rounded-full border my-3 w-64 py-2 border-stone-400 text-stone-600 hover:bg-blue-400 hover:border-blue-400 hover:text-white duration-500 transition-colors">Daftar</button>
            </form>
            <span class="text-sm block text-center my-2">atau</span>
            <router-link to="/login" class="text-sm block text-center text-blue-700 hover:underline">Masuk</router-link>
        </div>
    </AuthenticationView>
</template>

<script>
import AuthenticationView from '../../components/layout/AuthenticationView.vue';
export default {
    components: {
        AuthenticationView
    }
}
</script>

<style>

</style>