<template>
    <div name="everyHabit">
    <div class="col-lg-3 col-md-3 col-xs-6 card">
      <a class="d-block mb-4 h-100" >
        <h4 :class="colour" > {{ title }} </h4>
        <h6 :class="colour" > {{ comments }}</h6>
        <div v-if="goodBad[0] === 'good'">
        <button v-on:click = "add()" >+</button>
        </div>
        <div v-else-if="goodBad[0] === 'bad'">
        <button v-on:click = "minus()">-</button>
        </div>
        <div v-else-if="goodBad[0] === 'both'">
            <button v-on:click = "add()" >+</button>
            <button v-on:click = "minus()">-</button>
        </div>
        <br>
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
  props: ['title', 'comments', 'idUser', 'colour', 'difficulty', 'score', 'goodBad'],
  data(){
      
      return{
          colour:""
      }
  },
  methods:{
        changeColor(){
            this.colour = this.colour+"-text";
            console.log("Venga "+ this.colour);
            console.log("Score "+ this.score);
        },
        add(){
            axios.put('http://10.43.100.151:3000/habit/score?email='+this.idUser+'&title='+this.title, {
                score:this.score,
                plusMinus:"plus",
                difficulty:this.difficulty
            }).then(response => {
                console.log(response.data);
                this.$router.go({ name: 'Habits', params: { id:this.$route.params.id }});
            })
            .catch(function (error) {
                console.log(error);
            });

        },
        minus(){
            axios.put('http://10.43.100.151:3000/habit/score?email='+this.idUser+'&title='+this.title, {
                score:this.score,
                plusMinus:"minus",
                difficulty:this.difficulty
            }).then(response => {
                console.log(response.data);
                this.$router.go({ name: 'Habits', params: { id:this.$route.params.id }});
            })
            .catch(function (error) {
                console.log(error);
            });

        },
        deleteHabit(){
            axios.delete('http://10.43.100.151:3000/habit',{
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
            this.$parent.$router.replace({ name: 'EditHabit', params: { id: this.idUser, idHabit: this.title }});
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