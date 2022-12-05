<template>
    <UserLayout :Head="'Kelola Tabloid'">
        <Table />
    </UserLayout>
</template>

<script>
import Table from '../../../components/complex/User/Table/TabloidsTable.vue';
import UserLayout from '../../../components/layout/UserLayout.vue';

export default {
    components: { Table, UserLayout }
}
</script>

<style>

</style>