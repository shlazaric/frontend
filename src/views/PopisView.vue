<template>
    <div class="sweet-list">
      <div class="container">
        <h1> Naše najfinije slastice : </h1>
  
        <div class="row">
          <div v-for="(slastica, index) in slastice" :key="index" class="col-md-4 mb-4">
            <div class="card">
              <img :src="slastica.slika" class="card-img-top" alt="Slika slastice">
              <div class="card-body">
                <h5 class="card-title">{{ slastica.naziv }}</h5>
                <p class="card-text">{{ slastica.opis }}</p>
                <p class="card-text"><strong>Recept:</strong> {{ slastica.recept }}</p>
              </div>
              <div class="card-footer">
                <input type="text" v-model="komentar" class="form-control" placeholder="Dodaj komentar...">
                <button @click="dodajKomentar(index)" class="btn btn-primary mt-2">Pošalji komentar</button>
              </div>
              <ul class="list-group list-group-flush">
                <li v-for="(komentar, komentarIndex) in slastica.komentari" :key="komentarIndex" class="list-group-item">
                  {{ komentar }}
                  <button @click="obrisiKomentar(index, komentarIndex)" class="btn btn-sm btn-danger float-right">Obriši</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        komentar: "",
        slastice: [
          {
            naziv: "Slastica 1",
            slika: "putanja/do/slike1.jpg",
            opis: "Opis slastice 1",
            recept: "Recept za slasticu 1",
            komentari: []
          },
          // Dodajte ostale slastice na sličan način
        ]
      };
    },
    methods: {
      dodajKomentar(slasticaIndex) {
        this.slastice[slasticaIndex].komentari.push(this.komentar);
        this.komentar = "";
      },
      obrisiKomentar(slasticaIndex, komentarIndex) {
        this.slastice[slasticaIndex].komentari.splice(komentarIndex, 1);
      }
    }
  };
  </script>
  