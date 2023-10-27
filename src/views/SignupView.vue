<template>
    <div class="sign-up">
      <div class="container">
        <h1>Registriraj se</h1>
        <form @submit.prevent="register">
          <div class="form-group">
            <label for="ime">Ime</label>
            <input type="text" class="form-control" id="ime" v-model="ime" required>
          </div>
          <div class="form-group">
            <label for="prezime">Prezime</label>
            <input type="text" class="form-control" id="prezime" v-model="prezime" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="lozinka">Lozinka</label>
            <input type="password" class="form-control" id="lozinka" v-model="lozinka" required>
          </div>
          <div class="form-group">
            <label for="ponovnaLozinka">Ponovi lozinku</label>
            <input type="password" class="form-control" id="ponovnaLozinka" v-model="ponovnaLozinka" required>
          </div>
          <button type="submit" class="btn btn-primary mt-2">Registriraj se</button>
        </form>
        <div v-if="registracijaUspjesna" class="alert alert-success mt-2">
          Uspješno ste registrirani! Sada se možete <router-link to="/login">prijaviti</router-link>.
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ime: "",
        prezime: "",
        email: "",
        lozinka: "",
        ponovnaLozinka: "",
        registracijaUspjesna: false,
      };
    },
    methods: {
      register() {
        
        this.registracijaUspjesna = true;
  
        
        this.$router.push('/');
      },
    },
  };
  </script>
  