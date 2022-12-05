<template>
    <UserLayout :Head="'Kelola Pengguna'">
        <UserTable />
    </UserLayout>

</template>

<script>
import UserTable from '../../../components/complex/User/Table/UserTable.vue';
import UserLayout from '../../../components/layout/UserLayout.vue';
export default {
    components: { UserLayout, UserTable },
}
</script>

<style>

</style>