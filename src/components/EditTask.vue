<template>
<div class="editTask">

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

    <p>Edit Habit</p>
    <input type="text" v-model="nameTask" placeholder="Name of task"><br>
    <input type="text" v-model="description" placeholder="Description"><br>
    <input type="text" v-model="dueDate" placeholder="Due Date"><br>
    <input type="text" v-model="daysBefore" placeholder="Remind me this many days"><br>
    <input type="text" v-model="hourOfDay" placeholder="Hour of day you want to be reminded."><br>
    <button v-on:click= "createHabit()">Edit it</button>

</div>
</template>

<script>
import axios from "axios"
export default{
    name: 'EditHabit',
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
        editHabit(){
            console.log("userId:" + this.$route.params.id);
            console.log("nameTask:" + this.nameTask);
            console.log("description:" + this.description);
            console.log("dueDate:" + this.dueDate);
            console.log("daysBefore:" + this.daysBefore);
            console.log("hourOfDay:" + this.hourOfDay);
            axios.post('http://10.43.63.245:8080/Habitioli-USER-API-master/habits/', {
                idUser:this.$route.params.id,
                idTask:'prueba',
                nameTask:this.nameTask
            }).then(response => {
                console.log(response.data);
                this.$router.push({ name: 'Tasks', params: { id:this.$route.params.id }});
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