<template>
    <Navbar />
    <Sidebar />
    <main class="pt-10 md:pt-24 2xl:pt-28">
        <section class="container min-h-screen  py-10">
            <H1>Tabloid's</H1>
            <div class="grid grid-cols-2 gap-5">
                <div class="w-full min border rounded-sm overflow-hidden" v-for="post in POSTList" :key="post.id">
                    <figure class="w-full h-64 overflow-hidden group">
                        <img :src="post.thumbnail_url" alt="thumbnail"
                            class="object-fill w-full group-hover:scale-110 duration-500">
                    </figure>
                    <div class="p-3 shadow min-h-full">
                        <h3 class="font-semibold text-slate-700 my-2 h-16 capitalize">{{ post.title }}</h3>
                        <div class="min-h-full mt-4">
                            <p class="font-extralight text-xs text-slate-500 my-3"
                                v-html="post.body.substring(0, 250) + '...'">
                            </p>
                            <span class="text-slate-600 my-1 text-sm" v-if="post.redacture.name">Redaktur : {{
                                    post.redacture.name
                            }}</span>
                            <span class="text-slate-500 my-1 block text-sm">{{ getReadableDate(post.created_at)
                            }}</span>
                            <div class="flex justify-between  items-center my-4">
                                <div class="flex gap-4 items-center">
                                    <span class="text-slate-600">Tag : </span>
                                    <div
                                        class="rounded-full text-xs px-2 py-1 bg-blue-500 text-slate-100 cursor-pointer hover:bg-opacity-80 duration-300">
                                        {{ post.tags.tag1 }}</div>
                                    <div
                                        class="rounded-full text-xs px-2 py-1 bg-amber-500 text-slate-100 cursor-pointer hover:bg-opacity-80 duration-300">
                                        {{ post.tags.tag2 }}</div>
                                    <div
                                        class="rounded-full text-xs px-2 py-1 bg-lime-500 text-slate-100 cursor-pointer hover:bg-opacity-80 duration-300">
                                        {{ post.tags.tag3 }}</div>
                                </div>
                                <a :href="post.url"
                                    class="border border-slate-700 text-slate-700 px-3 py-1 rounded duration-500 hover:bg-blue-500 hover:text-white hover:border-blue-700">Baca</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<script>
import H1 from '../components/basic/Home/HeadingSection.vue'
import _Tabloid from '../app/services/TabloidService'
import { POSTS_LISTS } from '../app/libs/resource/posts'
import getReadableDate from '../app/libs/helpers/utils/dateHelpers'
import Navbar from '../components/complex/Navbar.vue'
import Sidebar from '../components/complex/Sidebar.vue'
import Footer from '../components/complex/Footer.vue'
export default {
    components: {
        H1,
        Navbar,
        Sidebar,
        Footer
    },
    mounted() {
        _Tabloid.getAllTabloids().then((r) => {
            if (r.data.statusCode === 200) {
                this.POSTList = r.data.payload
            }
        })
    },
    data() {
        return {
            getReadableDate,
            POSTList: POSTS_LISTS,
            paraghrap: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum distinctio ex a facilis? Quam culpa iure impedit a excepturi adipisci quia aliquam provident veritatis aspernatur incidunt, consequuntur aperiam repellendus, maiores commodi recusandae possimus mollitia sit laudantium nam, porro labore inventore voluptatibus quasi! Corporis iusto explicabo accusantium vel dignissimos assumenda beatae ipsum velit omnis dolore autem tempore fugit nihil necessitatibus facere libero ab atque sunt, eligendi repudiandae quisquam! Incidunt earum quibusdam dolor id reprehenderit dolores adipisci deserunt nisi ipsa accusantium nulla natus suscipit, repellat, fugit quos nesciunt facilis odio. Illo quis veniam sed aperiam aliquam nisi sequi esse exercitationem similique blanditiis eius explicabo ad reprehenderit non odit debitis numquam facere, consectetur ipsam et. Ullam, iure reiciendis quisquam in sequi aut maiores commodi unde ut rem ex, placeat vero ducimus, itaque odio? Officiis similique beatae adipisci voluptatem qui dolore repellat est eveniet? Similique ab debitis aut delectus, a eos qui ipsam quis placeat consequuntur culpa totam sapiente iste cupiditate corporis labore tempora, vel alias illum maiores nostrum blanditiis voluptatem. Sunt beatae odio autem fuga voluptate, accusantium quaerat provident qui, at sit corrupti quam. Ab inventore sit provident molestiae eveniet non maiores hic est, assumenda molestias earum? Laudantium blanditiis sapiente vel ea. Eum mollitia minus blanditiis commodi, dicta iste eos ducimus similique repellat. Consequatur enim suscipit labore, quis voluptatem blanditiis quidem earum aliquid perferendis illum maxime dignissimos, quasi hic unde? Adipisci consequuntur, sapiente fugiat esse harum tempora corrupti praesentium fugit? Exercitationem inventore quas voluptates possimus molestiae et, facilis expedita, reiciendis nostrum in suscipit ad neque nulla soluta, doloribus quo minus nesciunt autem velit? Error praesentium dignissimos adipisci repellendus ab libero accusamus ut repellat, nulla, ipsam iste cumque quam minima sunt reiciendis odio sit recusandae, nesciunt ea laborum quod perspiciatis. Dolore itaque cupiditate soluta facere tempora a repellendus sunt exercitationem, alias veniam iste? Magni perspiciatis esse itaque nihil natus ipsum cupiditate nulla modi corporis vel soluta delectus, magnam expedita voluptate qui iusto nam perferendis cum molestias iure quae laudantium ducimus tenetur. Voluptatibus vitae placeat iure illum architecto autem possimus voluptate itaque maxime, quis quas optio esse tempore deserunt laboriosam perferendis in dolores deleniti! Quidem minima blanditiis quo sunt nostrum ex itaque deserunt nihil rerum tenetur ad recusandae beatae consectetur, eius omnis earum veritatis perferendis? Sequi eum nihil ullam dolorum doloremque, fuga cupiditate laudantium alias consectetur. Quas tempora sint voluptas commodi minima ex atque rem, nisi repellat cum iste cupiditate aliquam facilis veniam vitae et expedita similique labore maxime fugiat ratione! Tempore ex explicabo autem optio laborum alias fugit, itaque fugiat dignissimos nesciunt facilis perspiciatis quos ad enim odit libero. Itaque quidem tempore amet rem, quo quaerat eum vitae. Praesentium repellendus veniam rerum harum repudiandae, sint officia, cupiditate earum animi tempore unde suscipit debitis. Totam hic veniam accusamus rem cum, eius optio aperiam nemo voluptatum adipisci vitae provident ea qui impedit saepe iste eligendi facilis, sunt ex molestias fuga. Nisi deserunt excepturi culpa, dolor quam facere! Quos, totam deleniti minus voluptas unde distinctio repellat illum id repudiandae voluptatibus sequi assumenda porro optio culpa minima ad!"
        }
    }
}
</script>

<style>

</style>