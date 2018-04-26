<template>
<div class="editHabit">

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
    <input type="text" v-model="nameHabit" placeholder="Tittle of habit"><br>
    <input type="text" v-model="comments" placeholder="Description"><br>
    <h5>Difficulty</h5>
    
    
      <label>
        <input name="group1" type="radio" value="easy" v-model="difficulty" checked />
        <span>Easy</span>
      </label>

      <label>
        <input name="group1" type="radio" value="medium" v-model="difficulty" />
        <span>Medium</span>
      </label>
      <label>
        <input name="group1" type="radio" value="hard" v-model="difficulty"  />
        <span>Hard</span>
      </label>
   
    <br>
    <br>
        <h5>Type</h5>
    
    
      <label>
        <input name="group2" type="radio" value="good" v-model="goodBad" checked />
        <span>Good</span>
      </label>
      <label>
        <input name="group2" type="radio" value="bad" v-model="goodBad" />
        <span>Bad</span>
      </label>

      <label>
        <input name="group2" type="radio" value="both" v-model="goodBad"  />
        <span>Both</span>
      </label>
    <br>
    <br>
    
    <button v-on:click= "editHabit()">Edit it</button>

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
            console.log("title:" + this.nameHabit);
            console.log("difficulty:" + this.difficulty);
            console.log("goodBad:" + this.goodBad);
            console.log("data:" + this.comments);
            axios.put('http://10.43.100.151:3000/habit?email='+this.$route.params.id+'&title='+this.$route.params.idHabit, {
                title:this.nameHabit,
                comments:this.comments,
                difficulty:this.difficulty,
                goodBad:this.goodBad
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