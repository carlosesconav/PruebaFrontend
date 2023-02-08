import Vue from 'vue'; 
import Vuex from 'vuex'; 
import App from './App.vue'; 
 
Vue.use(Vuex); 
 
const store = new Vuex.Store({ 
  state: { 
  }, 
  getters: { 
  }, 
  mutations: { 
  }, 
  actions: { 

    login(){
      let data = {
        "email": this.email,
        "password": this.password
      };
      axios.post('http://127.0.0.1:8000/api/login', data)
        .then(data => {
          if (data.data.status === 200) {
            localStorage.token = data.data.accessToken;
            this.$router.push('dashboard')

          } else {
            this.error = true;
            this.error_msg = data.data.message;
          }
        })
    }

  }

})