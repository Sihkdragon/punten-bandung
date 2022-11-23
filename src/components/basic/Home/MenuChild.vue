<template>
    <ul class="w-full p-5 flex flex-col gap-y-3">
        <li v-for="menu in menuList" :key="menu.id" class=" overflow-hidden bg-white cursor-pointer"
            @click="openMenu(menu.id)">
            <strong class="flex items-center justify-between bg-white">{{ menu.name }}
                <button>
                    <ChevronDownIcon class="w-5" />
                </button>
            </strong>

            <ul class="pl-5 py-2 overflow-hidden duration-500" v-show="activeID === menu.id">
                <li v-for="sub in menu.sub" :key="sub.id" class="hover:text-blue-500 duration-200 hover:underline">
                    <router-link :to="sub.to"> {{ sub.name }} </router-link>
                </li>
            </ul>
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
                    id: 1, name: 'Tabloid', to: '/tabloidMenu', sub: [
                        { id: 1, name: 'Kelola', to: 'tes' },
                        { id: 2, name: 'Tulis', to: 'apa' }
                    ]
                },
                {
                    id: 2, name: 'Galeri', to: '/tabloidMenu', sub: [
                        { id: 1, name: 'Kelola', to: 'tes' },
                        { id: 2, name: 'Tampil', to: 'apa' }
                    ]
                },
                {
                    id: 3, name: 'Komentar', to: '/tabloidMenu', sub: [
                        { id: 1, name: 'Kelola', to: 'tes' },
                        { id: 2, name: 'Tampil', to: 'apa' }
                    ]
                },
                {
                    id: 4, name: 'Pengguna', to: '/tabloidMenu', sub: [
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