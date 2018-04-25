<template>
    <div name="everyTask">
    <div class="col-lg-3 col-md-3 col-xs-6 card">
      <a class="d-block mb-4 h-100" >
        <h4 id="color" > {{ idTask }} {{ nameTask }} {{ idUser }}</h4>
        <button>Done</button>
        <button v-on:click = "editHabit()">Edit</button>
        <button v-on:click = "deleteHabit()">Delete</button>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "EveryTask",
  props: ['nameTask', 'idTask', 'idUser'],
  data(){
      
      return{
          
      }
  },
  methods:{
        deleteTask(){
            axios.delete('http://10.43.63.245:8080/Habitioli-USER-API-master/habits/')
            .then(response => {
                console.log(response.data);
                this.$parent.$router.replace({ name: 'Tasks', params: { id: this.idUser }});
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        editTask(){
            this.$parent.$router.replace({ name: 'EditTask', params: { id: this.idUser, idTask: this.idTask }});
        }
  }
}
</script>

<style>
@import 'materialize-css';

</style>
