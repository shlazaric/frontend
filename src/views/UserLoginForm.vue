<template>
  <div class="form-container">
    <h2>Prijava korisnika</h2>
    <form @submit.prevent="handleSubmit">
      <label>Unesi e-mail:</label>
      <input type="email" v-model="email" required />

      <label>Unesi lozinku:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Prijavi se</button>
    </form>
    
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

// Validacija e-maila
function isValidEmail(emailStr) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(emailStr)
}

function handleSubmit() {
  if (!email.value || !password.value) {
    errorMessage.value = 'Molimo popunite sva polja.'
    return
  }

  if (!isValidEmail(email.value)) {
    errorMessage.value = 'Unesite ispravan e-mail.'
    return
  }

  if (password.value.length < 6) {
    errorMessage.value = 'Lozinka mora imati barem 6 znakova.'
    return
  }

  errorMessage.value = ''
  alert(`Prijava uspješna za ${email.value}`)
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
.error {
  color: red;
  margin-top: 10px;
}
</style>
