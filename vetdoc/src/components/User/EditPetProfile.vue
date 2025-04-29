<template>
    <div>
      <h2>Uredi profil ljubimca</h2>
  
      <form @submit.prevent="updateProfile">
        <input v-model="name" type="text" placeholder="Ime ljubimca" />
        <input v-model="species" type="text" placeholder="Vrsta ljubimca" />
        <input v-model="age" type="number" placeholder="Starost ljubimca" />
  
        <button type="submit">Spremi promjene</button>
      </form>
  
      <router-link to="/pet-profile">
        <button>Natrag</button>
      </router-link>
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
    
      this.name = this.$route.query.name || '';
      this.species = this.$route.query.species || '';
      this.age = this.$route.query.age || '';
    },
    methods: {
      updateProfile() {
        alert('Promjene su spremljene! ');
       
      }
    }
  };
  </script>
  