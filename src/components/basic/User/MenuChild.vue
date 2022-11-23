<template>
    <ul class="w-full p-5 flex flex-col gap-y-3">
        <li v-for="menu in menuList" :key="menu.id" class=" overflow-hidden bg-white cursor-pointer"
            @click="openMenu(menu.id)">
            <strong class="flex items-center justify-between bg-white">
                <span v-if="menu.id > 1">{{ menu.name }}</span>
                <router-link :to="menu.to" v-if="menu.id === 1" replace>{{ menu.name }}</router-link>
                <button v-if="menu.sub">
                    <ChevronDownIcon class="w-5" />
                </button>
            </strong>
            <template v-if="menu.sub">
                <ul class="pl-5 py-2 overflow-hidden duration-500" v-show="activeID === menu.id">
                    <li v-for="sub in menu.sub" :key="sub.id" class="hover:text-blue-500 duration-200 hover:underline">
                        <router-link :to="sub.to" replace> {{ sub.name }} </router-link>
                    </li>
                </ul>
            </template>

        </li>
    </ul>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
export default {
    components: {
        ChevronDownIcon,
    },
    methods: {
        openMenu(id) {
            if (this.activeID === id) {
                this.activeID = null
            } else {
                this.activeID = id
            }
        }
    },
    data() {
        return {
            activeID: null,
            isOpen: true,
            menuList: [
                {
                    id: 1, name: 'Dashboard', to: '/dashboard', sub: undefined
                },
                {
                    id: 2, name: 'Tabloid', to: '/tabloidMenu', sub: [
                        { id: 1, name: 'Kelola', to: 'tes' },
                        { id: 2, name: 'Tulis', to: 'write' }
                    ]
                },
                {
                    id: 3, name: 'Galeri', to: '/tabloidMenu', sub: [
                        { id: 1, name: 'Kelola', to: 'tes' },
                        { id: 2, name: 'Tampil', to: 'apa' }
                    ]
                },
                {
                    id: 4, name: 'Komentar', to: '/tabloidMenu', sub: [
                        { id: 1, name: 'Kelola', to: 'tes' },
                        { id: 2, name: 'Tampil', to: 'apa' }
                    ]
                },
                {
                    id: 5, name: 'Pengguna', to: '/tabloidMenu', sub: [
                        { id: 1, name: 'Kelola', to: 'tes' },
                        { id: 2, name: 'Tampil', to: 'apa' }
                    ]
                },
            ]
        }
    }
}
</script>

<style>

</style>