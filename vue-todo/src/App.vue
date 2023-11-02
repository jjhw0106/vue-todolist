<template>
<div id="app">
  <todo-header></todo-header>
  <!-- 하위 컴포넌트에서 발생시킨 이벤트 이름="현재컴포넌트의 메서드 명" -->
  <todo-input></todo-input>
  <todo-list></todo-list>
  <todo-footer></todo-footer>
</div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  // data: function() {
  //   return {
  //     todoItems: []
  //   }
  // },
  /* 
  
  아래의 methods는 App.vue가 아닌 각각의 컴포넌트의 methods에 구현하자
  methods: {
    addOneItem(todoItem) {
      const obj = {completed: false, item: todoItem}
      this.$store.commit('addOneItem', {newOne: obj});
    },
    
    removeOneItem(todoItem, index) {
      this.$store.commit('removeOneItem', {todoItem: todoItem, index: index})
    },

    toggleItemStatus(todoItem, index) {
      this.$store.commit('toggleItemStatus', {todoItem: todoItem, index: index})
    },

    clearAllItems() {
      this.$store.commit('clearAllItems');
      
    },
  },
  created() {
    if(localStorage.length > 0) {
      for (let i =0; i<localStorage.length; i++) {
        let selectedItem=JSON.parse(localStorage.getItem(localStorage.key(i)));
        this.todoItems.push(selectedItem);
      }
    }
    console.log(this.todoItems);  
  }, 
  
  */
  components: {
    // TodoHeader: TodoHeader 
    // ES6 적용 =>
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