<template>

  <h1>Todo Regiser Component</h1>

  <v-btn @click="handleClickRegister" >Regiser</v-btn>

</template>

<script setup>

import {ref} from "vue";

const todo = ref({title:'AAA', writer:'user00', dueDate:'2023-01-22'})


const handleClickRegister = () => {




}

</script>

<style scoped>

</style>
