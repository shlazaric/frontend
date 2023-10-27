<template>
  <div class="about">
    <h1> Prijavi se </h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email adresa </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
             
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1"> Lozinka </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary"> Potvrdi </button>
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-secondary"> Otkaži </button>
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-link"> Zaboravio/la lozinku ?</button>
            </div>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
