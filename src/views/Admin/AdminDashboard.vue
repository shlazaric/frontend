<template>
  <div class="dashboard-wrapper">
    <div class="dashboard-box">
      <h2>👋 Dobrodošli, administratoru!</h2>

      <div class="buttons">
        <router-link to="/appointments-list">
          <button class="dashboard-btn">📅 Pregled rezervacija</button>
        </router-link>

        <router-link to="/pets-list">
          <button class="dashboard-btn">🐾 Pregled ljubimaca</button>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>
.dashboard-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #e1f5fe, #fce4ec);
}

.dashboard-box {
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

h2 {
  color: #2c3e50;
  margin-bottom: 30px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dashboard-btn {
  padding: 12px 24px;
  font-size: 16px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dashboard-btn:hover {
  background-color: #34495e;
}
</style>
