<template>
    <div class="dashboard">
        <h2> Dobrodošli ! </h2>

        <RouterLink to="/appointments">
            <button>Pregled termina</button>
        </RouterLink>

        <RouterLink to="/pets">
            <button>Pregled ljubimaca</button>
        </RouterLink>
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