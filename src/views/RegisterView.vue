<template>
    <div class="container">

        <form action="" class="form-horizontal">
            <div class="form-group left">
                <label for="" class="control-label col-sm-2">Nombre: </label>
                <div class="col-sm-10">

                    <input type="text" class="form-control" name="name" id="name" v-model="form.name">

                </div>
            </div>
            <div class="form-group left">

                <label for="" class="control-label col-sm-2">Correo: </label>
                <div class="col-sm-10">

                    <input type="email" class="form-control" name="email" id="email" v-model="form.email">

                </div>
            </div>
            <div class="form-group left">

                <label for="" class="control-label col-sm-2">Contraseña: </label>
                <div class="col-sm-10">

                    <input type="password" class="form-control" name="password" id="password" v-model="form.password">

                </div>
            </div>
        </form>
        <div class="form-group left">
                <button class="btn btn-success" v-on:click="register()"> Registrar</button>
        </div>

    </div>
</template>

<script>
 import axios from 'axios'

export default {
    name: 'RegisterView',
    data: function() {

        return {

            form: {
                "name": null,
                "email": null,
                "address": null,
                "birthdate": null,
                "city": null,
                "password": null,
            }

        }
    },
    methods: {

        register(){

            axios.post('http://127.0.0.1:8000/api/register', this.form)
                .then(data => {
                   if(data.data){

                    this.$router.push('')

                   }
                })
                .catch(error => console.log(error))
        }
    }
}
</script>

<style scoped>
.left {
    margin-top: 2rem;
    text-align: left;
}
</style>
