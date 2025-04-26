<template>
    <div class="form-container">
      <h2>Prijava administratora</h2>
  
      <!-- Forma za prijavu administratora -->
      <form @submit.prevent="handleSubmit">
        <div>
          <label>Email:</label>
          <input v-model="email" /> <!-- Povezivanje inputa sa 'email' -->
          <span v-if="errors.email">{{ errors.email }}</span> <!-- Prikaz greške -->
        </div>
  
        <div>
          <label>Lozinka:</label>
          <input type="password" v-model="password" /> <!-- Povezivanje inputa sa 'password' -->
          <span v-if="errors.password">{{ errors.password }}</span> <!-- Prikaz greške -->
        </div>
  
        <button type="submit">Prijavi se kao admin</button> <!-- Dugme za slanje forme -->
      </form>
    </div>
  </template>
  
  <script setup>
  // Uvoz ref iz Vue
  import { ref } from 'vue'
  
  // Definiranje reaktivnih varijabli
  const email = ref('')
  const password = ref('')
  const errors = ref({}) // Objekt za čuvanje grešaka
  
  // Funkcija za provjeru unosa (validaciju)
  const validate = () => {
    errors.value = {}
  
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      errors.value.email = 'Unesite ispravan email.'
    }
    if (!password.value) {
      errors.value.password = 'Unesite lozinku.'
    }
  
    return Object.keys(errors.value).length === 0
  }
  
  // Funkcija za obradu prijave
  const handleSubmit = () => {
    if (validate()) {
      alert('Administrator uspješno prijavljen!')
      
    }
  }
  </script>
  
  <style scoped>
  /* Stilizacija forme */
  .form-container {
    max-width: 400px;
    margin: auto;
  }
  input {
    display: block;
    width: 100%;
    margin-bottom: 5px;
  }
  span {
    color: red;
    font-size: 0.9em;
  }
  </style>
  