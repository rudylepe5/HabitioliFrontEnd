<template>
    <div name="everyHabit">
    <div class="col-lg-3 col-md-3 col-xs-6 card">
      <a class="d-block mb-4 h-100" >
        <h4 id="color" > {{ idHabit }} {{ title }} {{ idUser }}</h4>
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
  props: ['title', 'idHabit', 'idUser'],
  data(){
      return{
      }
  },
  methods:{
        changeColor(){
            document.getElementById("color").style.color = this.idUser+"";
            console.log("Venga"+ this.idUser);
        },
        deleteHabit(){
            axios.delete('http://10.43.63.245:8080/Habitioli-USER-API-master/habits/')
            .then(response => {
                console.log(response.data);
                this.$parent.$router.replace({ name: 'Habits', params: { id: this.idUser }});
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        editHabit(){
            this.$parent.$router.replace({ name: 'EditHabit', params: { id: this.idUser, idHabit: this.idHabit }});
        }
  }
}
</script>

<style>
@import 'materialize-css';

</style>
