<template>
    <table class="w-full border border-gray-400 rounded-md overflow-hidden">
        <thead class="border border-gray-400 rounded-md overflow-hidden">
            <tr class="border border-gray-400">
                <th v-for="item in TableHead" :key="item"
                    class="border border-gray-400 px-2 py-3 text-center capitalize">
                    {{ item }}
                </th>
            </tr>
        </thead>
        <tbody class="border border-gray-400">
            <tr v-for="(data, i) in tableData" :key="data.id" class="border border-gray-400">
                <td class="border border-gray-400 px-2 py-3 text-center">{{ ++i }}</td>
                <td class="border border-gray-400 px-2 py-3 text-center">{{ data.name }}</td>
                <td class="border border-gray-400 px-2 py-3 text-center">{{ data.username }}</td>
                <td class="border border-gray-400 px-2 py-3 text-center capitalize">{{ data.email }}</td>
                <td class="border border-gray-400 px-2 py-3 text-center capitalize">{{ data.role }}</td>
                <td class="border border-gray-400 px-2 py-3 text-center capitalize">{{ data._count.posts }}</td>
                <td class="border border-gray-400 px-2 py-3 text-center">
                    <div class="flex w-full h-full gap-2 justify-center items-center" v-if="data.id !== +IDActive">
                        <button
                            class="bg-blue-500 rounded px-2 py-1 text-white text-sm hover:bg-opacity-80 duration-500">Edit</button>
                        <button class="bg-red-500 rounded px-2 py-1 text-white text-sm hover:bg-opacity-80 duration-500"
                            @click="DeleteUser(data.id)">Delete</button>
                    </div>
                    <div class="flex w-full h-full gap-2 justify-center items-center" v-else>
                        <div
                            class="bg-green-500 rounded-full px-3 py-1 text-white text-sm hover:bg-opacity-80 duration-500">
                            It's You
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import _Users from '../../../../app/services/UserService';

export default {
    data() {
        return {
            TableHead: [
                'No.',
                'Nama',
                'Username',
                'email',
                'Role',
                'Jumlah Tabloid',
                'Aksi'
            ],
            tableData: [
                {
                    id: 1,
                    name: 'mima',
                    username: 'mima',
                    role: 'mima',
                    email: 'mima',
                    _count: {
                        posts: 0
                    },
                }
            ],
            IDActive: this.$cookies.get('PB_UID')
        }
    },
    methods: {
        async DeleteUser(id) {
            if (confirm('Apakah anda yakin akan menghapus pengguna ini?')) {
                const res = await _Users.deleteUser(id)
                if (res.status) {
                    alert(res.message)
                    this.$router.go()
                } else {
                    alert(res.message)
                }
            }
        }
    },
    mounted() {
        _Users.getAllUser().then(r => {
            this.tableData = r.data.payload
        })
    }
}
</script>

<style>

</style>
