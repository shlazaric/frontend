<template>
  <div class="welcome-page">
    <div class="welcome-box">
      <img src="@/assets/vet.png" alt="VetDoc Logo" class="logo" />

      <h1>Dobrodošli u <span class="highlight">VetDoc</span>! </h1>

      <p class="subtitle">Briga o vašim ljubimcima na jednom mjestu</p>

      <div class="buttons">
        <RouterLink to="/login">
          <button>Prijava korisnika</button>
        </RouterLink>

        <RouterLink to="/admin-login">
          <button>Prijava administratora</button>
        </RouterLink>

        <RouterLink to="/register">
          <button>Registracija</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-page {
  min-height: 100vh;
  background: linear-gradient(to right, #e0f7fa, #ffffff);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.welcome-box {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.logo {
  width: 120px;
  height: auto;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 10px;
  font-size: 2rem;
  color: #2e7d32;
}

.highlight {
  color: #388e3c;
}

.subtitle {
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

button {
  padding: 12px 20px;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #388e3c;
  transform: translateY(-2px);
}
</style>
