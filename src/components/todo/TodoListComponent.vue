<template>

  <ul>
    <li v-for="todo in data.dtoList" :key="todo.tno" @click="() => emits('moveRead', todo.tno)">
      {{todo.tno}} - {{todo.title}}
    </li>
  </ul>


  <ul class="pageUL">
    <li v-for="pg in data.pageNumList" :key="pg"  @click="() => emits('movePage',pg)">
      <v-btn>{{pg}}</v-btn>
    </li>
  </ul>


</template>

<script setup>

import axios from "axios";
import {toRefs} from "vue";

const props = defineProps(['query'])
const emits = defineEmits(['movePage', 'moveRead'])


console.log(props.query)

const res = await axios.get(`http://localhost:8080/api/todos/list?page=${props.query.page}&size=${props.query.size}`)

const data = await res.data

</script>

<style scoped>

.pageUL {
  list-style: none;
  display: flex;

}

.pageUL li {
  margin-left: 0.3em;
}

</style>
