<template>
  <div class="appointment-booking">
    <h2>Rezervacija termina</h2>

    <form @submit.prevent="submitAppointment">
      <label>Unesi datum:</label>
      <input type="date" v-model="date" required />

      <label>Unesi vrijeme:</label>
      <input type="time" v-model="time" required />

      <button type="submit">Potvrdi</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const date = ref('')
const time = ref('')

function submitAppointment() {
  
  console.log('Termin:', date.value, time.value)
  alert(`Termin rezerviran za ${date.value} u ${time.value}`)
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
  box-sizing: border-box;
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
  background-color: #45a049;
}
</style>
