<template>
  <div class="welcome-page">
    
    <img src="@/assets/vet.png" alt="VetDoc Logo" class="logo" />

    <h1>Dobrodošli u VetDoc! :)</h1>

    <!-- Linkovi za navigaciju -->
    <div class="buttons">
      <RouterLink to="/login">
        <button>Prijava korisnika</button>
      </RouterLink>

      <RouterLink to="/admin-login">
        <button>Prijava administratora</button>
      </RouterLink>

      <RouterLink to="/register">
        <button>Registracija</button>
      </RouterLink>
    </div>
  </div>
</template>



<style scoped>
.welcome-page {
  text-align: center;
  margin-top: 50px;
}

.logo {
  width: 150px;
  height: auto;
  display: block;
  margin: 0 auto 20px auto;
}


.buttons {
  margin-top: 20px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
