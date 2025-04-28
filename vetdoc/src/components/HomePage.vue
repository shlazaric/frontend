<template>
    <div>
      <h1>Dobrodošao na početnu stranicu!</h1>
      <router-link to="/pet-profile">
        <button>Dodaj ljubimca</button>
      </router-link>
      <router-link to="/appointment-booking">
        <button>Rezerviraj termin</button>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  