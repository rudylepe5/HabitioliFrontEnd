<template>
  <div class="habits">
    <nav>
        <div class="nav-wrapper">
        <a v-on:click= "home()" class="brand-logo center">Habitioli</a>
        <ul id="nav-mobile" class="right">
            <li class="active"><a v-on:click= "habits()"> Habits </a></li>
            <li><a v-on:click= "tasks()"> Tasks </a></li>
            <li><a v-on:click= "logOut()"> Log out </a></li>
        </ul>
            <ul id="nav-mobile" class="left">
                <li><a v-on:click= "createNewHabit()"> Create New Habit </a></li>
            </ul>
        </div>
    </nav>

    <div class="card">
      <template v-for="eachHabit in habit">
        <EveryHabit :key='eachHabit.idUser' :title="eachHabit.title" :comments="eachHabit.comments" :colour="eachHabit.colour" :difficulty="eachHabit.difficulty" :score="eachHabit.score" :goodBad="eachHabit.goodBad" v-bind='eachHabit'></EveryHabit>
      </template>
    </div>


  </div>
</template>

<script>
import EveryHabit from './EveryHabit.vue'
import axios from 'axios'
export default {
    name: 'Habits',
    components: {
        EveryHabit,
    },
    data(){
        return {
            habit: []
        }
    },
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
        createNewHabit(){
            this.$router.push({ name: 'CreateNewHabit', params: { id:this.$route.params.id }});
        },
        getHabits(){
                    axios.get('http://10.43.100.151:3000/habit/user',{
                        params : {
                            email : this.$route.params.id
                        }
                    })
                    .then(response => {
                        for(var i in response.data){
                            console.log(response.data[i].colour);
                            this.$data.habit.push({title : response.data[i].title, comments : response.data[i].comments, idUser : response.data[i].email, 
                            colour : response.data[i].colour, difficulty : response.data[i].difficulty, score : response.data[i].score, goodBad : response.data[i].goodBad});
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        }
    },
    beforeMount(){
        this.getHabits();
    }
}

</script>

<style>
@import 'materialize-css';
.card{
  padding: 8%;
}
</style>