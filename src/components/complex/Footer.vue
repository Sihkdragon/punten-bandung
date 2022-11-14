<template>
    <footer class=" items-center bg-slate-800 h-fit w-full">
        <div
            class="container flex flex-col md:flex-row text-slate-200 h-full md:items-center md:justify-between gap-x-4 py-5">
            <div class="flex items-center justify-center md:justify-start">
                <span class="text-center">Copyright &#169; 2022 PUNTENBANDUNG.com</span>
            </div>
            <div class="h-full flex flex-col pt-7">
                <h5 class="font-semibold">Kontak</h5>
                <ul class="flex flex-col gap-y-3 list-inside pt-4 text-sm">
                    <li class="">
                        <a href="https://www.instagram.com/pbandung.media" target="_blank"
                            class="flex gap-x-2 hover:underline">
                            <InstagramIcon />
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="https://wa.me/6282128002135" target="_blank" class="flex gap-x-2 hover:underline">
                            <WhatsappIcon />
                            <span>Whatsapp</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="https://punteunbandung.com" target="_blank" class="flex gap-x-2 hover:underline">
                            <BrowserIcon />
                            <span>https://punteunbandung.com</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="h-full flex flex-col pt-7">
                <h5 class="font-semibold">Feature</h5>
                <ul class="text-sm font-extralight block list-disc list-inside">
                    <li v-for="item in menu" :key="item.id">
                        <RouterLink :to="item.to">{{ item.name }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="h-full flex flex-col pt-7">
                <h5 class="font-semibold">Bergabung Bersama Kami</h5>
                <span class="text-sm font-light text-center mt-2">Tulis Review-mu sendiri</span>
                <RouterLink to="/register"
                    class="flex justify-center mt-8 bg-slate-200 text-slate-800 rounded-full py-2 hover:bg-opacity-50 duration-300">
                    Daftar
                    Sekarang
                </RouterLink>
            </div>
        </div>
    </footer>
</template>

<script>
import MENU from '@/app/libs/resource/menu.js';
import InstagramIcon from '@/assets/icon/InstagramIcon.vue'
import WhatsappIcon from '@/assets/icon/WhatsappIcon.vue'
import BrowserIcon from '@/assets/icon/BrowserIcon.vue'
import { POSTS_LISTS } from '../../app/libs/resource/posts';
export default {
    components: {
        InstagramIcon,
        WhatsappIcon,
        BrowserIcon
    },
    data() {
        return {
            menu: MENU,
            posts: POSTS_LISTS
        }
    }
};
</script>

<style>

</style>