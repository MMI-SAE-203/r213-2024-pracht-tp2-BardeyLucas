<!-- eslint-disable vue/multi-word-component-names -->
<script setup land="ts">
import fleche from '@/components/icons/indication-button-black-background.vue'
import localisation from '@/components/icons/localisation.vue';
import classique from '@/components/icons/classique.vue';
import loupeNoir from '@/components/icons/loupeNoir.vue';
</script>
<template>
  <section class="bg-[url('@/components/img/hero.png')] h-[calc(100vh-6.5rem)] bg-cover bg-hero">
    <div class="grille w-screen h-[calc(100vh-6.5rem)] bg-gradient-to-r from-Rose50 via-Violet50 to-Cyan50">
      <h1 class="text-Blanc col-span-12 pt-9 font-title font-bold text-3xl lg:text-7xl">Venez découvrir Cardeleon</h1>
      <p class="text-Blanc col-start-2 col-span-10 font-title font-semibold text-xl lg:text-4xl">C’est l’heure de
        vraiment économiser, avec ça carte étudiante !</p>
      <button
        class="text-Blanc col-start-2 col-span-10 lg:w-[25rem] lg:mx-auto border-white border-4 rounded-full h-12 text-sans text-sm lg:text-xl fond-regular">Rechercher
        vos offres maintenant</button>
      <fleche class="text-Blanc hidden lg:block col-span-12 mx-auto w-20" />
    </div>
  </section>
  <section class="grille mt-5">
    <button class="col-start-2 col-span-4 col4">
      <div class="col-start-2 col-span-2 place-items-center flex bg-AltBlanc h-11 rounded-full shadow-circleshadow">
        <localisation class="w-7 mx-auto" />
      </div>
      <p class="col-span-4 mt-2 text-sans text-sm font-regular">Recherche par localisation</p>
    </button>
    <button class="col-start-8 col-span-4 col4">
      <div class="col-start-2 col-span-2 place-items-center flex bg-AltBlanc h-11 rounded-full shadow-circleshadow">
        <classique class="w-7 mx-auto" />
      </div>
      <p class="col-span-4 mt-2 text-sans text-sm font-regular">Recherche classique</p>
    </button>
    <nav class="col-start-2 col-span-10 bg-AltBlanc h-10 shadow-searchshadow flex items-center rounded-full mt-5 gap-2.5">
      <loupeNoir class="w-6"/>
      <p>Fnac belfort</p>
    </nav>
    <!-- <Map />
    <ClassiqueCard /> -->
  </section>
  <section>
    <div>
      <h3>Abonnez-vous à notre Newsletter </h3>
      <img>
      <button>S'inscrire</button>
    </div>
  </section>
  <section>
    <h2>FAQ</h2>
    <section>
      <div>
        <h3>Comment utiliser votre carte étudiante ?</h3>
        <img>
      </div>
      <p></p>
    </section>
    <section>
      <div>
        <h3>Où utiliser votre carte étudiant ? </h3>
        <img>
      </div>
      <p>La carte étudiante peut être utilisée dans divers contextes, notamment à l'université pour accéder aux
        bâtiments et à la bibliothèque, ainsi que pour payer les repas dans les cafétérias.</p>

      <p>Elle offre également des avantages tels que des réductions sur les transports en commun, dans les
        magasins, les restaurants,
        les événements culturels et sportifs, ainsi que des offres spéciales en ligne.</p>

      <p>Il est recommandé de se renseigner auprès de l'établissement et de consulter les offres locales pour
        maximiser les avantages de la carte étudiante.</p>
    </section>
    <section>
      <div>
        <h3>Comment rechercher une offre sur Cardeleon ?</h3>
        <img>
      </div>
      <p></p>
    </section>
  </section>
</template>
