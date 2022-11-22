<template>
    <ul class="w-full p-5 flex flex-col gap-y-3">
        <li v-for="menu in menuList" :key="menu.id" class=" overflow-hidden bg-white">
            <strong class="flex items-center justify-between bg-white">{{ menu.name }}
                <button @click="openMenu">
                    <ChevronDownIcon class="w-5" />
                </button>
            </strong>

            <ul class="pl-5 py-2 overflow-hidden duration-500" :class="isOpen ? '-mt-0' : '-mt-10'">
                <li v-for="sub in menu.sub" :key="sub.id">
                    {{ sub.name }}
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
        openMenu() {
            this.isOpen = !this.isOpen
        }
    },
    data() {
        return {
            isOpen: true,
            menuList: [
                {
                    id: 1, name: 'Tabloid', to: '/tabloidMenu', sub: [
                        { id: 1, name: 'Kelola', to: 'tes' },
                        { id: 2, name: 'Tampil', to: 'apa' }
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