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
  </div>
</template>

<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');

function handleSubmit() {
  if(password.value !== passwordConfirm.value) {
    alert('Lozinke se ne poklapaju!');
    return;
  }
  
  alert(`Registracija uspješna za ${firstName.value} ${lastName.value}`);
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
</style>
