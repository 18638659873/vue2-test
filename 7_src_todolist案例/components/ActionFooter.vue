<template>
  <div class="todo-footer" v-show="todos.length">
    <label>
      <!--      <input type="checkbox" :checked="isAll" @change="checkAll">-->
      <!--      也可以通过计算属性的方式，将上面的两个方法合并-->
      <input type="checkbox" v-model="isAll">
      <span>
        <span>已完成{{doneTotal}}</span> / 全部{{todos.length}}
      </span>
      <button class="btn btn-danger" @click="deleteDone">清除已完成任务</button>
    </label>
  </div>
</template>

<script>

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'ActionFooter',
    props: ['todos', 'checkAllTodo', 'clearDone'],
    computed: {
      doneTotal() {
        return this.todos.reduce((preVal, currentObj) => {
          return preVal + (currentObj.done ? 1 : 0)
        }, 0)
      },
      isAll: {
        get() {
          return this.todos.length == this.doneTotal && this.todos.length > 0
        },
        set(val) {
          this.checkAllTodo(val)
        }
      }
    },
    methods: {
      checkAll(e) {
        this.checkAllTodo(e.target.checked)
      },
      deleteDone() {
        this.clearDone()
      }
    }
  }
</script>

<style scoped>
  /*footer*/

  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>