<script setup lang="ts">
</script>
<template>
    <h1>Bienvenue à notre Newsletter !</h1>
    <h2>Merci de nous accorder votre confiance</h2>
    <div>
        <form>
            <div>
                <label for="mail">E-mail*</label>
                <input type="email" name="mail" id="mail" required>
            </div>
            <div>
                <label for="MDP">Mot de passe*</label>
                <input type="password" name="MDP" id="MDP" required>
            </div>
            <div>
                <label for="CMDP">Confirmation mot de passe* </label>
                <input type="password" name="CMDP" id="CMDP" required>
            </div>
            <p>En vous connectant sur la newsletter, vous acceptez de recevoir les dernières informations sur votre
                messagerie</p>
            <div>
                <label for="CGU">j’ai lu et accepte les conditions générales et la politique de gestion des
                    données*</label>
                <input type="checkbox" name="CGU" id="CGU" required>
            </div>
            <div>
                <input type="submit" value="Se connecter">
            </div>
        </form>
    </div>
</template>
