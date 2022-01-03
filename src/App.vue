<template>
  <div id="app">
    <todo-app
      :tasks="tasks"
      :statuses="statuses"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoApp from './components/TodoApp.vue'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      statuses: "todos/getStatuses",
      tasks: "todos/getTasks"
    })
    
  },
  components: {
    TodoApp
  }
}
</script>
