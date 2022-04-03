<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link>

      <router-link to="/todo-list">
        Todo list
      </router-link>
    </div>

    <router-view/>
  </div>
</template>
<script>
import Button from './components/button'

export default {
  components: {
    Button
  },
  data(){
    return {
    }
  },
  methods: {
  }
  
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-family: Helvetica;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
