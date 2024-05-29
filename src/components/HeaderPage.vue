<script setup lang="ts">
import loupeBlanche from './icons/loupeBlanche.vue'
import logo from './logo.vue'
</script>
<style scoped>
    ::placeholder {
  color: Black;
    }
</style>
<template>
    <header class="bg-Noir text-Blanc flex justify-between px-10 lg:py-4 py-2.5 w-screen">
        <div>
            <a class="flex gap-4">
                <logo class="h-9 lg:h-[4.5rem]" />
                <h2 class="font-firstTitle text-2xl lg:text-5xl my-auto">Cardeleon</h2>
            </a>
        </div>
        <nav class=" gap-12 hidden lg:flex">
            <form class="flex text-Noir gap-12">
                <div class="my-auto">
                    <button>
                        <loupeBlanche class="w-12" />
                    </button>
                </div>
                <div class="my-auto">
                    <input class="h-12 w-96 px-4 text-Noir rounded-2xl " placeholder="Recherche..." type="text"
                        name="Nom" id="Nom" required>
                </div>
            </form>
            <a class="my-auto text-2xl">Rubriques</a>
            <a class="my-auto text-2xl">Contact</a>
        </nav>
    </header>
</template>../../public/logo/logo.vue