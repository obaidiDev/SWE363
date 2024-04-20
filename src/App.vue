<template>
  <head>
    <title>Simply Hired</title>
  </head>
  <UsersNav/>
  <router-view/>
  <footer>        
    <div>
      <img src="" alt=" LOGO">
    </div>
    <div>
      Copyright 2024 SimplyHired
    </div>
  </footer>
</template>

<script>
import UsersNav from './components/UsersNav.vue';

export default {
  name: 'App',
  components: {
    UsersNav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
footer {
    background-color: #19212c;
    color: aliceblue;
    padding: 5px;
    font-size: smaller;
}
footer div {
    margin: 10px 0px;
}
</style>
