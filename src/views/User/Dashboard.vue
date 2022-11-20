<template>
    <main class="min-h-screen flex flex-col">
        <div class="w-full container py-10">
            <h1 class="text-4xl font-bold text-zinc-600">Tulis Tabloid</h1>
            <div class="w-full h-[1px] bg-black/40 my-10"></div>
            <form class="w-full h-full">
                <div class="flex flex-col w-full gap-y-10 py-5">
                    <div class="form-control w-full">
                        <label for="title" class="text-zinc-700 text-lg">Judul</label>
                        <div class="form-control w-full">
                            <input type="text border" placeholder="Judul" id="title"
                                class="border-b w-full text-2xl text-zinc-800 focus:outline-none">
                        </div>
                        <label for="writer" class="text-zinc-700 text-lg">Penulis</label>
                        <div class="form-control w-full">
                            <input type="text border" placeholder="Penulis" id="writer"
                                class="border-b text-xl xl:w-1/2 text-zinc-800 focus:outline-none">
                        </div>
                        <label for="editor" class="text-zinc-700 text-lg">Editor</label>
                        <div class="form-control w-full">
                            <input type="text border" placeholder="Editor" id="editor"
                                class="border-b text-xl xl:w-1/2 text-zinc-800 focus:outline-none">
                        </div>
                        <label for="tag" class="text-zinc-700 text-lg">Tag</label>
                        <div class="form-control w-full">
                            <input type="text border" placeholder="Tags" id="tag"
                                class="border-b text-xl xl:w-1/4 text-zinc-800 focus:outline-none" v-model="tagContent">
                            <span class="block text-sm text-zinc-400 mt-1 ">Tekan Tanda Koma ( , ) atau Spasi untuk
                                memasukan tag
                                baru</span>
                        </div>
                        <div class="tag-group w-full h-10">
                            <ul class="flex gap-2">
                                <li v-for="(item, index) in tags" :key="index"
                                    class="px-2 py-1 rounded-full text-white font-semibold flex gap-2 items-center"
                                    :class="`bg-${tagColor[index]}-500`">
                                    <span>
                                        #{{ item }}
                                    </span>
                                    <button type="button" class="" @click="deleteTag(index)">
                                        <XMarkIcon class="w-5" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <QuillEditor contentType="html" theme="snow" v-model:content="content" ref="myQuillEditor"
                    toolbar="essential" class="min-h-full text-base text-zinc-700" placeholder="Tulis berita disini" />
            </form>
        </div>
    </main>
</template>
<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { XMarkIcon } from '@heroicons/vue/24/outline'

export default {
    components: {
        QuillEditor,
        XMarkIcon
    },
    data() {
        return {
            content: '',
            tagContent: '',
            tags: [],
            tagColor: [
                'red',
                'amber',
                'lime',
                'slate',
                'blue',
            ]
        }
    },
    methods: {
        deleteTag(index) {
            this.tags.splice(index, 1)
        }
    },
    watch: {
        content(val) {
            console.table(val)
        },
        tagContent(val) {
            if (val !== '') {
                if (val.length > 1 && this.tags.length <= 5) {
                    if (val.charAt(val.length - 1) === ',' || val.charAt(val.length - 1) === ' ') {
                        let word = val.substring(0, val.length - 1)
                        this.tagContent = ''
                        this.tags.push(word.toLowerCase())
                        console.log(this.tags)
                    }
                } else if (this.tags.length > 5) {
                    this.tagContent = ''
                }
            }
        }
    }
}
</script>

<style scoped>
.form-control {
    margin-bottom: 2rem;
}

.form-control>input {
    padding: 5px 2px;
}

.form-control>label {
    padding: 5px 2px;
}
</style>