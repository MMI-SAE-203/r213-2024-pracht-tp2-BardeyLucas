<script setup lang="ts">
</script>
<template>

 
    <h1>Formulaire de contact</h1>
    <form>
        <div>
            <label for="Nom">Nom*</label>
            <input type="text" name="Nom" id="Nom" required>
        </div>
        <div>
            <label for="Prenom">Prénom*</label>
            <input type="text" name="Prenom" id="Prenom" required>
        </div>
        <div>
            <label for="mail">E-mail*</label>
            <input type="email" name="mail" id="mail" required>
        </div>
        <div>
            <label for="mess">Message*</label>
            <input type="text" name="Nom" id="Nom" required>
        </div>
        <p>Toutes les cases avec le symbole * doivent être obligatoirement remplies</p>
        <div>
            <input type="submit" value="Envoyer">
        </div>
    </form>
</template>
