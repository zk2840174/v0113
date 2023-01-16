<template>

  <h1>Todo Read Page</h1>

  <Suspense>
    <template #fallback>
      loading.........
    </template>
    <template #default>
      <TodoReadComponent :tno = "id"></TodoReadComponent>
    </template>
  </Suspense>



</template>

<script setup>

import {useRoute, useRouter} from "vue-router";
import TodoReadComponent from "@/components/todo/TodoReadComponent.vue";
import useMemberInfo from "@/store/useMemberInfo";

const route = useRoute()
const router = useRouter()
const {id} = route.params

console.log(id)

const {getInfo} = useMemberInfo()

if(!getInfo()) {

  router.push("/login")

}



</script>

<style scoped>

</style>
