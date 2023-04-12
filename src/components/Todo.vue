<script setup lang="ts">
import { useStore } from 'vuex'

const props = defineProps<{
  todo: Todo
}>()

const store = useStore()

const checked = computed({
  get: () => props.todo.done,
  set: () => {
    toggleTodo()
  },
})

function toggleTodo() {
  store.dispatch('toggleTodo', props.todo)
}
function removeTodo() {
  store.dispatch('removeTodo', props.todo)
}
</script>

<template>
  <div class="w-100% ui-container flex items-center justify-between gap-4">
    <ui-checkbox v-model="checked" />
    <section class="column gap-2 flex-auto">
      <div class="flex flex-col sm-flex-row justify-between items-center">
        <h3
          class="text-5.fw-700"
          :class="checked ? 'line-through c-gray-300' : ''"
        >
          {{ todo.text }}
        </h3>
      </div>
    </section>
    <ui-delete-icon @click="removeTodo" />
  </div>
</template>
