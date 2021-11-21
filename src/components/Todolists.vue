<template>
  <div>
    <!-- <div class="flex flex-col items-center">
      <button class="button w-20" @click="getTodoLists()">Get</button>
    </div> -->
    <div v-if="todolists.length > 0" class="flex flex-col items-center">
      <div class="flex flex-row w-4/5 headTable">
        <div class="w-1/5"><b>Date</b></div>
        <div class="w-1/5"><b>Order</b></div>
        <div class="w-2/5"><b>Detail</b></div>
        <div class="w-1/5"><b>Edit</b></div>
      </div>
      <div v-for="todo in todolists" :key="todo.id" class="flex flex-row w-4/5">
        <div class="w-1/5 labelText">{{ todo.date }}</div>
        <div class="w-1/5 labelText">{{ todo.order }}</div>
        <div class="w-2/5 labelText">{{ todo.detail }}</div>
        <div class="w-1/5">
          <button class="button" @click="editOnClick(todo)">edit</button>
          <button class="button" @click="deleteTodo(todo.id)">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TodoLists",
  props: {},
  methods: {
    ...mapActions(["deleteTodo", "setSelectTodolist"]),
    async editOnClick(todo) {
        await this.setSelectTodolist(todo);
        this.$router.push('/edit')
    }
  },
  computed: {
    ...mapGetters({
      todolists: "getTodolists"
    }),
  },
};
</script>

<style scoped>
.flex-row {
  margin-top: 10px;
}
.labelText {
  padding-top: 13px;
}
.headTable {
  @apply border-b-2 border-gray-400 border-solid pb-2;
}
</style>
