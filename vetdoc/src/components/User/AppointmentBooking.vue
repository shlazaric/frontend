<template>
  <div class="appointment-booking">
    <div class="content-box">
      <h2>📅 Rezervacija termina</h2>

      <form @submit.prevent="submitAppointment">
        <input v-model="date" type="date" />
        <input v-model="time" type="time" />

        <button type="submit" class="main-btn">✅ Potvrdi</button>
      </form>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <div v-if="successMessage" class="success-message">
        {{ successMessage }}<br />
        <strong>Datum:</strong> {{ formattedDate }}<br />
        <strong>Vrijeme:</strong> {{ formattedTime }}
      </div>

      <RouterLink to="/pet-profile">
        <button type="button" class="nav-btn">🔙 Natrag</button>
      </RouterLink>
    </div>
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
.appointment-booking {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #e0f7fa, #fce4ec);
}

.content-box {
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  text-align: center;
}

h2 {
  color: #2c3e50;
  margin-bottom: 25px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.main-btn {
  background-color: #4caf50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
}

.main-btn:hover {
  background-color: #388e3c;
}

.nav-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 15px;
}

.nav-btn:hover {
  background-color: #1976d2;
}

.error-message {
  color: red;
  margin-top: 15px;
}

.success-message {
  color: green;
  margin-top: 15px;
  font-weight: 500;
}
</style>
