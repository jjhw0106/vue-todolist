<template>
  <div>
    <!-- <ul> -->
    <transition-group name='list' tag='ul'>
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem" class="shadow">
        <span v-on:click="toggleComplete({todoItem, index})"><i class="fa-solid fa-check checkBtn"></i></span>
        <span v-bind:class="{textCompleted: todoItem.completed}"> {{ todoItem.item }} </span>
        <!-- <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"><i class="fa-solid fa-trash"></i></span> -->
        <span class="removeBtn" v-on:click="removeItem({todoItem, index})"><i class="fa-solid fa-trash"></i></span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  methods: 
  {
    /* 인자를 안붙여 줘도 템플릿에서 넘기고 있으면 store에서 인자를 받을 수 있다. */
    ...mapMutations([
      'removeItem',
      'toggleComplete'
    ]),

    /* helper함수로 리팩토링 하기 전 코드 */
    // removeTodo(todoItem, index) {
      //   const target = { todoItem, index };
    //   this.$store.commit('removeItem', target)
    // },
    // toggleComplete(todoItem, index) {
      //   // this.$emit('toggleComplete', todoItem, index);
    //   // const target = { todoItem, index }
    //   // this.$store.commit('toggleComplete', target)
    // }
  },
  actions: {
    },
  computed:{
    ...mapGetters(['storedTodoItems'])
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    /* 배열리터럴 */
    // ...mapGetters(['storedTodoItems'])
    
    /* 객체리터럴 */ 
    // getters에서 갖고 있는 이름과 component 파일에서 갖는 이름이 다를 경우 사용
    // ...mapGetters({'storedTodoItems'})
  }
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

/* 리스트 아이템 트랜지션 효과 */
/* .list-item {
  display: inline-block;
  margin-right: 10px;
} */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter-from, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>