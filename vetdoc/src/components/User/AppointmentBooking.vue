<template>
  <div>
    <h2>Rezervacija termina</h2>

    <form @submit.prevent="submitAppointment">
      <input v-model="date" type="date" />
      <input v-model="time" type="time" />

      <button type="submit">Potvrdi</button>
    </form>

    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    <p v-if="successMessage" style="color: green;">
      {{ successMessage }}<br />
      Datum: {{ formattedDate }}<br />
      Vrijeme: {{ formattedTime }}
    </p>

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
      successMessage: '',
      formattedDate: '',
      formattedTime: ''
    };
  },
  methods: {
    submitAppointment() {
      if (!this.date || !this.time) {
        this.successMessage = '';
        this.errorMessage = 'Unesite datum i vrijeme!';
        this.formattedDate = '';
        this.formattedTime = '';
      } else {
        this.errorMessage = '';
        this.successMessage = 'Termin je uspješno rezerviran!';

      
        const dateObj = new Date(this.date);
        this.formattedDate = new Intl.DateTimeFormat('hr-HR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }).format(dateObj);

        this.formattedTime = this.time;

     
        this.date = '';
        this.time = '';
      }
    }
  }
};
</script>

<style scoped>
.back-button {
  margin-top: 20px;
  display: inline-block;
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
</style>
