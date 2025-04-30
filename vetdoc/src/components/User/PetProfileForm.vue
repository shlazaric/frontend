<template>
  <div class="pet-profile">
    <div class="content-box">
      <h2>Profil ljubimca</h2>

      <form @submit.prevent="submitPetProfile" class="form-group">
        <input v-model="name" type="text" placeholder="Unesi ime ljubimca" />
        <input v-model="species" type="text" placeholder="Unesi vrstu ljubimca" />
        <input v-model="age" type="number" placeholder="Unesi starost ljubimca" />

        <button type="submit" class="main-btn">💾 Spremi podatke</button>
      </form>

      <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success-msg">{{ successMessage }}</p>

      <div class="navigation-buttons">
        <router-link to="/edit-pet">
          <button class="nav-btn">✏️ Uredi profil ljubimca</button>
        </router-link>

        <router-link to="/appointment-booking">
          <button class="nav-btn">📅 Rezerviraj termin</button>
        </router-link>

        <router-link to="/home-page">
          <button class="nav-btn">🏠 Natrag na početnu</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      species: '',
      age: '',
      errorMessage: '',
      successMessage: ''
    };
  },
  methods: {
    submitPetProfile() {
      if (!this.name || !this.species || !this.age) {
        this.successMessage = '';
        this.errorMessage = 'Molimo popunite sva polja!';
      } else {
        this.errorMessage = '';
        this.successMessage = 'Podaci su uspješno sačuvani!';
      }
    }
  }
};
</script>

<style scoped>
.pet-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #e1f5fe, #fce4ec);
}

.content-box {
  background-color: #fff;
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

.error-msg {
  color: red;
  margin-top: 10px;
}

.success-msg {
  color: green;
  margin-top: 10px;
}

.navigation-buttons {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-btn {
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
</style>
