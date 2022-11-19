<template>
    <Navbar />
    <main class="pt-10 md:py-36 2xl:py-44 ">
        <section class="container min-h-screen">
            <div class="h-[500px] overflow-hidden">
                <img src="https://source.unsplash.com/1280x1080?bandung" alt="" srcset="">
            </div>
            <h3 class="capitalize mt-10 text-2xl font-semibold">{{ post.title }}</h3>
            <h5 class="mt-3 text-sm text-slate-500"> Senin, 12 November 2022</h5>
            <h5 class="mb-3 text-sm text-slate-500"> Redaktur : Riani Lubis
            </h5>
            <p class="leading-8 indent-5 my-6 text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero architecto blanditiis repudiandae error
                laborum at assumenda labore, itaque cumque dicta quod quos tempora deserunt rerum quam quidem in sit.
                Dolores, magnam provident quam, sapiente distinctio quae a ipsam aliquid tempore eveniet delectus
                officia
                obcaecati vero illo doloremque nisi sunt laborum nesciunt eius, voluptatibus ipsa totam magni facere?
                Enim
                facilis, molestias est tempora at optio ea a repellat reiciendis suscipit necessitatibus distinctio odio
                natus voluptate, quia architecto? Aperiam adipisci cupiditate praesentium modi sed facere accusantium
                eius
                minima nulla odit dicta accusamus ut repellendus odio tempore doloribus reprehenderit quas dignissimos
                cum
                ipsa, placeat nemo dolorem velit. Quia dolore dolor ipsa repudiandae! Maxime architecto quae tenetur
                illo
                porro animi dicta deserunt? Deserunt, quis adipisci ratione sapiente repudiandae quas distinctio numquam
                maxime ipsum earum magni. Eum, ad fugit ducimus totam, temporibus explicabo neque laborum amet, aperiam
                illo
                id! Accusamus tenetur nam earum consequatur aut, dolorem quisquam eius maiores ut fuga quasi neque
                debitis
                ex nobis ullam laboriosam labore vitae? At mollitia non inventore. Cumque, magnam? Atque et recusandae
                consequatur, tempore repellat molestiae doloremque assumenda facilis cum quas perferendis exercitationem
                debitis deserunt sequi adipisci veritatis enim accusamus odio corrupti ipsam nam. Molestiae, dicta
                error.
                Sit.</p>
            <span class="block text-sm text-slate-500">Editor : {{ post.editor }} </span>
            <div class="w-full h-[1px] bg-slate-400 my-10"></div>
            <div class="flex items-center gap-5 mb-28">
                <span>Tags : </span>
                <div class="px-3 py-1 bg-blue-500 rounded-full text-slate-100 flex justify-center items-center text-sm">
                    Tag 1</div>
                <div
                    class="px-3 py-1 bg-amber-500 rounded-full text-slate-100 flex justify-center items-center text-sm">
                    Tag 2</div>
                <div class="px-3 py-1 bg-lime-500 rounded-full text-slate-100 flex justify-center items-center text-sm">
                    Tag 3</div>
            </div>
            <H1>Comments</H1>
            <form>
                <h1>Tulis Komentar :</h1>
                <textarea name="" id="" cols="30"
                    class="w-full border rounded-sm h-44 bg-gray-200 p-2 focus:outline outline-slate-300">
                </textarea>
                <div class="flex items-center justify-between gap-x-10 py-2">
                    <div class="inline-flex flex-col text-slate-700 gap-2">
                        <label for="Nama">Nama*</label>
                        <input type="text" name="" id="Nama"
                            class="border bg-gray-200 p-2 rounded  focus:outline outline-slate-300" size="30">
                    </div>
                    <div class="inline-flex flex-col text-slate-700 gap-2">
                        <label for="email">Email*</label>
                        <input type="text" name="" id="email"
                            class="border bg-gray-200 p-2 rounded  focus:outline outline-slate-300" size="30">
                    </div>
                    <div class="inline-flex flex-col text-slate-700 gap-2 items-center pt-8">
                        <button
                            class="bg-blue-500 flex justify-center items-center px-5 py-2 text-white rounded-full hover:bg-opacity-70 duration-500">Post</button>
                    </div>
                </div>
            </form>
        </section>
    </main>
    <Footer />
</template>
    
<script>

import H1 from '../components/basic/Home/HeadingSection.vue'
import Navbar from '../components/complex/Navbar.vue'
import Footer from '../components/complex/Footer.vue'
import { POSTS_LISTS } from '../app/libs/resource/posts'
export default {
    components: {
        H1,
        Navbar,
        Footer
    },
    data() {
        return {
            allPost: POSTS_LISTS,
            post: POSTS_LISTS.find((post) => post.id === +this.$route.params.id)
        }
    },
    mounted() {
        console.log(this.post)
    }
}
</script>
    
<style>

</style>