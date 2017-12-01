<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  body {
    margin: 0;
    background-color: #ffffff;
  }

  html,body,p,h1,h2,h3,h4,h5,h6,ul,li{
    margin: 0;
    padding: 0;
  }
  html,body{
    height: 100%;
    width:  100%;
    font-size: 16px;
  }

  #app {
    height: 100%;
    width:  100%;
    font-family: FontAwesome, sans-serif;
  }

  ul{
    list-style: none;
  }

  a:visited, a:link, a:hover,a{
    color: inherit;
    text-decoration: none;
  }
</style>
