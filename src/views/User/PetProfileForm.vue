<template>
  <div>
    <h2>Profil ljubimca</h2>

    <form @submit.prevent="submitPetProfile">
      <input v-model="name" type="text" placeholder="Unesi ime ljubimca" />
      <input v-model="species" type="text" placeholder="Unesi vrstu ljubimca" />
      <input v-model="age" type="number" placeholder="Unesi starost ljubimca" />

      <button type="submit">Spremi podatke o ljubimcu</button>
    </form>

    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>

    
    <router-link to="/book-appointment">
      <button>Rezerviraj termin kod veterinara</button>
    </router-link>

    <button class="back-button" @click="goHome">Natrag na početnu</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const species = ref('')
const age = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const router = useRouter()

onMounted(() => {
  const savedProfile = JSON.parse(localStorage.getItem('petProfile'))
  if (savedProfile) {
    name.value = savedProfile.name
    species.value = savedProfile.species
    age.value = savedProfile.age
  }
})

function submitPetProfile() {
  if (!name.value || !species.value || !age.value) {
    successMessage.value = ''
    errorMessage.value = 'Molimo popunite sva polja!'
    return
  }

  errorMessage.value = ''
  successMessage.value = 'Podaci su uspješno sačuvani!'

  const petProfile = {
    name: name.value,
    species: species.value,
    age: age.value
  }
  localStorage.setItem('petProfile', JSON.stringify(petProfile))
}

function goHome() {
  router.push('/home')
}
</script>

<style scoped>
input {
  display: block;
  margin: 10px auto;
  padding: 8px;
  width: 80%;
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

.back-button {
  margin-top: 15px;
  background-color: #ccc;
  color: black;
}
</style>
