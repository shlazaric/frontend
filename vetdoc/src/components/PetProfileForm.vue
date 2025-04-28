<template>
    <div>
      <h2>Profil ljubimca</h2>
  
      <form @submit.prevent="submitPetProfile">
        <input v-model="name" type="text" placeholder="Unesi ime ljubimca" />
        <input v-model="species" type="text" placeholder="Unesi vrstu ljubimca" />
        <input v-model="age" type="number" placeholder="Unesi starost ljubimca" />
  
        <button type="submit">Dodaj podatke o ljubimcu</button>
      </form>
  
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
      <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>
  
      <router-link to="/edit-pet">Uredi profil ljubimca</router-link><br>
      <router-link to="/book-appointment">Rezerviraj termin kod veterinara</router-link>
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
          this.successMessage = 'Podaci su uspešno sačuvani!';
          
          // Reset formu
          this.name = '';
          this.species = '';
          this.age = '';
        }
      }
    }
  }
  </script>
  