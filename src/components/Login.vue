<template>
  <div class="login">
      <nav>
        <div class="nav-wrapper">
        <a v-on:click= "home()" class="brand-logo center">Habitioli</a>
        </div>
        </nav>
    <h3>Sign In</h3>
    <input type="email" v-model="email" placeholder="Email"><br>
    <button v-on:click= "signIn()">Sign In</button>
    <p>You don't have an account? You can <router-link to="/sign-up">create one</router-link></p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'Login',
  methods:{
    signIn(){
        var data;
        axios.post('http://10.43.41.111:8084/Spring4MVCCRUDRestService/login/', {
            mail: this.email
        })
        .then(response => {
            console.log(response.data);
            this.$router.push({ name: 'Home', params: { id: response.data }});
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

