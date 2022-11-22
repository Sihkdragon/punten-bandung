<template>
    <AuthenticationView>
        <div class="rounded border shadow w-full h-fit mt-10 pt-16 pb-10">
            <h1 class="text-center font-semibold text-xl mb-10">Register</h1>
            <form class="w-full h-full flex flex-col gap-3 justify-center items-center" @submit="handleSubmit">
                <input required v-model="name" type="text" name="name" id="name" placeholder="Nama Lengkap"
                    class="my-1 w-64 focus:outline-none border-b border-stone-400 focus:border-stone-500 px-1 py-2 duration-500 rounded-sm text-gray-600">
                <input required v-model="email" type="email" name="email" id="email" placeholder="Email"
                    class="my-1 w-64 focus:outline-none border-b border-stone-400 focus:border-stone-500 px-1 py-2 duration-500 rounded-sm text-gray-600">
                <input required v-model="username" type="text" name="username" id="username" placeholder="Username"
                    class="my-1 w-64 focus:outline-none border-b border-stone-400 focus:border-stone-500 px-1 py-2 duration-500 rounded-sm text-gray-600">
                <input required v-model="password" type="password" name="password" id="password" placeholder="Password"
                    class="my-1 w-64 focus:outline-none border-b border-stone-400 focus:border-stone-500 px-1 py-2 duration-500 rounded-sm text-gray-600">
                <input required v-model="reTypePassword" type="password" name="password" id="rtypepassword"
                    placeholder="ReTypePassword"
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
import Auth from '../../app/services/AuthService';
import AuthenticationView from '../../components/layout/AuthenticationView.vue';
export default {
    data() {
        return {
            email: '',
            username: '',
            name: '',
            password: '',
            reTypePassword: '',
            role: 'contributors'
        }
    },
    watch: {
        email(val) {
            this.email = val
        },
        username(val) {
            this.username = val
        },
        name(val) {
            this.name = val
        },
        password(val) {
            this.password = val
        },
        role(val) {
            this.role = val
        },
        reTypePassword(val) {
            this.reTypePassword = val
        }
    },
    components: {
        AuthenticationView
    },
    methods: {
        async handleSubmit(e) {
            e.preventDefault()
            if (this.password !== this.reTypePassword) {
                alert('Password Tidak Sama')
                this.password = ''
                this.reTypePassword = ''
            } else {
                const data = {
                    email: this.email,
                    name: this.name,
                    username: this.username,
                    password: this.password
                }

                const res = await Auth.Register(data)
                if (res === true) {
                    const sure = confirm('Registrasi Berhasil \n Ke Halaman Login?')
                    if (sure) {
                        this.$router.replace('/login')
                    }
                } else {
                    alert(res)
                }
            }

        }
    }
}
</script>

<style>

</style>