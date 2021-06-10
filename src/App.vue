<template>
  <div class="m-8">
    <h1 class="mb-4 text-lg italic">Awesome App</h1>

    <router-link
      :to="{ name: 'Home' }"
      class="hover:text-blue-700"
      active-class="underline"
      exact
    >
      Home
    </router-link>

    <router-link
      :to="{ name: 'Tasks' }"
      class="hover:text-blue-700"
      active-class="underline"
      exact
    >
      Tasks
    </router-link>

    <router-view class="mt-4" />
  </div>
</template>
