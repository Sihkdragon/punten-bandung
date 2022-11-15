<template>
  <router-view name="Navbar" />
  <router-view name="Sidebar" />
  <main class="py-10">
    <router-view />
    <router-view name="main" />
  </main>
  <router-view name="Footer" />
</template>

<script>


export default {
  name: "App",
  components: {
  }
};
</script>
