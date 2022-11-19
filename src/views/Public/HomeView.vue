<script setup>
</script>

<template>
  <Navbar />
  <Sidebar />
  <main class=" flex flex-col md:gap-y-5 py-10">
    <section id="jumbotron" class=" h-full container min-h-screen pt-10  md:pt-24 2xl:pt-28  relative flex flex-wrap">
      <div class="hidden md:flex gap-x-4 justify-center text-white items-center my-2 2xl:my-5 font-main cursor-default">
        <span
          class="bg-rose-600 hover:bg-opacity-80 duration-300 rounded-full px-1 md:px-2 md:py-1 text-xs 2xl:text-base"
          data-aos="fade" data-aos-duration="3000">Review Lokasi
          Wisata</span>
        <span
          class="bg-amber-600 hover:bg-opacity-80 duration-300 rounded-full px-1 md:px-2 md:py-1 text-xs 2xl:text-base"
          data-aos="fade" data-aos-duration="3000">Kanal Informasi
          Ter-update dan Terpercaya Lokasi
          Wisata Bandung</span>
        <span
          class="bg-lime-600 hover:bg-opacity-80 duration-300 rounded-full px-1 md:px-2 md:py-1 text-xs 2xl:text-base"
          data-aos="fade" data-aos-duration="3000">Rekomendasi
          Wisata</span>
      </div>
      <Hero />
      <div class="flex justify-center items-center min-h-full flex-grow">
        <a href="/#quote" class="flex justify-center flex-col hover:text-slate-700 duration-500 group b">
          <span class="text-sm 2xl:text-base ">
            Explore More
          </span>
          <ChevronDownIcon class="w-2 -mt-1  2xl:w-8 mx-auto text-slate-500 group-hover:translate-y-1 duration-500" />
        </a>
      </div>
    </section>
    <Quotes />
    <History />
    <FavouriteDestination />
  </main>
  <Footer />
</template>
<script >
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import Hero from '../../components/complex/Home/Hero.vue'
import History from '../../components/complex/Home/HistorySection.vue'
import Quotes from '../../components/complex/Home/QuotesSection.vue'
import FavouriteDestination from '../../components/complex/Home/FavouriteDestinationSection.vue'
import Navbar from '../../components/complex/Public/Navbar.vue'
import Sidebar from '../../components/complex/Public/Sidebar.vue'
import Footer from '../../components/complex/Public/Footer.vue'
export default {
  components: {
    Hero,
    History,
    Quotes,
    FavouriteDestination,
    ChevronDownIcon,
    Navbar,
    Sidebar,
    Footer
  },
  data() {
    return {
      imageURL: [
        { id: 1, name: 'img1', url: 'https://source.unsplash.com/2000x500' },
        { id: 2, name: 'img2', url: 'https://source.unsplash.com/500x1280' },
        { id: 3, name: 'img3', url: 'https://source.unsplash.com/500x1280' },
      ]
    }
  }
}
</script>
