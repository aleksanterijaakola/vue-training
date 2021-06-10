<template>
  <div class="space-y-4">
    <add-new-task @task-added="onTaskAdded" />

    <tasks-progress />

    <tasks-list
      v-if="tasks.length"
      :tasks="tasks"
      @complete="onComplete"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import AddNewTask from '@/components/AddNewTask'
import TasksProgress from '@/components/TasksProgress'
import TasksList from '@/components/TasksList'
export default {
  components: {
    AddNewTask,
    TasksProgress,
    TasksList
  },
  computed: {
    tasks() {
      return this.$store.state.tasks.items
    }
  },
  methods: {
    onTaskAdded(name) {
      this.$store.commit('add', name)
    },
    onComplete(task) {
      this.$store.commit('complete', task)
    },
    onDelete(task) {
      this.$store.commit('delete', task)
    }
  }
}
</script>
