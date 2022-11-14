<template>
    <div class="w-full h-96 md:h-[500px] relative rounded bg-slate-200  overflow-hidden" data-aos="fade-up"
        data-aos-duration="3000">
        <div class="flex h-[500px] absolute gap-x-5 duration-1000" :style="styleSlide">
            <div v-for="image in imageURL" :key="image.id" class="w-[1345px] h-[500px]">
                <img :src="image.url" alt="image.url" class=" object-containmd:object-cover w-full h-[500px]">
            </div>
        </div>
        <div class="absolute flex bottom-5 w-full justify-center max-auto gap-x-3">
            <button class="w-5 h-5 rounded-full bg-white hover:w-8 duration-300 shadow" @click="slideLeft"></button>
            <button class="w-8 h-5 rounded-full bg-white  duration-300 shadow" @click="slideCenter"></button>
            <button class="w-5 h-5 rounded-full bg-white hover:w-8 duration-300 shadow" @click="slideRight"></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageURL: [
                { id: 1, name: 'img1', url: 'https://source.unsplash.com/1345x500?bandung' },
                { id: 2, name: 'img2', url: 'https://source.unsplash.com/1345x501?bandung' },
                { id: 3, name: 'img3', url: 'https://source.unsplash.com/1345x502?bandung' },
            ],
            styleSlide: {
                translate: '-1365px'
            },
            TranslateRange: -1365,
            TranslateMax: -2730,
            translateMin: 0
        }
    },
    methods: {
        slideRight() {
            console.log(this.styleSlide.translate)
            let rightRange = this.TranslateRange - 1365
            if (this.TranslateRange > this.TranslateMax) {
                this.styleSlide.translate = rightRange + 'px'
            }
        },
        slideCenter() {
            console.log(this.styleSlide.translate)
            let center = -1365
            this.styleSlide.translate = center + 'px'
        },
        slideLeft() {
            console.log(this.styleSlide.translate)
            let rightRange = this.TranslateRange + 1365
            if (this.TranslateRange < this.translateMin) {
                this.styleSlide.translate = rightRange + 'px'
            }
        },
    }
}
</script>

<style>

</style>