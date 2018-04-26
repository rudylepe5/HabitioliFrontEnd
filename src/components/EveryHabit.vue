<template>
    <div name="everyHabit">
    <div class="col-lg-3 col-md-3 col-xs-6 card">
      <a class="d-block mb-4 h-100" >
        <h4 :class="color" > {{ title }} </h4>
        <h6 :class="color" > {{ comments }}</h6>
        <button v-on:click = "changeColor()" >+</button>
        <button>-</button>
        <button v-on:click = "editHabit()">Edit</button>
        <button v-on:click = "deleteHabit()">Delete</button>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "EveryHabit",
  props: ['title', 'comments', 'idUser'],
  data(){
      
      return{
          color:""
      }
  },
  methods:{
        changeColor(){
            this.color = this.idUser+"-text";
            console.log("Venga"+ this.idUser);
        },
        deleteHabit(){
            axios.delete('http://10.43.92.124:3000/habit',{
                        params : {
                            email : this.idUser,
                            title : this.title
                        }
                    })
            .then(response => {
                console.log(response.data);
                this.$parent.$router.go({ name: 'Habits', params: { id: this.idUser }});
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        editHabit(){
            this.$parent.$router.replace({ name: 'EditHabit', params: { id: this.idUser, idHabit: this.idHabit }});
        }
  },
  beforeMount(){
      this.changeColor();
  }
}
</script>

<style>
@import 'materialize-css';

</style>
