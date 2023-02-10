<template>
    <div>
        <HeaderComponent />
        <div class="content">
            <h1> {{ info.name }} </h1>
            <div class="content-character">
                <img :src="info.image" alt="">

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Genero</th>
                            <th>Origen</th>
                            <th>Localizacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {{ info.name }} </td>
                            <td> {{ info.status }} </td>
                            <td> {{ info.gender  }} </td>
                            <td> {{ info.origin.name }} </td>
                            <td> {{ info.location.name }} </td>
                        </tr>
                    </tbody>
                </table>
        </div>

        </div>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import axios from 'axios';

export default {

   name:"InfoCharacter",
   components:{
    HeaderComponent
   },
   data:function(){
    return{
        id:null,
        info: null
    }
   },
   mounted: function(){
    this.id = this.$route.params.id;
    const url='https://rickandmortyapi.com/api/character/'+this.id;

    axios.get(url)
    .then(data =>{
        this.info = data.data;
    })
    .catch(error=>console.log(error))
   }
}
</script >

<style scoped>
.content {
    display: grid;
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

table{
    margin: 3rem;
}

h1 {
    padding: 2rem;
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
    font-weight: inherit;
    padding: 0.2rem;
}

.character {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>