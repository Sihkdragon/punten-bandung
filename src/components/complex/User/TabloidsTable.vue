<template>
    <table class="table-fixed border border-gray-400 rounded-md overflow-hidden">
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
                <td class="border border-gray-400 px-2 py-3 text-center"><img :src="data.thumbnail_url" alt="item image"
                        class="w-80">
                </td>
                <td class="border border-gray-400 px-2 py-3 text-center">{{ data.title }}</td>
                <td class="border border-gray-400 px-2 py-3 text-center capitalize">{{ data.redacture.name }}</td>
                <td class="border border-gray-400 px-2 py-3 text-center capitalize">{{ data.editor }}</td>
                <td class="border border-gray-400 px-2 py-3 text-center capitalize">{{ data.writer }}</td>
                <td v-html="data.body.substring(0, 50) + '...</p>'"
                    class="border border-gray-400 px-2 py-3 text-center"></td>
                <td class="border border-gray-400 px-2 py-3 text-center">
                    <div class="flex w-full h-full gap-2">

                        <button
                            class="bg-blue-500 rounded px-2 py-1 text-white text-sm hover:bg-opacity-80 duration-500">Edit</button>
                        <button class="bg-red-500 rounded px-2 py-1 text-white text-sm hover:bg-opacity-80 duration-500"
                            @click="DeleteTabloid(data.id)">Delete</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import _Tabloid from '../../../app/services/TabloidService';

export default {
    data() {
        return {
            TableHead: [
                'No.',
                'Thumbnail',
                'title',
                'Redaktur',
                'Editor',
                'Penulis',
                'Overview',
                'Aksi'
            ],
            tableData: [
                {
                    id: 1,
                    title: 'Title Of Table Content',
                    thumbnail_url: 'http://localhost:8080/assets/img/post/tes-1669291276379.jpg',
                    redacture: {
                        name: 'Admin 1'
                    },
                    editor: 'Nyimas Nabilah',
                    writer: 'Mima Philos',
                    body: '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error distinctio laborum architecto officia dolor quo tempore molestias odit accusamus totam.</p>',

                }
            ]
        }
    },
    methods: {
        async DeleteTabloid(id) {
            if (confirm('Apakah anda yakin akan menghapus item ini?')) {
                const res = await _Tabloid.deleteTabloid(id)
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
        _Tabloid.getAllTabloids().then(r => {
            this.tableData = r.data.payload
        })
    }
}
</script>

<style>

</style>