<template>
    <div>
      <h2>Rezervacija termina</h2>
  
      <form @submit.prevent="submitAppointment">
        <input v-model="date" type="date" />
        <input v-model="time" type="time" />
  
        <button type="submit">Potvrdi</button>
      </form>
  
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
      <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>

       <!-- Gumb za povratak na početnu stranicu -->
    <RouterLink to="/pet-profile" class="back-button">
      <button type="button">Natrag</button>
    </RouterLink>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        date: '',
        time: '',
        errorMessage: '',
        successMessage: ''
      };
    },
    methods: {
      submitAppointment() {
        if (!this.date || !this.time) {
          this.successMessage = '';
          this.errorMessage = 'Unesite datum i vrijeme!';
        } else {
          this.errorMessage = '';
          this.successMessage = 'Termin je uspešno rezervisan!';
          
          // Reset forma
          this.date = '';
          this.time = '';
        }
      }
    }
  }
  </script>
  