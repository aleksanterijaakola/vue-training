<template>
  <ul class="list-disc ml-4">
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
        @click="$emit('complete', task)"
      >
        ✓
      </button>

      <!-- delete a task -->
      <button
        type="button"
        class="ml-2 px-2 rounded bg-red-400 text-white hover:bg-red-600"
        @click="$emit('delete', task)"
      >
        &times;
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>
