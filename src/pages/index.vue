<script setup lang="ts">
import { useStore } from 'vuex'
import draggable from 'vuedraggable'

defineOptions({
  name: 'IndexPage',
})

const todoText = ref('')
const store = useStore()
const todos = computed({
  get: () => store.state.todos,
  set: (updated) => {
    store.dispatch('updateTodos', updated)
  },
})

function createTodo() {
  if (todoText.value.trim())
    store.dispatch('addTodo', todoText.value)
  todoText.value = ''
}
</script>

<template>
  <div>
    <div i-ri-tornado-line inline-block text-4xl />

    <p>
      Todo App
    </p>

    <UiInput
      v-model="todoText"
      class="mt-4"
      placeholder="New Todo"
      autocomplete="false"
      @keydown.enter="createTodo"
    />

    <div m-auto mt-4 w-50>
      <button class="ui-button" :disabled="!todoText" @click="createTodo">
        Ceate
      </button>
    </div>
    <div v-if="!todos?.length" class="mt-4">
      No Task
    </div>
    <draggable
      v-else
      v-model="todos"
      class="mt-4 column gap-2"
      tag="ul"
    >
      <template #item="{ element: todo }">
        <todo :key="todo.id" :todo="todo" />
      </template>
    </draggable>
  </div>
</template>
