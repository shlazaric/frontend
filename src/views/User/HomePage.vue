<template>
  <div class="home">
    <h1>Dobrodošli!</h1>

    <div class="actions">
      <router-link to="/pet-profile">
        <button>Dodaj ljubimca</button>
      </router-link>

      <router-link to="/book-appointment">
        <button>Rezerviraj termin</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
  align-items: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 8px;
}

button:hover {
  background-color: #2980b9;
}
</style>
