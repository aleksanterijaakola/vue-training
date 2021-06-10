<template>
  <div>
    Welcome to the most awesome demo app!

    <hr class="my-4" />

    <tasks-progress />
  </div>
</template>

<script>
import TasksProgress from '@/components/TasksProgress'
export default {
  components: {
    TasksProgress
  }
}
</script>
