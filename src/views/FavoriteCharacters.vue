<template>
    <div class="hello">
        <HeaderComponent />
        <div>
            <h1 class="fw-bold">Favoritos</h1>
            <div class="content">
                <div class="content-characters" v-for="characters in character" :key="characters.id">
                    <img :src="characters.image" alt="">
                    <h2> {{ characters.name }} </h2>
                    <h6> {{ characters.gender }}</h6>
                    <button class="btn text-light" v-on:click="info(characters.id)"> Info del personaje </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import axios from 'axios'
export default {
    name: 'FavoriteCharacters',
    data() {
        return {
            id: null,
            character: null,
            page: 1,
            fav: {},
        }
    },
    components: {
        HeaderComponent
    }, methods: {

        info(id) {
            this.$router.push('/info/' + id)
        },

    },
    mounted: function () {
        const url = 'http://127.0.0.1:8000/api/favorites/' + localStorage.getItem("id");

        console.log(localStorage.getItem("id"))

        axios.get(url)
            .then(data => {

                this.fav = data;
                console.log(this.fav.data)
                const data1 = [];
                for (const iterator in this.fav.data) {

                    console.log(iterator)
                    let d = iterator
                    // let jsonInt = parseInt(JSON.stringify(d));
                    data1.push(d)

                }


                console.log(data1)

                const data2 = [];

                for (const i of data1) {

                    let x = this.fav.data[i].ref_api
                    data2.push(x)

                }

                console.log(data2)

                axios.get(`https://rickandmortyapi.com/api/character/${data2},`)
                    .then(data => {
                        this.character = data.data;
                    })
                    .catch(error => console.log(error))

            })
            .catch(error => console.log(error))

    }
}
</script>

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
