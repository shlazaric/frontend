<template>
  <div class="appointments-wrapper">
    <div class="appointments-box">
      <h2>📅 Pregled rezervacija termina</h2>

      <div v-if="error" class="error-message">{{ error }}</div>

      <table v-else>
        <thead>
          <tr>
            <th>Ljubimac</th>
            <th>Veterinar</th>
            <th>Datum</th>
            <th>Vrijeme</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="appointment in appointments" :key="appointment.id">
            <td>{{ appointment.petName }}</td>
            <td>{{ appointment.vetName }}</td>
            <td>{{ formatDate(appointment.date) }}</td>
            <td>{{ appointment.time }}</td>
          </tr>
        </tbody>
      </table>

      <RouterLink to="/admin-dashboard" class="back-button">
        <button type="button">⬅ Natrag</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const appointments = ref([])
const error = ref(null)

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('hr-HR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/appointments')
    appointments.value = response.data
  } catch (err) {
    error.value = 'Greška pri dohvaćanju termina. Provjerite vezu s poslužiteljem.'
    console.error(err)
  }
})
</script>

<style scoped>
.appointments-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background: linear-gradient(to right, #e3f2fd, #e8f5e9);
  min-height: 100vh;
}

.appointments-box {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 900px;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.error-message {
  color: red;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

thead {
  background-color: #f2f2f2;
  font-weight: bold;
}

.back-button {
  display: flex;
  justify-content: center;
}

.back-button button {
  padding: 10px 25px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button button:hover {
  background-color: #2980b9;
}
</style>
