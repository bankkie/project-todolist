<template>
  <div class="home">
    <HelloWorld msg="Welcome to Todo list"/>
    <TodoLists />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TodoLists from '@/components/Todolists.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TodoLists
  }
}
</script>
