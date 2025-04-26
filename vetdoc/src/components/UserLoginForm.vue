<template>
  <div class="form-container">
    <h2>Prijava korisnika</h2>

    <!-- Forma za prijavu korisnika -->
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Email:</label>
        <input v-model="email" /> <!-- Povezivanje inputa sa 'email' varijablom -->
        <span v-if="errors.email">{{ errors.email }}</span> <!-- Prikaz greške za email -->
      </div>

      <div>
        <label>Lozinka:</label>
        <input type="password" v-model="password" /> <!-- Povezivanje inputa sa 'password' varijablom -->
        <span v-if="errors.password">{{ errors.password }}</span> <!-- Prikaz greške za lozinku -->
      </div>

      <button type="submit">Prijavi se</button> <!-- Dugme za slanje forme -->
    </form>

    <!-- Gumb za povratak na početnu stranicu -->
    <RouterLink to="/" class="back-button">
      <button type="button">Natrag</button>
    </RouterLink>
  </div>
</template>

<script setup>
// Uvoz ref funkcije iz Vue-a
import { ref } from 'vue'

// Definiranje reaktivnih varijabli
const email = ref('')
const password = ref('')
const errors = ref({}) // Objekt za čuvanje grešaka

// Funkcija za provjeru unosa (validaciju)
const validate = () => {
  errors.value = {} // Praznimo greške prije nove provjere

  if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
    errors.value.email = 'Unesite ispravan email.'
  }
  if (!password.value) {
    errors.value.password = 'Unesite lozinku.'
  }

  // Ako nema grešaka, vraćamo true
  return Object.keys(errors.value).length === 0
}

// Funkcija za obradu prijave
const handleSubmit = () => {
  if (validate()) {
    alert('Korisnik uspješno prijavljen!')
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

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

/* Stilizacija gumba za povratak */
.back-button {
  margin-top: 20px;
  display: inline-block;
}
</style>
