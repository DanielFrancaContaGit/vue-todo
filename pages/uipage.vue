<script setup>
  const value = ref('')
  const selected = ref(true)
  let id = 0
  const todoList = ref([
    {id: id++, value: 'maçam'}, 
    {id: id++, value: 'banana'}
  ])
  const newTodo = ref('')
  function addTodo() {
    todoList.value.push({id: id++, value: value.value})
    value.value = ''
  }

  function removeTodo(todo) {
    todoList.value = todoList.value.filter((t) => t !== todo)
  }
</script>

<template>
  <div id="flexcon">
    <div id="container">
      <h2>Todo List</h2>
      <div  id="inputcase">
        <UInput v-model="value" id='inp'/>
        <UButton @click="addTodo" id="btn">Adicionar ao todo</UButton>
      </div>
      <ul>
        <li v-for="todo in todoList" :key="todo.id">
          <UCheckbox  name="notifications" />
          <p>{{ todo.value }}</p>
          <UButton @click="removeTodo(todo)" color="black" variant="solid" size="2xs" icon="i-heroicons-x-mark-20-solid"/>
        </li>
      </ul>
    </div>
  </div>
</template>