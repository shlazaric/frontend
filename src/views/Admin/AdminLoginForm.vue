<template>
  <div class="login-wrapper">
    <div class="login-box">
      <h2>🔐 Prijava administratora</h2>

      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="email">Email:</label>
          <input id="email" v-model="email" type="email" placeholder="Unesite email" />
          <span v-if="errors.email">{{ errors.email }}</span>
        </div>

        <div class="input-group">
          <label for="password">Lozinka:</label>
          <input id="password" v-model="password" type="password" placeholder="Unesite lozinku" />
          <span v-if="errors.password">{{ errors.password }}</span>
        </div>

        <p v-if="errors.general" class="error-msg">{{ errors.general }}</p>

        <button type="submit" class="main-btn">Prijavi se kao admin</button>
      </form>

      <RouterLink to="/" class="back-link">
        <button type="button" class="nav-btn">⬅ Natrag</button>
      </RouterLink>
    </div>
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
  if (!validate()) return

  // Provjera točnog admin računa
  if (email.value === 'anaanic@gmail.com' && password.value === 'anica17') {
    router.push('/admin-dashboard')
  } else {
    errors.value.general = 'Neispravni podaci za prijavu.'
  }
}
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #f3e5f5, #e1f5fe);
}

.login-box {
  background-color: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h2 {
  color: #2c3e50;
  margin-bottom: 25px;
}

.input-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  color: #34495e;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

span {
  color: red;
  font-size: 0.85em;
  margin-top: 4px;
  display: block;
}

.error-msg {
  color: red;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
}

.main-btn {
  width: 100%;
  padding: 12px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.main-btn:hover {
  background-color: #34495e;
}

.nav-btn {
  width: 100%;
  padding: 10px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
}

.nav-btn:hover {
  background-color: #1976d2;
}

.back-link {
  display: block;
}
</style>
