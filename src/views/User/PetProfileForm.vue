<template>
  <div class="pet-profile">
    <h2>Profil ljubimca</h2>

    <form @submit.prevent="submitPetProfile">
      <label>Unesi ime ljubimca:</label>
      <input type="text" v-model="name" required />

      <label>Unesi vrstu ljubimca:</label>
      <input type="text" v-model="type" required />

      <label>Unesi starost ljubimca:</label>
      <input type="number" v-model="age" required />

      <button type="submit">Dodaj podatke o ljubimcu</button>
    </form>

    <div class="links">
      <RouterLink to="/edit-pet">Uredi profil ljubimca</RouterLink>
      <RouterLink to="/book-appointment">Rezerviraj termin kod veterinara</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const type = ref('')
const age = ref('')

function submitPetProfile() {
  console.log('Podaci ljubimca:', name.value, type.value, age.value)
  
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
  width: 200px;
  box-sizing: border-box;
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
  background-color: #45a049;
}

.links {
  margin-top: 20px;
}

.links a {
  display: block;
  margin-top: 10px;
  color: #2196F3;
  cursor: pointer;
  text-decoration: underline;
}
</style>
