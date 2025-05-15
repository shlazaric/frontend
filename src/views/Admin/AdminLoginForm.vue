<template>
  <div class="form-container">
    <h2>Prijava administratora</h2>
    <form @submit.prevent="handleSubmit">
      <label>Unesi e-mail:</label>
      <input type="email" v-model="email" required />

      <label>Unesi lozinku:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Prijavi se</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

  
    <button class="back-button" @click="goBack">Natrag</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

function isValidEmail(emailStr) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(emailStr)
}

function handleSubmit() {
  if (!email.value || !password.value) {
    errorMessage.value = 'Molimo popunite oba polja.'
    return
  }

  if (!isValidEmail(email.value)) {
    errorMessage.value = 'Unesite ispravan e-mail.'
    return
  }

  errorMessage.value = ''
  alert(`Administrator prijavljen: ${email.value}`)
}

function goBack() {
  router.push('/')
}
</script>

<style scoped>
.form-container {
  padding: 20px;
}
label {
  display: block;
  margin-top: 10px;
  color: #1d006b;
}
input {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}
button {
  margin-top: 15px;
  background-color: #1abc9c;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #159e85;
}
.back-button {
  background-color: #ccc;
  color: #000;
  margin-top: 10px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
