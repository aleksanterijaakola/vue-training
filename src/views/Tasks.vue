<template>
  <div>
    <!-- add a new task input -->
    <add-new-task @task-added="onTaskAdded" />

    <!-- show progress of tasks -->
    <tasks-progress v-if="tasks.length" class="mt-4" :tasks="tasks" />

    <!-- list tasks -->
    <ul v-if="tasks.length" class="mt-4 list-disc ml-4">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :class="{ 'text-green-500 line-through': task.completed }"
      >
        {{ task.name }}

        <!-- mark a task as completed -->
        <button
          type="button"
          class="px-2 rounded bg-green-400 text-white hover:bg-green-600"
          @click="completeTask(task)"
        >
          ✓
        </button>

        <!-- delete a task -->
        <button
          type="button"
          class="ml-2 px-2 rounded bg-red-400 text-white hover:bg-red-600"
          @click="deleteTask(task)"
        >
          &times;
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import AddNewTask from '@/components/AddNewTask'
import TasksProgress from '@/components/TasksProgress'
export default {
  components: {
    AddNewTask,
    TasksProgress
  },
  data: () => ({
    tasks: []
  }),
  methods: {
    completeTask(task) {
      task.completed = !task.completed
    },
    deleteTask(task) {
      const taskIndex = this.tasks.indexOf(task)
      this.tasks.splice(taskIndex, 1)
    },
    onTaskAdded(name) {
      this.tasks.push({ name, completed: false })
    }
  }
}
</script>
