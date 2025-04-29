<template>
    <div class="dashboard">
      <h2>Admin Dashboard</h2>
      <router-link to="/appointments-list">Pregled rezervacija </router-link>
      <router-link to="/pets-list">Pregled ljubimaca</router-link>
    </div>
  </template>
  
 
  <style scoped>
  .dashboard {
    text-align: center;
    margin-top: 50px;
  }
  button {
    margin: 10px;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #34495e;
  }
  </style>
  