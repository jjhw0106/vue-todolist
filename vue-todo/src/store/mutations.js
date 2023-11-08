// const changeHeadMsg = (state, payload) => {
//   state.headerMsg = payload.newMsg;
// }

// const addTodo = (state, payload) => {
//   console.log("Add!",payload);
//   const addedItem = {completed: false, item: payload};
//   localStorage.setItem(addedItem.item, JSON.stringify(addedItem));
//   state.todoItems.push(addedItem);
//   payload='';
// }

// const removeItem = (state, payload) => {
//   console.log(payload);
//   localStorage.removeItem(payload.todoItem.item);
//   state.todoItems.splice(payload.index, 1);  // localStorage에서만 지워지고 화면에 보여주는 todoItems[]에서는 안 지워졌기 때문에 별도로 지워주어야 한다.
// }

// const toggleComplete = (state, payload) => {
//   payload.todoItem.completed = !payload.todoItem.completed;
//   localStorage.removeItem(payload.todoItem);
//   localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
// }

// const clearTodos = (state) => {
//   localStorage.clear();
//   state.todoItems = [];      
// }

// export { changeHeadMsg, addTodo, removeItem, toggleComplete, clearTodos }