<template>
  <div v-for="todo in allTodos" :key="todo.id" class="">
    <h1 class="">{{ todo.title }}</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'TodosItem',
  computed: mapGetters(['allTodos']),
  methods: {
    ...mapActions(['fetchTodosAsync']),
  },
  created() {
    this.fetchTodosAsync();
  },
};
</script>

<style lang="css" scoped>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
