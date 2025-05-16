<template>
  <div class="appointment-booking">
    <h2>Rezervacija termina</h2>

    <form @submit.prevent="submitAppointment">
      <label>Unesi datum:</label>
      <input type="date" v-model="date" required>

      <label>Unesi vrijeme:</label>
      <input type="time" v-model="time" required>

      <button type="submit">Potvrdi</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

    
    <button class="back-button" @click="goBack">Natrag</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const date = ref('')
const time = ref('')
const errorMessage = ref('')

const router = useRouter()

function submitAppointment() {
  if (!date.value || !time.value) {
    errorMessage.value = 'Molimo unesite datum i vrijeme.'
    return
  }

  const selectedDateTime = new Date(`${date.value}T${time.value}`)
  const now = new Date()

  if (selectedDateTime <= now) {
    errorMessage.value = 'Datum i vrijeme moraju biti u budućnosti.'
    return
  }

  errorMessage.value = ''
  alert(`Termin rezerviran za ${date.value} u ${time.value}`)
}

function goBack() {
  router.back()
}
</script>

<style scoped>
.appointment-booking {
  text-align: center;
  margin-top: 30px;
}

input {
  display: block;
  margin: 10px auto;
  padding: 8px;
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
  background-color: #ccc;
  color: black;
  margin-top: 10px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
