<template>
  <div class="pets-wrapper">
    <div class="pets-box">
      <h2>🐾 Pregled ljubimaca</h2>

    
      <div v-for="pet in pets" :key="pet.id" class="pet-card">
        <h3>{{ pet.name }}</h3>
        <p><strong>Vrsta:</strong> {{ pet.species }}</p>
        <p><strong>Starost:</strong> {{ pet.age }} godina</p>
        <p><strong>Dokumentacija:</strong> {{ pet.documents }}</p>
      </div>

    
      <RouterLink to="/admin-dashboard" class="back-button">
        <button type="button">⬅ Natrag</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'  

// Dummy podaci za ljubimce
const pets = ref([
  { id: 1, name: 'Max', species: 'Pas', age: 3, documents: 'Cijepljen, čipiran' },
  { id: 2, name: 'Bella', species: 'Mačka', age: 2, documents: 'Sterilizirana, čipirana' },
])
</script>

<style scoped>
.pets-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background: linear-gradient(to right, #e3f2fd, #fce4ec);
  min-height: 100vh;
}

.pets-box {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
}

.pet-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.pet-card h3 {
  margin-bottom: 10px;
  color: #34495e;
}

.back-button {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.back-button button {
  padding: 10px 25px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button button:hover {
  background-color: #2980b9;
}
</style>
