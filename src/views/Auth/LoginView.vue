<template>
    <AuthenticationView>
        <div class="rounded border shadow w-full h-fit mt-10 pt-16 pb-10">
            <form class="w-full h-full flex flex-col gap-5 justify-center items-center" @submit="onSubmit">
                <input type="text" name="username" id="username" placeholder="Username"
                    class="my-2 w-64 focus:outline-none border-b border-stone-400 focus:border-stone-500 px-1 py-2 duration-500 rounded-sm text-gray-600">
                <div class="w-fit h-fit relative">
                    <input :type="isPasswordHidden ? 'password' : 'text'" name="password" id="password"
                        placeholder="Password"
                        class="my-2 w-64 focus:outline-none border-b border-stone-400 focus:border-stone-500 px-1 py-2 duration-500 rounded-sm text-gray-600">
                    <div class="absolute right-0 bottom-4 cursor-pointer" @click="isPasswordHidden = !isPasswordHidden">
                        <EyeIcon class="w-5 text-gray-600" v-if="isPasswordHidden" />
                        <EyeSlashIcon class="w-5 text-gray-600" v-if="!isPasswordHidden" />
                    </div>
                </div>
                <button type="submit"
                    class="rounded-full border my-2 w-64 py-2 border-stone-400 text-stone-600 hover:bg-blue-400 hover:border-blue-400 hover:text-white duration-500 transition-colors">Masuk</button>

            </form>
            <span class="text-sm block text-center my-2">atau</span>
            <router-link to="/register" class="text-sm block text-center text-blue-700 hover:underline">Daftar
                Sekarang</router-link>
        </div>
    </AuthenticationView>
</template>

<script>
import AuthenticationView from '../../components/layout/AuthenticationView.vue';
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';
export default {
    components: {
        AuthenticationView,
        EyeIcon,
        EyeSlashIcon
    },
    data() {
        return {
            isPasswordHidden: true
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
        }
    }
}
</script>

<style>

</style>