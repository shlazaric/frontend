<template>
  <div class="register-page">
    <div class="form-box">
      <h2>Registracija korisnika</h2>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="firstName">Ime</label>
          <input id="firstName" v-model="firstName" type="text" placeholder="Unesite ime" />
          <span v-if="errors.firstName">{{ errors.firstName }}</span>
        </div>

        <div class="form-group">
          <label for="lastName">Prezime</label>
          <input id="lastName" v-model="lastName" type="text" placeholder="Unesite prezime" />
          <span v-if="errors.lastName">{{ errors.lastName }}</span>
        </div>

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

        <div class="form-group">
          <label for="confirmPassword">Potvrdi lozinku</label>
          <input id="confirmPassword" v-model="confirmPassword" type="password" placeholder="Ponovno unesite lozinku" />
          <span v-if="errors.confirmPassword">{{ errors.confirmPassword }}</span>
        </div>

        <button type="submit" class="submit-btn">Registriraj se</button>
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

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errors = ref({})

const validate = () => {
  errors.value = {}
  if (!firstName.value.trim()) errors.value.firstName = 'Unesite ime.'
  if (!lastName.value.trim()) errors.value.lastName = 'Unesite prezime.'
  if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) errors.value.email = 'Unesite ispravan email.'
  if (!password.value) errors.value.password = 'Unesite lozinku.'
  if (!confirmPassword.value) errors.value.confirmPassword = 'Ponovno unesite lozinku.'
  else if (password.value !== confirmPassword.value) errors.value.confirmPassword = 'Lozinke se ne podudaraju.'
  return Object.keys(errors.value).length === 0
}

const handleSubmit = async () => {
  if (!validate()) return
  try {
    const payload = {
      name: `${firstName.value.trim()} ${lastName.value.trim()}`.trim(),
      email: email.value.trim().toLowerCase(),
      password: password.value
    }
    await axios.post('http://localhost:3000/auth/register', payload, {
      headers: { 'Content-Type': 'application/json' }
    })
    alert('Registracija uspješna!')
    router.push('/login')
  } catch (err) {
    const msg = err?.response?.data?.message || 'Greška pri spajanju s poslužiteljem.'
    alert(msg)
  }
}
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #e0f7fa, #f1f8e9);
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
.submit-btn:hover {
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
