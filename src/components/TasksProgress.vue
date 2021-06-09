<template>
  <p>
    You have completed {{ completedTasks }} out of {{ tasks.length }} tasks.
  </p>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  computed: {
    completedTasks() {
      return this.tasks.filter(({ completed }) => completed).length
    }
  }
}
</script>
