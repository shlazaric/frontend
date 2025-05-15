<template>
  <div class="pet-profile">
    <h2>Profil ljubimca</h2>

    <form @submit.prevent="submitPetProfile">
      <label>Unesi ime ljubimca:</label>
      <input type="text" v-model="name" required>

      <label>Unesi vrstu ljubimca:</label>
      <input type="text" v-model="type" required>

      <label>Unesi starost ljubimca:</label>
      <input type="number" v-model.number="age" required min="0">

      <button type="submit">Dodaj podatke o ljubimcu</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <div class="links">
      <RouterLink to="/edit-pet">Uredi profil ljubimca</RouterLink>
      <RouterLink to="/book-appointment">Rezerviraj termin kod veterinara</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const name = ref('')
const type = ref('')
const age = ref(null)
const errorMessage = ref('')

function submitPetProfile() {
  if (!name.value || !type.value || age.value === null || age.value === '') {
    errorMessage.value = 'Molimo popunite sva polja.'
    return
  }

  if (age.value < 0) {
    errorMessage.value = 'Starost ljubimca ne može biti negativna.'
    return
  }

  errorMessage.value = ''
  console.log('Podaci ljubimca:', name.value, type.value, age.value)
  alert(`Profil ljubimca ${name.value} uspješno dodan!`)
}
</script>

<style scoped>
.pet-profile {
  text-align: center;
  margin-top: 30px;
}

input {
  display: block;
  margin: 10px auto;
  padding: 8px;
}

button {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #388e3c;
}

.links {
  margin-top: 20px;
}

.links a {
  display: block;
  margin-top: 10px;
  color: #2196F3;
  text-decoration: none;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
