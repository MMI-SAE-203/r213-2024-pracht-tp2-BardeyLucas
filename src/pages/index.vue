<script setup lang="ts">
const maisonsListe: {
  adresse: string;
  collectionId: string;
  collectionName: string;
  created: string;
  favori: boolean;
  id: string;
  image: string[];
  nbChambre: number;
  nbSdb: number;
  nomMaison: string;
  prix: number;
  surface: number;
  updated: string;
}[] = [
    {
      "adresse": "Jardin",
      "collectionId": "pjypqk0lmwt0n1u",
      "collectionName": "maison",
      "created": "2024-05-01 12:41:26.129Z",
      "favori": true,
      "id": "7b7qvwm8wm7f2z5",
      "image": [
        "helper_home_kfPMbG3cG7.webp"
      ],
      "nbChambre": 8,
      "nbSdb": 1,
      "nomMaison": "Maison des assistants",
      "prix": 200,
      "surface": 4,
      "updated": "2024-05-01 12:46:17.356Z"
    },
    {
      "adresse": "jardin",
      "collectionId": "pjypqk0lmwt0n1u",
      "collectionName": "maison",
      "created": "2024-05-01 12:45:55.924Z",
      "favori": false,
      "id": "oj5v9s33igvjs6d",
      "image": [
        "screen_shot_milking_shed_txnSqq1a4U.png"
      ],
      "nbChambre": 1,
      "nbSdb": 0,
      "nomMaison": "Hangar de traite",
      "prix": 560,
      "surface": 4,
      "updated": "2024-05-01 12:45:55.924Z"
    },
    {
      "adresse": "jardin",
      "collectionId": "pjypqk0lmwt0n1u",
      "collectionName": "maison",
      "created": "2024-05-01 12:47:41.280Z",
      "favori": true,
      "id": "yhnu6ye0uf0vfi3",
      "image": [
        "mine_Mls3njYDFe.webp"
      ],
      "nbChambre": 0,
      "nbSdb": 0,
      "nomMaison": "Mine",
      "prix": 15000,
      "surface": 4,
      "updated": "2024-05-01 12:55:44.145Z"
    },
    {
      "adresse": "Village",
      "collectionId": "pjypqk0lmwt0n1u",
      "collectionName": "maison",
      "created": "2024-05-01 12:55:32.913Z",
      "favori": true,
      "id": "zzaplaunuvt6gb1",
      "image": [
        "56470_EkHVyoYV0V.png"
      ],
      "nbChambre": 2,
      "nbSdb": 2,
      "nomMaison": "Costolot's Store",
      "prix": 50000,
      "surface": 16,
      "updated": "2024-05-01 12:55:32.913Z"
    },
    {
      "adresse": "jardin",
      "collectionId": "pjypqk0lmwt0n1u",
      "collectionName": "maison",
      "created": "2024-05-01 12:57:59.613Z",
      "favori": true,
      "id": "gm4fxomk3osammm",
      "image": [
        "pigxie_home_pWyE3Mb072.webp"
      ],
      "nbChambre": 1,
      "nbSdb": 1,
      "nomMaison": "Pigxie Home",
      "prix": 1800,
      "surface": 6,
      "updated": "2024-05-01 12:57:59.613Z"
    }
  ]

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
</template>
