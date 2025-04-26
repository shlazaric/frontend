<template>
    <div class="welcome-page">
      <h1>Dobrodošli u VetDoc</h1>
  
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
  
  <script setup>
  // Nema posebne logike, ovo je samo "landing page" s linkovima
  </script>
  
  <style scoped>
  /* Stilizacija Welcome stranice */
  .welcome-page {
    text-align: center;
    margin-top: 50px;
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
  