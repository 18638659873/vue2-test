<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!--        将一个函数传递给他的子组件-->
        <ActionHeader :addTodo="addTodo"/>
        <!--        将一些同级的子组件的数据提取到app中，然后传递给子组件-->
        <ActionList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <ActionFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearDone="clearDone"/>
      </div>
    </div>
  </div>
</template>

<!--

一个交互的小功能样例
这里安装一个uuid的生成工具
npm i nanoid

-->

<script>
  import ActionHeader from "@/components/ActionHeader";
  import ActionFooter from "@/components/ActionFooter";
  import ActionList from "@/components/ActionList";

  export default {
    name: 'App',
    components: {
      ActionHeader, ActionList, ActionFooter
    },
    data() {
      return {
        todos: [
          {id: '001', title: '抽烟', done: false},
          {id: '002', title: '喝酒', done: true},
          {id: '003', title: '烫头', done: false}
        ]
      }
    },
    methods: {
      // 添加一个行动
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      // 勾选or不勾选 todo 修改数据
      checkTodo(id) {
        this.todos.forEach((tdo) => {
          if (tdo.id === id) {
            tdo.done = !tdo.done
          }
        })
      },
      // 删除某一个
      deleteTodo(id) {
        this.todos = this.todos.filter((tdo) => {
          return tdo.id !== id
        })
      },
      // 全选或者取消全部
      checkAllTodo(flag) {
        this.todos.forEach((todo) => {
          todo.done = flag
        })
      },
      // 清除已完成
      clearDone() {
        this.todos = this.todos.filter((tdo) => {
          return !tdo.done
        })
      }
    }
  }
</script>


<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

</style>