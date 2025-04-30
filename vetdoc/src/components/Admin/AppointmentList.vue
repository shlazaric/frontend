<template>
  <div>
    <h2>Pregled rezervacija termina</h2>
    <table>
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

    <!-- Gumb za povratak -->
    <RouterLink to="/admin-dashboard" class="back-button">
      <button type="button">Natrag</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Dummy podaci
const appointments = ref([
  { id: 1, petName: 'Max', vetName: 'Dr. Smith', date: '2025-05-01', time: '10:00' },
  { id: 2, petName: 'Bella', vetName: 'Dr. Johnson', date: '2025-05-02', time: '14:00' },
])

// Funkcija za formatiranje datuma
const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('hr-HR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}
thead {
  background-color: #f2f2f2;
}
.back-button button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}
.back-button button:hover {
  background-color: #2980b9;
}
</style>
