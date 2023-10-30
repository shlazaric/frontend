<template>
  <div class="about">
    <h1>Prijavi se</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email adresa</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Unesite email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Lozinka</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Lozinka"
              />
            </div>
            <div class="form-group">
              <button @click="login" type="button" class="btn btn-primary">Prijavi se</button>
              <button type="button" @click="cancel" class="btn btn-secondary">Otkaži</button>
              <button type="button" @click="forgotPassword" class="btn btn-link">Zaboravio/la lozinku?</button>
            </div>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      // Logika za provjeru korisničkih podataka
      // Ako je prijava uspješna, preusmjeri na popis slastica
      this.$router.push({ name: 'popis' });
    },
    cancel() {
      // Logika za otkazivanje ili povratak na prethodnu stranicu
    },
    forgotPassword() {
      // Logika za zaboravljenu lozinku
    }
  }
};
</script>
