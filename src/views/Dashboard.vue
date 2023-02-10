<template>
    <div>
        <HeaderComponent />
        <h1 class="fw-bold">Bienvenido</h1>
        <div class="content">
            <div class="content-characters" v-for="characters in character" :key="characters.id">
                <img :src="characters.image" alt="">
                <h2> {{ characters.name }} </h2>
                <h6> {{ characters.gender }} </h6>
                <button class="btn text-light" v-on:click="info(characters.id)"> Info del personaje </button>
                <button class="btn text-light" v-on:click="favorite(characters.id)"> Marcar favorito </button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import axios from 'axios';

export default {
    name: 'DashBoard',
    data() {
        return {
            character: null,
            page: 1,
            form: {
                "id_user": "",
                "ref_api": ""
            }
        }
    },
    components: {
        HeaderComponent
    },
    methods: {

        info(id) {
            this.$router.push('/info/' + id)
        },
        favorite(chId) {

            this.form.id_user = localStorage.getItem("id")
            this.form.ref_api = chId

            axios.post('http://127.0.0.1:8000/api/Savefavorites', this.form)
                .then(data => {
                    console.log(data.data)
                })
                .catch(error => console.log(error))
        }

    },
    mounted: function () {

        const url = 'https://rickandmortyapi.com/api/character/?page=' + this.page;
        axios.get(url)
            .then(data => {
                this.character = data.data.results;
            })
            .catch(error => console.log(error))
    }
}
</script >

<style scoped>
.content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 30px 30px;
    width: 80%;
    margin: 0 auto;
}

.content-characters {
    background: #000000;
    padding: 1rem;
    border-radius: 1rem;
}

.content-characters:hover {
    background: #6d6d6d;
}

h1 {
    padding: 10rem;
}

img {

    height: 50%;
    width: 50%;
    border-radius: 1rem;

}

h2 {
    font-weight: bold;
    font-size: 1.2rem;
    padding: 1rem;
    background: #00ff97;
    border-radius: 0.8rem;
    margin: 1rem;
    font-size: 1rem;
}

h6 {

    margin: 1rem;
    color: #ffffff;
    background: #000000;
    border-radius: 0.4rem;
    padding: 0.2rem;
}

.character {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>