<template>
    <div>
      <h2>Pregled ljubimaca</h2>
      <div v-for="pet in pets" :key="pet.id" class="pet-card">
        <h3>{{ pet.name }}</h3>
        <p>Vrsta: {{ pet.species }}</p>
        <p>Starost: {{ pet.age }} godina</p>
        <p>Dokumentacija: {{ pet.documents }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const pets = ref([
    { id: 1, name: 'Max', species: 'Pas', age: 3, documents: 'Cijepljen, čipiran' },
    { id: 2, name: 'Bella', species: 'Mačka', age: 2, documents: 'Sterilizirana, čipirana' },
  
  ])
  </script>
  
  <style scoped>
  .pet-card {
    border: 1px solid #ddd;
    padding: 15px;
    margin: 10px 0;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  </style>
  