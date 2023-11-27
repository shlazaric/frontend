<template>
  <div>
    <h1>Naše najfinije slastice</h1>
    <div v-for="(dessert, index) in desserts" :key="index" class="dessert-container">
      <h2>{{ dessert.title }}</h2>
      <img :src="dessert.image" alt="Slika slastice" />
      <p>{{ dessert.description }}</p>
      <p><strong>Recept:</strong> {{ dessert.recipe }}</p>
      <p><strong>Namirnice:</strong> {{ dessert.ingredients }}</p>
      <div>
        <input v-model="newComment" placeholder="Dodajte komentar" />
        <button @click="addComment(index)">Dodaj komentar</button>
      </div>
      <ul>
        <li v-for="(comment, commentIndex) in dessert.comments" :key="commentIndex">
          {{ comment }}
          <button @click="deleteComment(index, commentIndex)">Obrisi komentar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          title: "Čokoladna torta",
          image: "putanja/do/slike1.jpg",
          description: "Sočna čokoladna torta s preljevom od bijele čokolade.",
          recipe: "Otopite tamnu čokoladu na pari i ostavite da se malo ohladi. Miksajte jaja i šećer dok ne dobijete svijetlu smjesu. Dodajte otopljeni maslac u smjesu jaja i šećera. Dodajte brašno i prašak za pecivo, pa polako umiješajte. Na kraju, umiješajte otopljenu tamnu čokoladu. Smjesu izlijte u kalup za tortu i pecite u prethodno zagrijanoj pećnici na 180°C oko 25-30 minuta.",
          ingredients: "Čokolada, jaja, brašno, šećer, maslac",
          comments: [],
        },
        {
          title: "Vanilija kolač",
          image: "putanja/do/slike2.jpg",
          description: "Mirisan vanilija kolač s preljevom od vanilije.",
          recipe: "Zamijesite tijesto od navedenih sastojaka, stavite ga u kalup i pecite dok ne bude gotovo.",
          ingredients: "Vanilija, brašno, jaja, šećer, mlijeko",
          comments: [],
        },
        {
          title: "Jagodna pita",
          image: "putanja/do/slike3.jpg",
          description: "Svježa jagodna pita s hrskavim tijestom.",
          recipe: "Pripremite tijesto, dodajte svježe jagode, pecite i uživajte.",
          ingredients: "Jagode, brašno, šećer, maslac",
          comments: [],
        },
        {
          title: "Cheesecake",
          image: "putanja/do/slike4.jpg",
          description: "Klasični cheesecake s preljevom od voća.",
          recipe: "Pomiješajte sastojke, rasporedite na keks bazi, ohladite i poslužite.",
          ingredients: "Krem sir, jaja, šećer, keks baza",
          comments: [],
        },
        {
          title: "Tiramisu",
          image: "putanja/do/slike5.jpg",
          description: "Italijanski tiramisu s kavom i mascarponeom.",
          recipe: "Umiješajte mascarpone s jajima i šećerom. Redajte slojeve smjese i piškota, natopite kavom.",
          ingredients: "Mascarpone, jaja, šećer, kava, piškote",
          comments: [],
        },
        {
          title: "Limun tart",
          image: "putanja/do/slike6.jpg",
          description: "Osvežavajući tart s limunom i šlagom.",
          recipe: "Napravite tijesto, dodajte limunovu koricu i sok, pecite do zlatno smeđe boje.",
          ingredients: "Limun, brašno, šećer, maslac",
          comments: [],
        },
        {
          title: "Mango panna cotta",
          image: "putanja/do/slike7.jpg",
          description: "Kremasta panna cotta s okusom manga.",
          recipe: "Izblendajte mango, dodajte šećer i želatinu, umiješajte vrhnje, ohladite i poslužite.",
          ingredients: "Mango, šećer, želatina, vrhnje",
          comments: [],
        },
      ],
      newComment: "",
    };
  },
  methods: {
    addComment(dessertIndex) {
      this.desserts[dessertIndex].comments.push(this.newComment);
      this.newComment = "";
    },
    deleteComment(dessertIndex, commentIndex) {
      this.desserts[dessertIndex].comments.splice(commentIndex, 1);
    },
  },
};
</script>

<style scoped>
.dessert-container {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
