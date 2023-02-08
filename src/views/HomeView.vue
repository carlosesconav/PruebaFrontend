<template>
  <div class="home">
    <div class="login">

      <h1 class="text-center">Bienvenido usuario</h1>

      <form v-on:submit.prevent="login">
        <div class="form-group">
          <label class="form-label" for="email">Ingresa tu correo electronico: </label>
          <input class="form-control" type="email" id="email" name="email" v-model="email" required
            placeholder="Correo electronico">

        </div>

        <div class="form-group">
          <label class="form-label" for="password">Ingresa tu contraseña: </label>
          <input class="form-control" type="password" id="password" name="password" v-model="password" required
            placeholder="Contraseña">

        </div>
        <button class="btn btn-primary w-100">Iniciar sesion</button>
      </form>
      <div>

        <div class="alert alert-danger" role="alert" v-if="error"> Credenciales invalidas </div>

        <button class="btn" v-on:click="register()"> Registrarse </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {

  },
  data: function () {
    return {

      email: "",
      password: "",
      error: false,
      error_msg: "",

    }
  },
  methods: {
    login() {
      let data = {
        "email": this.email,
        "password": this.password
      };
      axios.post('http://127.0.0.1:8000/api/login', data)
        .then(data => {
          if (data.data.status === 200) {
            localStorage.token = data.data.accessToken;
            localStorage.id = data.data.user.id;
            this.$router.push('dashboard')

          } else {
            this.error = true;
            this.error_msg = data.data.message;
          }
        })
    },
    register(){
      this.$router.push('register')
    }
  }
}
</script>

<style scoped>
* {
  margin: 0px auto;
  padding: 0;
  box-sizing: border-box;
}

body {

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 360px;
  height: min-content;
  padding: 20px;
  background: white;

}

.login h1 {
  font-size: 36px;
  margin-bottom: 25px;

}

.login form {
  font-size: 20px;

}

.login form .form-group {
  margin-bottom: 12px;

}

.login form button {
  font-size: 20px;
  margin-top: 15px;

}
</style>