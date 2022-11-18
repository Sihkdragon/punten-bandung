<template>
  <Navbar />
  <Sidebar />
  <main class="py-10 container min-h-screen">
    <h1>This is an about page</h1>
  </main>
  <Footer />
</template>
<script>
import Navbar from '../components/complex/Navbar.vue'
import Sidebar from '../components/complex/Sidebar.vue'
import Footer from '../components/complex/Footer.vue'
export default {
  components: {

    Navbar,
    Sidebar,
    Footer
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
