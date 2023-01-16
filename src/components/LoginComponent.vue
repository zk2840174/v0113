<template>
  <h2>Login Component</h2>

  <v-btn @click="handleClickGenerate" >Generate Key </v-btn>

</template>

<script setup>


import axios from "axios";

const handleClickGenerate = async () => {

  const loginData = {mid:'user', mpw:'1111'}


  const res = await axios.post('http://localhost:8080/api/member/generate' , loginData)


  const data = res.data


  localStorage.setItem("access", data.access)
  localStorage.setItem("refresh", data.refresh)

  localStorage.setItem("mid", data.mid)


  console.log(data)

}




</script>

<style scoped>

</style>
