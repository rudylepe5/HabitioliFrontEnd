<template>
  <div class="sign-up">
      <nav>
        <div class="nav-wrapper">
        <a v-on:click= "home()" class="brand-logo center">Habitioli</a>
        </div>
        </nav>


    <p>Let's create a new account!</p>
    <input type="text" v-model="mail" placeholder="Email"><br>
    <input type="text" v-model="name" placeholder="Name"><br>
    <button v-on:click= "signUp()">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'SignUp',
    data: function() {
      return {
        email: '',
        name: ''
      }
    },

    methods: {
    signUp(){
        axios.post('http://10.43.41.111:8084/Spring4MVCCRUDRestService/signup/', {
            name: this.name,
            mail: this.mail
        })
        .then( response =>{
            console.log(response);
            this.$router.replace('login');
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    }
}
</script>


<style>
@import 'materialize-css';
</style>