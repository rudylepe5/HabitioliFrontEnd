<template>
  <div class="home">
    <nav>
        <div class="nav-wrapper">
            <a v-on:click= "home()" class="brand-logo center">Habitioli</a>
            <ul id="nav-mobile" class="right">
                <li><a v-on:click= "habits()"> Habits </a></li>
                <li><a v-on:click= "tasks()"> Tasks </a></li>
                <li><a v-on:click= "logOut()"> Log out </a></li>
            </ul>
            <ul id="nav-mobile" class="left">
                <li><a v-on:click = "deleteAccount()"> Delete Account</a></li>
            </ul>
        </div>
    </nav> 
      <h1> Welcome {{ $route.params.id }}</h1>
  </div>
</template>

<script>
import axios from "axios"
export default {
    name: 'Home',
    methods:{
        deleteAccount(){
        axios.delete('http://10.43.96.88:8084/Spring4MVCCRUDRestService/user/delete/'+this.$route.params.id )
        .then(response => {
            console.log(response.data);
            this.$router.push({ name: 'Login' });
        })
        .catch(function (error) {
            console.log(error);
        });
        },
        habits(){
            this.$router.push({ name: 'Habits', params: { id:this.$route.params.id }});
        },
        tasks(){
            this.$router.push({ name: 'Tasks', params: { id:this.$route.params.id }});
        },
        home(){
            this.$router.push({ name: 'Home', params: { id:this.$route.params.id }});
        },
        logOut(){
            this.$router.push({ name: 'Login' });
        }
    }
}

</script>

<style>
@import 'materialize-css';
</style>