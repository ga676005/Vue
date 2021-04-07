<template>
  <div>
    <div v-if="loading && error === ''">Loading</div>
    <ul v-else>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
    <div v-if="error !== ''">{{ error }}</div>
  </div>
</template>

<script>
export default {
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        this.todos = json;
        this.loading = false;
      })
      .catch((error) => {
        this.error = error;
      });
  },

  data() {
    return {
      loading: true,
      todos: [],
      error: "",
    };
  },
};
</script>
<style scoped>
ul {
  color: rgb(66, 61, 61);
}
</style>