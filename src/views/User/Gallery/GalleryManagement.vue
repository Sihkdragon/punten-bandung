<template>
    <UserLayout :Head="'Kelola Galeri'">
        <GalleryTable />
    </UserLayout>
</template>

<script>
import GalleryTable from '../../../components/complex/User/Table/GalleryTable.vue';
import UserLayout from '../../../components/layout/UserLayout.vue'
export default {
    components: {
        UserLayout,
        GalleryTable
    }
}
</script>

<style>

</style>