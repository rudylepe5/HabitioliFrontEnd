<template>
    <div name="everyTask">
    <div class="col-lg-3 col-md-3 col-xs-6 card">
      <a class="d-block mb-4 h-100" >
        <h5 id="color" > {{ title }} </h5>
        <p>{{ description }} </p>
        <p> <b>Due Date:</b> {{ dueDate }}</p>
        <p> <b>Reminder Date:</b> {{ reminderDate }} <b>at</b> {{ reminderHour }}</p>
        <button>Done</button>
        <button v-on:click = "editTask()">Edit</button>
        <button v-on:click = "deleteTask()">Delete</button>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "EveryTask",
  props: ['title', 'idTask', 'idUser', 'description', 'dueDate', 'reminderDate', 'reminderHour'],
  data(){
      
      return{
          
      }
  },
  methods:{
        deleteTask(){
            axios.delete('http://10.43.92.158:3000/task',{
                        params : {
                            email : this.idUser,
                            title : this.title
                        }
                    })
            .then(response => {
                console.log(response.data);
                this.$parent.$router.push({ name: 'Tasks', params: { id: this.idUser }});
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        editTask(){
            this.$parent.$router.push({ name: 'EditTask', params: { id: this.idUser, idTask: this.idTask }});
        }
  }
}
</script>

<style>
@import 'materialize-css';

</style>
