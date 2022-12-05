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
                <td class="border border-gray-400 px-2 py-3 text-center"><img :src="data.image_url" alt="item image"
                        class="w-80">
                </td>
                <td class="border border-gray-400 px-2 py-3 text-center">{{ data.author }}</td>
                <td class="border border-gray-400 px-2 py-3 text-center capitalize">{{ data.location }}</td>
                <td class="border border-gray-400 px-2 py-3 text-center">
                    <div class="flex w-full h-full gap-2">

                        <button
                            class="bg-blue-500 rounded px-2 py-1 text-white text-sm hover:bg-opacity-80 duration-500">Edit</button>
                        <button class="bg-red-500 rounded px-2 py-1 text-white text-sm hover:bg-opacity-80 duration-500"
                            @click="DeleteImage(data.id)">Delete</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import _Gallery from '../../../../app/services/GalleryService';

export default {
    data() {
        return {
            TableHead: [
                'No.',
                'Foto',
                'Fotografer',
                'Lokasi',
                'Aksi'
            ],
            tableData: [
                {
                    id: 1,
                    title: 'Title Of Table Content',
                    thumbnail_url: '-',
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
        async DeleteImage(id) {
            if (confirm('Apakah anda yakin akan menghapus item ini?')) {
                // const res = await _Gallery.deleteImage(id)
                // if (res.status) {
                //     alert(res.message)
                //     this.$router.go()
                // } else {
                //     alert(res.message)
                // }
            }
        }
    },
    mounted() {
        _Gallery.getAllImage().then(r => {
            this.tableData = r.data.payload
        })
    }
}
</script>

<style>

</style>