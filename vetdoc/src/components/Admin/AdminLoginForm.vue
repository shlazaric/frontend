<template>
  <div class="form-container">
    <h2>Prijava administratora</h2>

    <!-- Forma za prijavu administratora -->
    <form @submit.prevent="handleSubmit">
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

      <button type="submit">Prijavi se kao admin</button>
    </form>

    <!-- Gumb za povratak na početnu stranicu -->
    <RouterLink to="/" class="back-button">
      <button type="button">Natrag</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errors = ref({})
const router = useRouter()

const validate = () => {
  errors.value = {}

  if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
    errors.value.email = 'Unesite ispravan email.'
  }
  if (!password.value) {
    errors.value.password = 'Unesite lozinku.'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  if (validate()) {
    alert('Administrator uspješno prijavljen!')
    router.push('/admin-dashboard')  // ⬅ automatski redirekt
  }
}
</script>

<style scoped>
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

.back-button {
  margin-top: 20px;
  display: inline-block;
}
</style>
