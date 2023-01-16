<template>

  <h1>Todo Register Page</h1>

  <TodoRegiserComponent></TodoRegiserComponent>

</template>

<script setup>

import {useRoute, useRouter} from "vue-router";
import TodoRegiserComponent from "@/components/todo/TodoRegiserComponent.vue";

const route = useRoute()

const router  = useRouter()




</script>

<style scoped>

</style>
