<template>
  <div class="form-container">
    <h2>Registracija korisnika</h2>

    <!-- Forma za registraciju -->
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Ime:</label>
        <input v-model="name" />
        <span v-if="errors.name">{{ errors.name }}</span>
      </div>

      <div>
        <label>Email:</label>
        <input v-model="email" />
        <span v-if="errors.email">{{ errors.email }}</span>
      </div>

      <div>
        <label>Lozinka:</label>
        <input type="password" v-model="password" />
        <span v-if="errors.password">{{ errors.password }}</span>
      </div>

      <div>
        <label>Potvrdi lozinku:</label>
        <input type="password" v-model="confirmPassword" />
        <span v-if="errors.confirmPassword">{{ errors.confirmPassword }}</span>
      </div>

      <button type="submit">Registriraj se</button>
    </form>

    <!-- Gumb za povratak na početnu stranicu -->
    <RouterLink to="/" class="back-button">
      <button type="button">Natrag</button>
    </RouterLink>
  </div>
</template>

<script setup>
// Uvoz Vue funkcija
import { ref } from 'vue'

// Definiranje varijabli
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errors = ref({}) // Objekt za greške

// Validacija forme
const validate = () => {
  errors.value = {}

  if (!name.value) {
    errors.value.name = 'Unesite ime.'
  }

  if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
    errors.value.email = 'Unesite ispravan email.'
  }

  if (!password.value) {
    errors.value.password = 'Unesite lozinku.'
  }

  if (password.value !== confirmPassword.value) {
    errors.value.confirmPassword = 'Lozinke se ne podudaraju.'
  }

  return Object.keys(errors.value).length === 0
}

// Šaljemo podatke ako su ispravni
const handleSubmit = () => {
  if (validate()) {
    alert('Registracija uspješna!')
  }
}
</script>

<style scoped>
/* Stilovi za registracijsku formu */
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

/* Stilovi za gumb Natrag */
.back-button {
  margin-top: 20px;
  display: inline-block;
}
</style>
