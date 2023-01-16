<template>

  <h1>Todo Regiser Component</h1>

  <v-btn @click="handleClickRegister" >Regiser</v-btn>

</template>

<script setup>

import {ref} from "vue";
import axios from "axios";

const todo = ref({title:'AAA', writer:'user00', dueDate:'2023-01-22'})


const handleClickRegister = async () => {

  await axios.post('http://localhost:8080/api/todos/', todo.value ).then(res => {

    console.log(res.data)

    alert("AAAA")

  })

}

</script>

<style scoped>

</style>
