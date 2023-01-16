<template>
  <h2>Todo Read Component</h2>

  <div>
    {{data}}
  </div>
</template>

<script setup>



import authAxios from "@/util/authAxios";

const props = defineProps(['tno'])

console.log("tno: " + props.tno)

const res = await authAxios.get(`http://localhost:8080/api/todos/${props.tno}`)

const data = res.data

</script>

<style scoped>

</style>
