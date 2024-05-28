<script setup lang="ts">
import formulaire from './icons/formulaire.vue'
import mail from './icons/Mail.vue'
import linkedin from './icons/Linkedin.vue'
import instagram from './icons/Instagram.vue'
import Tweeter from './icons/X.vue'
import facebook from './icons/Facebook.vue'
import fr from './icons/FR.vue'
import en from './icons/EN.vue'
</script>
<template>
    <footer class="grille bg-Noir text-Blanc">
        <div class="col-span-12 col12 pb-24">
            <section class="mt-24 col-span-3 flex flex-col items-center border-r border-r-Blanc">
                <div>
                    <h3 class="font-title text-2xl font-bold pb-7">Rubriques</h3>
                    <p class="font-sans text-sm py-4">Activités culturelles</p>
                    <p class="font-sans text-sm py-4">Restaurants</p>
                    <p class="font-sans text-sm py-4">Loisirs</p>
                    <p class="font-sans text-sm py-4">Commerces</p>
                    <p class="font-sans text-sm py-4">Autres</p>
                </div>
                <div>
                    <h3 class="font-title text-2xl font-bold py-7">Newsletter</h3>
                    <p class="font-sans text-sm py-4">Connexion</p>
                </div>
            </section>
            <section class="col-span-3 flex flex-col items-center mt-24 border-r border-r-Blanc">
                <div>
                    <h3 class="font-title text-2xl font-bold pb-7">Aides et contacts</h3>
                    <a class="flex gap-5 items-center">
                        <formulaire />
                        <p class="font-sans text-sm py-4">Formulaire de contact</p>
                    </a>
                    <a class="flex gap-5 items-center">
                        <mail class="w-7 h-7" />
                        <p class="font-sans text-sm py-4">Envoyer un mail</p>
                    </a>
                </div>
                <div>
                    <h3 class="font-title text-2xl font-bold py-7">Nos réseaux</h3>
                    <div class="flex gap-7 justify-center">
                        <a>
                            <linkedin class="w-7" />
                        </a>
                        <a>
                            <instagram class="w-7" />
                        </a>
                        <a>
                            <Tweeter class="w-7" />
                        </a>
                        <a>
                            <facebook class="w-7" />
                        </a>
                    </div>
                </div>
            </section>
            <section class="col-span-3 flex flex-col items-center mt-24 border-r border-r-Blanc">
                <div>
                    <h3 class="font-title text-2xl font-bold pb-7">A propos</h3>
                    <p class="font-sans text-sm py-4">Gestion des données</p>
                    <p class="font-sans text-sm py-4">CGU</p>
                    <p class="font-sans text-sm py-4">CGV</p>
                    <p class="font-sans text-sm py-4">Mentions légales</p>
                    <p class="font-sans text-sm py-4">FAQ</p>
                    <p class="font-sans text-sm py-4">Qui sommes noous ?</p>
                    <p class="font-sans text-sm py-4">Plan du site</p>
                </div>
            </section>
            <section class="col-span-3 flex flex-col items-center mt-24">
                <div>
                    <h3 class="font-title text-2xl font-bold pb-7">Langues</h3>
                    <a class="flex gap-5 items-center">
                        <fr />
                        <p class="font-sans text-sm py-4">Français</p>
                    </a>
                    <a class="flex gap-5 items-center">
                        <en />
                        <p class="font-sans text-sm py-4">English</p>
                    </a>
                </div>
            </section>
        </div>
        <section class="w-screen col-span-12 h-24 border-t border-t-Blanc flex justify-center items-center">
            <p>© Cardeleon-2025-Matthis Boreaniz tous droits réservés</p>
        </section>
    </footer>
</template>