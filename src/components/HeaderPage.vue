<script setup lang="ts">
import loupe from './icons/loupe.vue'
import logo from './logo.vue'
</script>
<style scoped>
    ::placeholder {
  color: Black;
    }
</style>
<template>
    <header class="bg-Noir text-Blanc flex justify-between px-10 py-4 w-screen">
        <div>
            <a class="flex gap-4">
                <logo class="h-[4.5rem]" />
                <h2 class="font-firstTitle text-5xl my-auto">Cardeleon</h2>
            </a>
        </div>
        <nav class="flex gap-12">
            <form class="flex text-Noir gap-12">
                <div class="my-auto">
                    <button>
                        <loupe class="w-12"/>
                    </button>
                </div>
                <div class="my-auto">
                    <input class="h-12 w-96 px-4 text-Noir rounded-2xl " placeholder="Recherche..." type="text" name="Nom" id="Nom" required>
                </div>
            </form>
            <a class="my-auto text-2xl">Rubriques</a>
            <a class="my-auto text-2xl">Contact</a>
        </nav>
    </header>
</template>../../public/logo/logo.vue