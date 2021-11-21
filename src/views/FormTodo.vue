<template>
  <div>
    <HelloWorld msg="Todo list"/>
    <FormData />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FormData from '@/components/FormData.vue'

export default {
  name: 'FormTodo',
  components: {
    HelloWorld,
    FormData
  }
}
</script>
