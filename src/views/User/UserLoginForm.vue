<template>
  <div class="login-page">
    <div class="form-box">
      <h2>🔑 Prijava korisnika</h2>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email" placeholder="Unesite email" />
          <span v-if="errors.email">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="password">Lozinka</label>
          <input id="password" v-model="password" type="password" placeholder="Unesite lozinku" />
          <span v-if="errors.password">{{ errors.password }}</span>
        </div>

        <span v-if="errors.general" class="error-message">{{ errors.general }}</span>

        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Prijava...' : 'Prijavi se' }}
        </button>
      </form>

      <RouterLink to="/" class="back-link">
        <button type="button">⟵ Natrag</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const email = ref('')
const password = ref('')
const errors = ref({})
const loading = ref(false)

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

const handleSubmit = async () => {
  if (!validate()) return

  loading.value = true
  errors.value.general = ''

  try {
    const response = await axios.post('http://localhost:5000/api/login', {
      email: email.value,
      password: password.value,
    })

    const { token } = response.data

    if (token) {
      localStorage.setItem('token', token)
      router.push('/home')
    } else {
      errors.value.general = 'Neispravni podaci za prijavu.'
    }
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      errors.value.general = err.response.data.message
    } else {
      errors.value.general = 'Došlo je do greške prilikom prijave.'
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #e0f2f1, #f3f9e3);
}

.form-box {
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  text-align: center;
}

h2 {
  margin-bottom: 25px;
  color: #2c3e50;
  font-weight: bold;
}

.form-group {
  margin-bottom: 18px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #2c3e50;
}

input {
  width: 100%;
  padding: 12px;
  border: 1.5px solid #ddd;
  border-radius: 12px;
  transition: border-color 0.3s ease;
  font-size: 16px;
}

input:focus {
  border-color: #2ecc71;
  outline: none;
}

span {
  display: block;
  color: #e74c3c;
  font-size: 13px;
  margin-top: 4px;
}

.error-message {
  color: #e74c3c;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #2ecc71;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.submit-btn:disabled {
  background-color: #a3d9c7;
  cursor: not-allowed;
}

.submit-btn:hover:not(:disabled) {
  background-color: #27ae60;
}

.back-link {
  display: block;
  margin-top: 20px;
  text-align: center;
}

.back-link button {
  background-color: #bdc3c7;
  color: white;
  border: none;
  padding: 10px 22px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-link button:hover {
  background-color: #95a5a6;
}
</style>
