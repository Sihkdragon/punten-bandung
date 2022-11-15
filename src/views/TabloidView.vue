<template>
    <section class="container min-h-screen">
        <div class="slider h-97  w-full flex flex-grow overflow-hidden">
            <!-- <div class="h-96 min-w-full basis-full" v-for="item in ItemCount" :key="item.id"
                :class="`bg-${item.color}-500`"></div> -->

            <div class="h-96 min-w-full basis-full bg-blue-500 duration-1000 ease-in-out" :style="transX"></div>
            <div class="h-96 min-w-full basis-full bg-green-500 duration-1000 ease-in-out" :style="transX"></div>
            <div class="h-96 min-w-full basis-full bg-red-500 duration-1000 ease-in-out" :style="transX"></div>

        </div>
        <button class="bg-slate-500 px-2 py-1 mt-10 ml-2 rounded text-white" @click="prevSlide">left</button>
        <button class="bg-slate-500 px-2 py-1 mt-10 ml-2 rounded text-white" @click="nextSlide">right</button>
        <h1>{{ ItemCount.length }}</h1>
        <h1>{{ yValue }}</h1>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            ItemCount: [
                { color: 'blue', id: 1, isActive: true },
                { color: 'green', id: 2, isActive: false },
                { color: 'red', id: 3, isActive: false },
            ],
            activeIndex: 0,
            yValue: 0,
            isReversed: false
        }
    },
    mounted() {
        setInterval(() => {
            if (!this.isReversed) {
                this.yValue += 1
                if (this.yValue === this.ItemCount.length - 1) {
                    this.isReversed = true
                }
            } else {
                this.yValue -= 1
                if (this.yValue === 0) {
                    this.isReversed = false
                }
            }
        }, 8000)
    },
    methods: {
        nextSlide() {
            if (this.yValue < this.ItemCount.length - 1) {
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
.firstActive {
    transform: translate(0, 0);
}

.secondActive {
    transform: translate(0, -100%);
}

.thirdActive {
    transform: translate(0, -200%);
}
</style>