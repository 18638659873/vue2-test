<template>
  <ul class="todo-main">
    <ActionItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
  </ul>
</template>

<script>
  import ActionItem from "@/components/ActionItem";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'ActionList',
    components: {
      ActionItem
    },
    props: ['todos']

  }
</script>

<style scoped>
  /*main*/

  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>