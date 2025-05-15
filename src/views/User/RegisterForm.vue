<template>
  <div class="form-container">
    <h2>Registracija</h2>
    <form @submit.prevent="handleSubmit">
      <label>Unesi ime:</label>
      <input type="text" v-model="firstName" required />
      
      <label>Unesi prezime:</label>
      <input type="text" v-model="lastName" required />
      
      <label>Unesi e-mail:</label>
      <input type="email" v-model="email" required />
      
      <label>Unesi lozinku:</label>
      <input type="password" v-model="password" required />
      
      <label>Ponovi lozinku:</label>
      <input type="password" v-model="passwordConfirm" required />
      
      <button type="submit">Registriraj se</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    <button class="back-button" @click="goBack">Natrag</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const errorMessage = ref('')

const router = useRouter()

function isValidEmail(emailStr) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(emailStr)
}

function handleSubmit() {
  if (!firstName.value || !lastName.value || !email.value || !password.value || !passwordConfirm.value) {
    errorMessage.value = 'Sva polja su obavezna.'
    return
  }

  if (!isValidEmail(email.value)) {
    errorMessage.value = 'Unesite ispravan e-mail.'
    return
  }

  if (password.value.length < 6) {
    errorMessage.value = 'Lozinka mora imati najmanje 6 znakova.'
    return
  }

  if (password.value !== passwordConfirm.value) {
    errorMessage.value = 'Lozinke se ne poklapaju.'
    return
  }

  errorMessage.value = ''
  alert(`Registracija uspješna za ${firstName.value} ${lastName.value}`)

 
  router.push('/home')
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
  background-color: #3498db;
  color: white;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #2980b9;
}
.back-button {
  margin-top: 10px;
  background-color: #ccc;
  color: black;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
