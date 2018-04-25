<template>
<div class="createNewHabit">

    <nav>
        <div class="nav-wrapper">
            <a v-on:click= "home()" class="brand-logo center">Habitioli</a>
            <ul id="nav-mobile" class="right">
                <li><a v-on:click= "habits()"> Habits </a></li>
                <li><a v-on:click= "tasks()"> Tasks </a></li>
                <li><a v-on:click= "logOut()"> Log out </a></li>
            </ul>
        </div>
    </nav>

    <p>New Habit</p>
    <input type="text" v-model="nameHabit" placeholder="Tittle of habit"><br>
    <input type="text" v-model="difficulty" placeholder="Difficulty (Easy, Medium or Hard)"><br>
    <input type="text" v-model="goodBad" placeholder="Good, Bad or Both"><br>
    <input type="text" v-model="comments" placeholder="Comments"><br>
    <button v-on:click= "createHabit()">Create it</button>

</div>
</template>

<script>
import axios from "axios"
export default{
    name: 'CreateNewHabit',
    methods:{
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
        },
        createHabit(){
            console.log("userId:" + this.$route.params.id);
            console.log("title:" + this.nameHabit);
            console.log("difficulty:" + this.difficulty);
            console.log("goodBad:" + this.goodBad);
            console.log("score:" + 20);
            console.log("data:" + this.comments);
            axios.post('http://10.43.63.245:8080/Habitioli-USER-API-master/habits/', {
                idUser:this.$route.params.id,
                idHabit:'prueba',
                title:this.nameHabit
            }).then(response => {
                console.log(response.data);
                this.$router.push({ name: 'Habits', params: { id:this.$route.params.id }});
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