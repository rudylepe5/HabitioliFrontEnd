<template>
<div class = "navVar">   
    <nav>
        <div class="nav-wrapper">
        <a href="#" class="brand-logo left">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <button v-on:click= "habits()"> Habits </button>
        </ul>
        </div>
    </nav>    
</div>

</template>

<script>
export default{
    name: 'navVar',
    methods:{
        habits(){
            this.$router.push({ name: 'Habits' });
        }
    }
}
</script>

<style>
@import 'materialize-css';
</style>
