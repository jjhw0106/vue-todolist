// import { createStore } from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'

// const storage = {
//   fetch() {
//     const arr = [];
//     if(localStorage.length > 0) {
//       for (let i =0; i<localStorage.length; i++) {
//         let selectedItem=JSON.parse(localStorage.getItem(localStorage.key(i)));
//         arr.push(selectedItem);
//       }
//     }
//     return arr;  
//   },
// }

// // Create a new store instance.
// export const store = createStore({
//   state: {
//     headerMsg: 'Do It!',
//     todoItems: storage.fetch(),
//   },
//   getters,
//   mutations
//   // getters: {
//   //   storedTodoItems(state) {
//   //     return state.todoItems;
//   //   }
//   // },
//   // mutations: {
//   //   changeHeadMsg(state, payload) {
//   //     state.headerMsg = payload.newMsg;
//   //   },
//   //   addTodo(state, payload) {
//   //     console.log("Add!",payload);
//   //     const addedItem = {completed: false, item: payload};
//   //     localStorage.setItem(addedItem.item, JSON.stringify(addedItem));
//   //     state.todoItems.push(addedItem);
//   //     payload='';
//   //   },
//   //   removeItem(state, payload) {
//   //     console.log(payload);
//   //     localStorage.removeItem(payload.todoItem.item);
//   //     state.todoItems.splice(payload.index, 1);  // localStorage에서만 지워지고 화면에 보여주는 todoItems[]에서는 안 지워졌기 때문에 별도로 지워주어야 한다.
//   //   },
//   //   toggleComplete(state, payload) {
//   //     payload.todoItem.completed = !payload.todoItem.completed;
//   //     localStorage.removeItem(payload.todoItem);
//   //     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
//   //   },
//   //   clearTodos(state) {
//   //     localStorage.clear();
//   //     state.todoItems = [];      
//   //   }
//   // },
// })
