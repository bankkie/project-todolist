<template>
  <div id="app" class="flex flex-col">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add</router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoLists",
  props: {},
  async created() { 
    await this.getTodoLists() 
    //localStorage.setItem('user', 123456789);
  },
  methods: {
    ...mapActions(["getTodoLists"]),
  },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
