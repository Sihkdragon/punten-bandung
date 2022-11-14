<template>
    <section id="recent" class="min-h-screen container">
        <H1>Lokasi Terfavorit</H1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <figure data-aos="slide-up" data-aos-duration="3000"
                class="border rounded-sm h-[500px] relative  shadow-inside group overflow-hidden select-none">
                <img src="https://source.unsplash.com/300x500?bandung" alt="image"
                    class="w-full h-full object-fill group-hover:scale-110 duration-500">
                <figcaption class="absolute left-5 bottom-14 font-main text-4xl text-white font-semibold z-10">Dago
                </figcaption>
                <figcaption class="absolute left-5 bottom-6 text-white font-extralight text-xl z-10">City View
                </figcaption>
                <div class="absolute right-0 bottom-0 z-10 left-0 h-1 bg-rose-600 duration-500 group-hover:h-3"></div>
            </figure>
            <figure data-aos="slide-up" data-aos-duration="2000"
                class="border rounded-sm h-[500px] relative  shadow-inside group overflow-hidden select-none">
                <img src="https://source.unsplash.com/301x500?bandung" alt="image"
                    class="w-full h-full object-fill group-hover:scale-110 duration-500">
                <figcaption class="absolute left-5 bottom-14 font-main text-4xl text-white font-semibold z-10">Braga
                </figcaption>
                <figcaption class="absolute left-5 bottom-6 text-white font-extralight text-xl z-10">City Walk
                </figcaption>
                <div class="absolute right-0 bottom-0 z-10 left-0 h-1 bg-amber-600 duration-500 group-hover:h-3"></div>
            </figure>
            <figure data-aos="slide-up" data-aos-duration="1000"
                class="border rounded-sm h-[500px] relative  shadow-inside group overflow-hidden select-none">
                <img src="https://source.unsplash.com/300x501?bandung" alt="image"
                    class="w-full h-full object-fill group-hover:scale-110 duration-500">
                <figcaption class="absolute left-5 bottom-14 font-main text-4xl text-white font-semibold z-10">Tangkuban
                    Parahu
                </figcaption>
                <figcaption class="absolute left-5 bottom-6 text-white font-extralight text-xl z-10">Nature View
                </figcaption>
                <div class="absolute right-0 bottom-0 z-10 left-0 h-1 bg-lime-600 duration-500 group-hover:h-3"></div>
            </figure>
        </div>
        <div class="flex justify-center items-center my-10">
            <button
                class=" duration-1000 border border-slate-800 text-center text-slate-800 rounded-full px-4 py-2 bg-white hover:bg-slate-800 hover:text-slate-200"
                data-aos="fade" data-aos-duration="1000">Telusuri
                lebih
                banyak</button>
        </div>
    </section>
</template>

<script>
import H1 from '../../basic/Home/HeadingSection.vue'
export default {
    components: {
        H1
    }
}
</script>
<!-- https://source.unsplash.com/300x400 -->
<style scoped>
.shadow-inside::after {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    -moz-box-shadow: inset 0 -40px 50px -20px #000000;
    -webkit-box-shadow: inset 2 -50px 70px -20px #000000;
    box-shadow: inset 0 -40px 50px -20px #000000;
}
</style>