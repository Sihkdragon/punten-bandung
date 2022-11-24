<template>
    <main class="min-h-screen flex relative" @click="isLogoutShown = false">
        <NavbarUserVue />
        <div class="w-full py-10 px-12 container">
            <div class="flex justify-between items-center relative">
                <h1 class="text-4xl font-bold text-zinc-600">{{ Head }}</h1>
                <h1 class="text-lg text-zinc-600 cursor-pointer"
                    @click="e => { e.stopPropagation(); isLogoutShown = !isLogoutShown }">Hi, {{ username
                    }}!</h1>
                <div class="absolute right-16 -bottom-8" v-show="isLogoutShown">
                    <button
                        class="border px-2 py-1 rounded text-center hover:bg-slate-200 hover:text-white duration-200"
                        @click="logoutHandler">Logout
                    </button>
                </div>
            </div>
            <div class="w-full h-[1px] bg-black/40 my-10"></div>
            <slot></slot>
        </div>
    </main>
</template>

<script>
import NavbarUserVue from '../complex/User/NavbarUser.vue';
import { USERNAME } from '../../app/store/User';

export default {
    props: {
        Head: String
    },
    methods: {
        logoutHandler() {
            this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie))
            this.$router.replace({ path: '/login' })
        },
        showLogoutButton() {

        }
    },
    mounted() {
        if (USERNAME) {
            this.username = USERNAME
        }
    },
    components: {
        NavbarUserVue
    },
    data() {
        return {
            username: '',
            isLogoutShown: false
        }
    }
}
</script>

<style>

</style>