<template>
  <div class="edit-pet-profile">
    <div class="content-box">
      <h2>Uredi profil ljubimca</h2>

      <form @submit.prevent="updateProfile" class="form-group">
        <input v-model="name" type="text" placeholder="Ime ljubimca" />
        <input v-model="species" type="text" placeholder="Vrsta ljubimca" />
        <input v-model="age" type="number" placeholder="Starost ljubimca" />

        <button type="submit" class="main-btn">💾 Spremi promjene</button>
      </form>

      <router-link to="/pet-profile">
        <button class="nav-btn">🔙 Natrag</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      species: '',
      age: ''
    };
  },
  mounted() {
    // Učitavanje postojećih podataka iz query parametara
    this.name = this.$route.query.name || '';
    this.species = this.$route.query.species || '';
    this.age = this.$route.query.age || '';
  },
  methods: {
    updateProfile() {
      alert('Promjene su spremljene!');
      // Kasnije ćeš ovdje dodati backend poziv
    }
  }
};
</script>

<style scoped>
.edit-pet-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #fff3e0, #e1f5fe);
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
</style>
