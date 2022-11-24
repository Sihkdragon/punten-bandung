<template>
    <div class="w-full flex flex-grow overflow-hidden h-96 2xl:h-[500px] bg-slate-500" data-aos="fade-up"
        data-aos-duration="3000">
        <div v-for="image in imageURL" :key="image.id" class="min-w-full bg-white h-full  duration-1000"
            :style="transX">
            <img :src="image.url" alt="image.url" class="object-scale-down xl:object-cover w-full h-full">
        </div>
        <div class="absolute flex bottom-5 w-full justify-center max-auto gap-x-3">
            <button class="w-5 h-5 rounded-full bg-white hover:w-8 duration-300 shadow" @click="prevSlide"></button>
            <button class="w-8 h-5 rounded-full bg-white  duration-300 shadow" @click="slideCenter"></button>
            <button class="w-5 h-5 rounded-full bg-white hover:w-8 duration-300 shadow" @click="nextSlide"></button>
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
            translateMin: 0,
            //below new
            yValue: 0,
            isReversed: false

        }
    },
    mounted() {
        let time = 8000
        setInterval(() => {
            if (!this.isReversed) {
                time = 8000
                this.yValue += 1
                if (this.yValue === this.imageURL.length - 1) {
                    this.isReversed = true
                }
            } else {
                this.yValue -= 1
                if (this.yValue === 0) {
                    this.isReversed = false
                    time = 1000
                }
            }
        }, time)
    },
    methods: {
        slideCenter() {
            const gotoCenter = Math.round((this.imageURL.length - 1) / 2)
            this.yValue = gotoCenter
        },
        nextSlide() {
            if (this.yValue < this.imageURL.length - 1) {
                this.yValue += 1
            }
        },
        prevSlide() {
            if (this.yValue >= 1) {
                this.yValue -= 1
            }
        },
    },
    computed: {
        transX() {
            return `transform: translateX(-${this.yValue}00%)`
        }
    }
}
</script>

<style>

</style>