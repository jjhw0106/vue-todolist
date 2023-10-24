<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem" class="shadow">
        <span v-on:click="toggleComplete(todoItem)"><i class="fa-solid fa-check checkBtn"></i></span>
        <span v-bind:class="{textCompleted: todoItem.completed}"> {{ todoItem.item }} </span>
        <!-- <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fa-solid fa-trash"></i></span> -->
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fa-solid fa-trash"></i></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: 
  {
    // removeTodo: function(todoItem, index) {
    //   console.log(todoItem.item);
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);  // localStorage에서만 지워지고 화면에 보여주는 todoItems[]에서는 안 지워졌기 때문에 별도로 지워주어야 한다.
    // },
    removeTodo: function(todoItem, index) {
      console.log("emit!!");
      this.$emit('removeItem', todoItem, index);
    },
    toggleComplete: function(todoItem) {
      localStorage.removeItem(todoItem.item);
      todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>