<script setup lang="ts">
import loupeBlanche from './icons/loupeBlanche.vue'
import logo from './logo.vue'
import Hamburger from './icons/Hamburger.vue';
import Croix from './icons/Croix.vue';
import { ref } from 'vue'
const activeMenu = ref(false)

function closeMenu() {
    activeMenu.value = false
}
</script>
<style scoped>
    ::placeholder {
  color: Black;
    }
</style>
<template>
    <header class="lg:grille bg-Noir text-Blanc lg:py-4 py-2.5 w-screen">
        <div class="grille lg:supprGrille lg:col-span-3">
            <a class="col-span-6 col6 lg:col3 ">
                <logo class="w-full my-auto lg:h-[4.5rem] col-span-2 lg:col-span-1" />
                <h2 class="font-firstTitle text-2xl lg:text-5xl my-auto col-span-4 lg:col-span-2">Cardeleon</h2>
            </a>
            <button class="col-span-1 col-start-12 lg:hidden">
                <Hamburger />
                <Croix class="hidden" />
            </button>
        </div>
        <nav class="grille lg:col-start-7 lg:col-span-6 lg:col6 gap-x-2.5">
            <form class="text-Noir col-span-12 col12 lg:col-span-4 lg:col4">
                <button class="lg:justify-end flex my-auto col-start-2 col-span-1 lg:col-start-1">
                    <loupeBlanche class="w-5 lg:w-12" />
                </button>
                <div class="my-auto col-start-3 col-span-9 lg:col-start-2 lg:col-span-3">
                    <input class="text-sans text-sm font-regular h-7 lg:h-12 w-full px-7 lg:px-4 text-Noir rounded-2xl "
                        placeholder="Recherche..." type="text" name="Nom" id="Nom" required>
                </div>
            </form>
            <a
                class="lg:text-right lg:w-1 my-auto lg:text-xl text-sans text-sm font-regular col-start-4 col-span-9 lg:col-start-5 lg:col-span-1">Rubriques</a>
            <a class="lg:text-right lg:w-1 my-auto lg:text-xl text-sans text-sm font-regular col-start-4 col-span-9
                lg:col-start-6 lg:col-span-1">Contact</a>
        </nav>
    </header>
</template>