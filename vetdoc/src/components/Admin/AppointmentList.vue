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
            <td>{{ appointment.date }}</td>
            <td>{{ appointment.time }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const appointments = ref([
    { id: 1, petName: 'Max', vetName: 'Dr. Smith', date: '2025-05-01', time: '10:00' },
    { id: 2, petName: 'Bella', vetName: 'Dr. Johnson', date: '2025-05-02', time: '14:00' },
    
  ])
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
  </style>
  