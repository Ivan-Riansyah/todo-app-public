<template>
  <div class="container">
    <h2 class="text-center mt-5">
      My Vue Todo App
    </h2>
     <div class="d-flex mt-5">
      <input
        type="text"
        v-model="task"
        placeholder="Enter task"
        class="w-100 form-control"
      />
      <div>
        <button class="btn btn-success rounded-2" @click="submitTask">
          <i class="fas fa-plus btn-icon me-2"></i>
          <span class="fw-bold me-2">Add Task</span>
        </button>
      </div> 
    </div>
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th width="70%" scope="col">Task</th>
          <th width="10%" scope="col">Status</th>
          <th width="20%" scope="col" class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            <span :class="{ 'line-through': task.status === 'finished' }">
              {{ task.name }}
            </span>
          </td>
          <td>
            <span
              class="pointer noselect"
              @click="changeStatus(index)"
              :class="{
                'text-danger': task.status === 'to-do',
                'text-success': task.status === 'finished',
                'text-warning': task.status === 'in-progress',
              }"
            >
              {{ task.status }}
            </span>
          </td>
          <td class="text-center">
            <button class="btn btn-danger rounded-2 mx-2 w-25" @click="deleteTask(index)">
              <i class="fa fa-trash" ></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  props: {
    msg: String,
    tasks: {
      type: Array,
      default: () => {
        return []
      }
    },
    statuses: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      task: "",
      // statuses: ["to-do", "in-progress", "finished"],
      // tasks: [
      //   {
      //     name: "Drink coffee in the morning",
      //     status: "finished",
      //   },
      //   {
      //     name: "Check Email and Discord",
      //     status: "in-progress",
      //   },
      //   {
      //     name: "Start coding for inosoft project",
      //     status: "to-do",
      //   },
      // ],
    };
  },
  methods: {
    capitalizeFirstChar(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    changeStatus(index) {
      this.$store.dispatch("todos/changeStatus",index)

      // let newIndex = this.statuses.indexOf(this.tasks[index].status);
      // if (++newIndex > 2) newIndex = 0;
      // this.tasks[index].status = this.statuses[newIndex];
    },
    deleteTask(index) {
      this.$store.dispatch("todos/deleteTodo",index)
      // this.tasks.splice(index, 1);
    },
    submitTask() {
      if (this.task.length === 0) return;
      this.tasks.push({
        name: this.task,
        status: "to-do",
      });
      this.task = "";
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.btn {
  white-space: nowrap;
  text-align: center;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
.line-through {
  text-decoration: line-through;
}
</style>