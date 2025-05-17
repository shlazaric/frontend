<template>
  <div class="home-page">
    <div class="content-box">
      <h1>Dobrodošao na početnu stranicu!</h1>

      <div class="button-group">
        <RouterLink to="/pet-profile">
          <button class="home-btn">➕ Dodaj ljubimca</button>
        </RouterLink>

        <RouterLink to="/book-appointment">
          <button class="home-btn">📅 Rezerviraj termin</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>



<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #e0f7fa, #f1f8e9);
}

.content-box {
  text-align: center;
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #2c3e50;
  margin-bottom: 30px;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.home-btn {
  padding: 12px 24px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.home-btn:hover {
  background-color: #388e3c;
}
</style>
