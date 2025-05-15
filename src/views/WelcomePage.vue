<template>
  <div class="welcome-container">
    <img src="@/assets/vet.png" alt="VetDoc logo" class="logo" />
    <h1>VetDoc</h1>
    <p>Dobrodošao/la na našu aplikaciju!</p>

    <router-link to="/register" class="link">Registriraj se</router-link>
    <p>Već imaš račun?</p>
    <router-link to="/login" class="link">Prijavi se</router-link>
    <router-link to="/admin-login" class="link admin-link">Administrator</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.welcome-container {
  text-align: center;
  padding: 20px;
}
.logo {
  width: 150px;
  margin-bottom: 20px;
}
.link {
  display: block;
  margin: 10px 0;
  color: #3498db;
  text-decoration: none;
}
.admin-link {
  color: #1abc9c;
}
</style>
