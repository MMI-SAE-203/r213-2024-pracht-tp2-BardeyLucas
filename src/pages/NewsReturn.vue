<script setup lang="ts">
</script>
<template>
    <h1>Paramètres Newsletter</h1>
    <form>
        <div>
            <label for="mail">E-mail*</label>
            <input type="email" name="mail" id="mail" required>
        </div>
        <div>
            <input type="submit" value="Changer d'adresse mail">
        </div>
        <div>
            <input type="submit" value="changer de mot de passe">
        </div>
        <div>
            <label for="MDP">Mot de passe*</label>
            <input type="password" name="MDP" id="MDP" required>
        </div>
        <div>
            <input type="submit" value="Se déconnecter">
        </div>
    </form>
</template>
