<template>

  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <button class="btn text-light " v-on:click="inicio()">Inicio</button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <button class="btn text-light " v-on:click="perfil()">Perfil</button>
            </li>
            <li class="nav-item">
              <button class="btn text-light " v-on:click="favoritos(data.id)">Favoritos</button>
            </li>
          </ul>
          <div class="d-flex" role="search">
            <button class="btn text-light " v-on:click="logout()">Cerrar sesion</button>
          </div>
        </div>
      </div>
    </nav>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'DashBoard',
  data() {

    return {
      id: null,
      character: null,
      page: 1,
      data: null
    }
  },
  mounted: function(){

    this.id = localStorage.getItem("id");
    axios.get( 'http://127.0.0.1:8000/api/edit/'+this.id).then(data=>{
      this.data = data.data
    }).catch(error => console.log(error))

  },
  methods: {

    inicio() {
      this.$router.push('/dashboard')
    },
    perfil() {
      this.$router.push('/perfil')
    },
    favoritos(id) {
      this.$router.push('/favorites/'+id)
    },
    logout(){
      const token = localStorage.getItem("token")
      axios.get('http://127.0.0.1:8000/api/logout',{
        headers: {
          Authorization:`Bearer ${token}`
        }
      }).then(data=>{
      console.log(data.data)
    }).catch(error => console.log(error))
      this.$router.push('/')
    }

  }
}
</script >