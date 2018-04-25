<template>
  <div class="tasks">
    <nav>
        <div class="nav-wrapper">
        <a v-on:click= "home()" class="brand-logo center">Habitioli</a>
        <ul id="nav-mobile" class="right">
            <li><a v-on:click= "habits()"> Habits </a></li>
            <li class="active"><a v-on:click= "tasks()"> Tasks </a></li>
            <li><a v-on:click= "logOut()"> Log out </a></li>
        </ul>
            <ul id="nav-mobile" class="left">
                <li><a v-on:click= "createNewTask()"> Create New Task </a></li>
            </ul>
        </div>
    </nav>

      <template v-for="eachTask in task">
        <EveryTask :key='eachTask.idUser' :title="eachTask.title" :idHabit="eachTask.idTask" v-bind='eachTask'></EveryTask>
      </template>


  </div>
</template>

<script>
import EveryTask from './EveryTask.vue'
import axios from 'axios'
export default {
    name: 'Tasks',
    components: {
        EveryTask,
    },
    data(){
        return {
            task: []
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
        createNewTask(){
            this.$router.push({ name: 'CreateNewTask', params: { id:this.$route.params.id }});
        },
        getTasks(){
                    axios.get('http://10.43.63.245:8080/Habitioli-USER-API-master/habits/')
                    .then(response => {
                        for(var i in response.data){
                            console.log(response.data[i].idUser);
                            this.$data.habit.push({title : response.data[i].title, idTask : response.data[i].idTask, idUser : response.data[i].idUser});
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        }
    },
    beforeMount(){
        this.getTasks();
    }
}

</script>

<style>
@import 'materialize-css';

</style>