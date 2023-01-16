<template>

  <h1>Todo List Page </h1>

  <router-link to="/todo/register">Register</router-link>


  <div :key="componentKey">
  <Suspense>
    <template #fallback>
      <h1>Loading.............</h1>
    </template>
    <template #default>
      <TodoListComponent :query="query" @movePage="movePage"  @moveRead="moveRead" :key="componentKey"></TodoListComponent>
    </template>
  </Suspense>

  </div>


</template>

<script setup>

import TodoListComponent from "@/components/todo/TodoListComponent.vue";
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";

const route = useRoute()
const router = useRouter()

const query = ref({page: route.query.page || 1, size: route.query.size || 10})

const componentKey = ref(Date.now())

console.log(query)

const movePage = (pageNumber) => {

  query.value.page = pageNumber

  router.push({ name: 'TodoListPage', query: query.value })

  componentKey.value = Date.now()
}

const moveRead = (tno) => {



  router.push({ name: 'TodoReadPage', query: query.value , params:{id:tno} })


}


</script>

<style scoped>

</style>
