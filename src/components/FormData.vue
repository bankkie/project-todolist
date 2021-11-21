<template>
  <div>
      <div class="pb-4">
          <input type="text" class="inputText" v-model="todolist.order" placeholder="Order">
      </div>
      <div class="pb-4">
          <input type="date" class="inputText" v-model="todolist.date">
      </div>
      <div class="pb-4">
          <textarea class="inputText" cols="30" rows="10" v-model="todolist.detail" placeholder="Detail"></textarea>
      </div>
      <div class="pb-4">
          <button type="submit" class="button" @click="submitOnClick">Save</button>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FormData",
  props: {},
  created() {
      if (this.selectTodolist.id) {
          this.todolist = this.selectTodolist;
      }
  },
  methods: {
    ...mapActions(["addTodo", "updateTodo", "removeSelectTodolist"]),
    submitOnClick () {
        if (!this.todolist.id) {
            const length = this.todolists.length;
            const newId = Number(this.todolists[length-1].id) + 1;
            this.todolist.id = newId
            this.addTodo(this.todolist);
            this.$router.push('/')
        } else {
            this.updateTodo(this.todolist);
            this.removeSelectTodolist();
            this.$router.push('/')
        }
    }
  },
  data() {
      return {
          todolist: {}
      }
  },
  computed: {
      ...mapGetters({
            todolists: "getTodolists",
            selectTodolist: "getSelectTodolist"
            }),
  }
};
</script>

<style>
.inputText {
    @apply shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight;
}
.inputText:focus {
    @apply outline-none;
}
</style>
