<template>
  <li>
    <label>
      <!--      <input type="checkbox" :checked="todo.done" @click="handlerCheck(todo.id)">-->
      <input type="checkbox" :checked="todo.done" @change="handlerCheck(todo.id)">
      <!--      可以直接使用 v-model 进行控制这个值的变化，不建议使用 因为v-model会修改，但是porps不让修改，然后这个修改的是他里面的属性值-->
      <!--      <input type="checkbox" v-model="todo.done"/>-->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handlerDelete(todo.id)">删除</button>
  </li>
</template>

<script>

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'ActionItem',
    props: ['todo', 'checkTodo', 'deleteTodo'],
    methods: {
      handlerCheck(id) {
        this.checkTodo(id)
      },
      handlerDelete(id) {
        if (confirm('确定要删除吗？')) {
          console.log(id)
          this.deleteTodo(id)
        }
      }
    }
  }
</script>

<style scoped>
  /*item*/

  li {
    list-style: none;
    line-height: 36px;
    height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #ddd;
  }

  li:hover button {
    display: block;
  }
</style>