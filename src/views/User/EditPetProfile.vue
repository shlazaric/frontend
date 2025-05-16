<template>
  <div class="pet-profile">
    <h2>Uredi profil ljubimca</h2>

    <form @submit.prevent="submitPetProfile">
      <input v-model="name" type="text" placeholder="Ime ljubimca" />
      <input v-model="species" type="text" placeholder="Vrsta ljubimca" />
      <input v-model="age" type="number" placeholder="Starost ljubimca" />

      <button type="submit">Spremi promjene</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>

    <button class="back-button" @click="goBack">Natrag</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref('')
const species = ref('')
const age = ref('')
const errorMessage = ref('')
const successMessage = ref('')

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
    errorMessage.value = 'Molimo popunite sva polja.'
    successMessage.value = ''
    return
  }

  const updatedProfile = {
    name: name.value,
    species: species.value,
    age: age.value
  }

  localStorage.setItem('petProfile', JSON.stringify(updatedProfile))
  successMessage.value = 'Podaci su uspješno ažurirani!'
  errorMessage.value = ''
}

function goBack() {
  router.push('/pet-profile') 
}
</script>

<style scoped>
.pet-profile {
  padding: 20px;
  text-align: center;
}

input {
  display: block;
  margin: 10px auto;
  padding: 8px;
  width: 80%;
  max-width: 400px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

.back-button {
  background-color: #ccc;
  color: black;
}

.error {
  color: red;
  margin-top: 10px;
}

.success {
  color: green;
  margin-top: 10px;
}
</style>
