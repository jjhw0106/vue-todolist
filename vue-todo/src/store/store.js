import { createStore } from 'vuex'

const storage = {
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for (let i =0; i<localStorage.length; i++) {
        let selectedItem=JSON.parse(localStorage.getItem(localStorage.key(i)));
        arr.push(selectedItem);
      }
    }
    console.log(this.todoItems);  
    return arr;
  },
}

// Create a new store instance.
export const store = createStore({
  state: {
    headerMsg: 'Do It!',
    todoItems: storage.fetch(),
  },
  mutations: {
    changeHeadMsg(state, payload) {
      state.headerMsg = payload.newMsg;
    },
    addItem(state, payload) {
      const addedItem = {completed: false, item: payload.newOne};
      localStorage.setItem(addedItem.item, JSON.stringify(addedItem));
      state.todoItems.push(addedItem);
    },
    removeItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);  // localStorage에서만 지워지고 화면에 보여주는 todoItems[]에서는 안 지워졌기 때문에 별도로 지워주어야 한다.
    },
    toggleComplete(state, payload) {
      payload.todoItem.completed = !payload.todoItem.completed;
      localStorage.removeItem(payload.todoItem);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearTodos(state) {
      localStorage.clear();
      state.todoItems = [];      
    }
  }
})
