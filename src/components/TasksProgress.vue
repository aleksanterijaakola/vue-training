<template>
  <p v-if="tasksCount">
    You have completed {{ completedCount }} out of {{ tasksCount }} tasks.
  </p>
</template>

<script>
export default {
  computed: {
    tasksCount() {
      return this.$store.state.tasks.items.length
    },
    completedCount() {
      return this.$store.getters.completedCount
    }
  }
}
</script>
