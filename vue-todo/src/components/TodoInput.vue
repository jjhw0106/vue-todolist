<template>
  <div class="inputBox shadow">
    <input type="text" v-model="inputValue" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus" ></i>
    </span>
    
    <Modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>경고!! <i class="fa-regular fa-circle-xmark modalCloseBtn" @click="showModal = false"></i> </h3>
        
      </template>
      <template v-slot:body>
        입력창이 비어있습니다.
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/AlertModal.vue';

export default {
  data() {
    return {
      inputValue: '',
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      if (this.inputValue!=='') {
        this.$store.commit('addItem', {newOne: this.inputValue});
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.inputValue = '';
    }
  },
  components: {
    Modal: Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.modalCloseBtn {
  color: #42b983;
}
</style>