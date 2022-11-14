<script setup>
</script>

<template>
  <main class=" flex flex-col md:gap-y-5 ">
    <section id="jumbotron" class="container min-h-screen pt-10 md:pt-28 relative">
      <div class="hidden nd:flex gap-x-4 justify-center text-slate-200 items-center my-5 font-main">
        <span class="bg-slate-500 rounded-full px-1 md:px-2 md:py-1 text-xs md:text-base" data-aos="fade"
          data-aos-duration="3000">Review Lokasi
          Wisata</span>
        <span class="bg-slate-500 rounded-full px-1 md:px-2 md:py-1 text-xs md:text-base" data-aos="fade"
          data-aos-duration="3000">Kanal Informasi
          Ter-update dan Terpercaya Lokasi
          Wisata Bandung</span>
        <span class="bg-slate-500 rounded-full px-1 md:px-2 md:py-1 text-xs md:text-base" data-aos="fade"
          data-aos-duration="3000">Rekomendasi
          Wisata</span>
      </div>
      <Hero />
      <div class="left-0 right-0 flex justify-center items-center  absolute bottom-20">
        <a href="/#quote" class="flex justify-center flex-col hover:text-slate-700 duration-500 group">
          <span>
            Explore More
          </span>
          <ChevronDownIcon class="w-8 mx-auto text-slate-500 group-hover:scale-x-125 duration-500" />
        </a>
      </div>
    </section>
    <Quotes />
    <History />
    <FavouriteDestination />
  </main>

</template>
<script >
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import Hero from '../components/complex/Hero.vue'
import History from '../components/complex/Home/HistorySection.vue'
import Quotes from '../components/complex/Home/QuotesSection.vue'
import FavouriteDestination from '../components/complex/Home/FavouriteDestinationSection.vue'
export default {
  components: {
    Hero, History, Quotes, FavouriteDestination, ChevronDownIcon
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
