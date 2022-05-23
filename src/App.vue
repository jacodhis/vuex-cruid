<template>
 <div>
   <AddTodo />
   <FilterTodos />
   <TodoItems/>
 </div>
</template>

<script>


import TodoItems from './components/screens/AllTodos.vue'
import AddTodo from './components/screens/addTodo.vue'
import FilterTodos from './components/filter/filterTodos.vue'
export default {
  name: 'App',
  components: {
   TodoItems,
   AddTodo,
   FilterTodos
  }
}
</script>

<style>

</style>
