<template>
  <div>
    <input
      type="text"
      class="form-input"
      placeholder="Add a new task..."
      v-model="newTask"
      @keydown.enter="addTask"
    />

    <button
      type="button"
      class="ml-1 bg-gray-300 rounded px-2 py-2"
      :class="buttonClasses"
      :disabled="trimmedTask === ''"
      @click="addTask"
    >
      Add task
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    newTask: ''
  }),
  computed: {
    trimmedTask() {
      return this.newTask.trim()
    },
    buttonClasses() {
      return this.trimmedTask === ''
        ? 'cursor-not-allowed'
        : 'hover:text-white hover:bg-gray-500'
    }
  },
  methods: {
    addTask() {
      if (this.trimmedTask === '') {
        return
      }
      this.$emit('task-added', this.trimmedTask)
      this.newTask = ''
    }
  }
}
</script>
