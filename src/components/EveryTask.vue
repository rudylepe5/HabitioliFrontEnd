<template>
    <div name="everyTask">
    <div class="col-lg-3 col-md-3 col-xs-6 card">
      <a class="d-block mb-4 h-100" >
        <h5 :class="color"> {{ title }} </h5>
        <p :class="color" >{{ description }} </p>
        <p :class="color"> <b>Due Date:</b> {{ dueDate }}</p>
        <p :class="color"> <b>Reminder Date:</b> {{ reminderDate }} <b>at</b> {{ reminderHour }}</p>
        <button v-on:click = "taskDone()">Done</button>
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
  props: ['title', 'idTask', 'idUser', 'description', 'dueDate', 'reminderDate', 'reminderHour', 'status'],
  data(){
      
      return{
          color:""
      }
  },
  methods:{
        deleteTask(){
            axios.delete('http://10.43.92.158:3000/task/user',{
                        params : {
                            email : this.idUser,
                            title : this.title
                        }
                    })
            .then(response => {
                console.log(response.data);
                this.$parent.$router.go({ name: 'Tasks', params: { id: this.idUser }});
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        editTask(){
            this.$parent.$router.push({ name: 'EditTask', params: { id: this.idUser, idTask: this.title }});
        },
        taskDone(){
            axios.put('http://10.43.92.158:3000/task/user?email='+this.idUser+'&title='+this.title,{
                        status : 'completed'
                    })
            .then(response => {
                console.log(response.data);
                this.$parent.$router.go({ name: 'Tasks', params: { id: this.idUser }});
            })
            .catch(function (error) {
                console.log(error);
            });            
        },
        checkDay(){
            var date = new Date();
            this.dueDate = this.dueDate.substring(0, this.dueDate.indexOf('T'));
            this.reminderDate = this.reminderDate.substring(0, this.reminderDate.indexOf('T'));
            var month = date.getUTCMonth() + 1;
            var day = date.getUTCDate();
            var year = date.getUTCFullYear();
            if(month < 10){
                var fullDate = year + "-0" + month + "-" + day;
            }
            else{
                var fullDate = year + "-" + month + "-" + day;
            }
            

            if(fullDate == this.dueDate){
                this.color="red-text";
            }
            else{
                this.color="blue-text";
                
            }
            console.log(this.color);
            console.log(fullDate);
            console.log(this.dueDate);
        }
  },
  beforeMount(){
      this.checkDay();
  }
}
</script>

<style>
@import 'materialize-css';

</style>

