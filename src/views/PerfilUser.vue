<template>
    <div class="hello">
        <HeaderComponent />
        <div class="container">

            <form action="" class="from-horizontal">
                <div class="form-group left">

                    <label for="" class="control-label col-sm-2">Nombre</label>
                    <div class="col-sm-10">

                        <input type="text" class="form-control" name="name" id="name" v-model="form.name">

                    </div>

                </div>
                <div class="form-group left">

                    <label for="" class="control-label col-sm-2">Correo</label>
                    <div class="col-sm-10">

                        <input type="text" class="form-control" name="email" id="email" v-model="form.email">

                    </div>

                </div>
                <div class="form-group left">

                    <label for="" class="control-label col-sm-2">Direccion</label>
                    <div class="col-sm-10">

                        <input type="text" class="form-control" name="address" id="address" v-model="form.address">

                    </div>

                </div>
                <div class="form-group left">

                    <label for="" class="control-label col-sm-2">Cumpleaños</label>
                    <div class="col-sm-10">

                        <input type="date" class="form-control" name="birthdate" id="birthdate" v-model="form.birthdate">

                    </div>

                </div>
                <div class="form-group left">

                    <label for="" class="control-label col-sm-2">Ciudad</label>
                    <div class="col-sm-10">

                        <input type="text" class="form-control" name="city" id="city" v-model="form.city">

                    </div>

                    <div class="form-group left">
                        <button class="btn btn-success" v-on:click="update()"> Actualizar</button>
                    </div>

                </div>

            </form>

        </div>

    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import axios from 'axios';

export default {
    name: 'PerfilUser',
    components: {
        HeaderComponent
    },
    data: function () {
        return {
            form: {
                "name": "",
                "email": "",
                "address": "",
                "birthdate": "",
                "city": "",
            }
        }
    },
    methods: {

        update(){

            const url = 'http://127.0.0.1:8000/api/update/'+localStorage.getItem("id")
            const token = localStorage.getItem("token")
            axios.put(url,this.form,{
                headers: {
          Authorization:`Bearer ${token}`
        }
            })
            .then(data =>{
                console.log(data.data)
            })
            .catch(error=>console.log(error))

        }

    },
    mounted: function () {
        this.id = localStorage.getItem("id");
        const url = 'http://127.0.0.1:8000/api/edit/' + this.id;
        axios.get(url).then(data => {
            this.form.name = data.data.name;
            this.form.email = data.data.email;
            this.form.address = data.data.address;
            this.form.birthdate = data.data.birthdate;
            this.form.city = data.data.city;
            console.log(this.form)
        }).catch(error => console.log(error))
    }

}
</script>

<style scoped>
.left {
    margin-top: 2rem;
    text-align: left;
}
</style>
