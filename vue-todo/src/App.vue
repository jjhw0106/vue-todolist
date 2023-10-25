<template>
<div id="app">
  <todo-header></todo-header>
  <!-- 하위 컴포넌트에서 발생시킨 이벤트 이름="현재컴포넌트의 메서드 명" -->
  <todo-input v-on:addTodoItem="addOneItem"></todo-input>
  <todo-list v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleComplete="toggleItemStatus"></todo-list>
  <todo-footer></todo-footer>
</div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoItem) {
      var obj = {completed: false, item: todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    
    removeOneItem: function(todoItem, index) {
      console.log(todoItem.item, index);
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);  // localStorage에서만 지워지고 화면에 보여주는 todoItems[]에서는 안 지워졌기 때문에 별도로 지워주어야 한다.
    },

    toggleItemStatus: function(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }

    clearAllItems: function(todoItem) {
      localStorage.clear();
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for (var i =0; i<localStorage.length; i++) {
        var selectedItem=JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.todoItems.push(selectedItem);
      }
    }
    console.log(this.todoItems);
  },
  components: { 
    TodoHeader, 
    TodoInput, 
    TodoList, 
    TodoFooter 
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03)
}

</style>