<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col bg-brown px-16 pb-10 rounded-xl">
      <div class="flex justify-center items-center">
        <h1 class="font-semibold text-4xl text-white my-5">To Do App</h1>
      </div>
    
      <div class="flex justify-center items-center">
        <input type="text" @keyup.enter="handleSubmit" class="pr-16 rounded-sm focus:ring focus:ring-salmon" placeholder="Type here..." v-model="new_todo">
        <button @click="submit" class="ml-3 rounded-lg transition ease-in duration-100 transform hover:scale-110 "><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
          </svg>
        </button>

        
      </div>

      <br>

      <div class="flex transition-all ease-out duration-500 " v-if="todos.length == 0">
        <p>There is nothing here, add something!</p>
      </div>

      <div v-else class="flex flex-col items-center bg-box rounded-xl my-1 p-1" v-for="(todo, index) in todos" :key="index">
        <div :class="[todo.status, todo.hidden]" class="grid grid-cols-3 grid-flow-row justify-items-center content-center">

          <div class="mt-1 font-semibold"> {{todo.name}} </div>
          <div class="mt-1 font-semibold"> {{todo.type}} </div>
          <div class="flex items-center justify-around justify-self-end">
            <button @click="done(index)" class=""><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </button>
            <button @click="remove(index)" class=""><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
            </button>
          </div>
          
          
        </div>

      
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      todos: [
        
      ],
      new_todo: "",
    }
  },
  methods: {
    submit() {
      if (this.new_todo == ""){ return }
      if( this.todos.length >= 15) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Too many lists! ',
          footer: '<a href="#">Tips: Clear some of them!</a>'
        })
      } else {
        this.todos.push({
        name: this.new_todo,
        type: "TODO",
        status: '',
        hidden: ''
      });

      this.new_todo = ""
      }

    
    },

    remove(index) {
      this.todos.splice(index, 1)
    },

    done(index) {
      this.todos[index].status = 'line-through'
      this.todos[index].type = 'DONE'
      setTimeout(() => {  this.todos.splice(index, 1) }, 2000);
    },
    
    handleSubmit(e) {
      e.preventDefault()
      if (this.new_todo == ""){ return }
      if( this.todos.length >= 15) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Too many lists! ',
          footer: '<a href="#">Tips: Clear some of them!</a>'
        })
      } else {
        this.todos.push({
        name: this.new_todo,
        type: "TODO",
        status: '',
        hidden: ''
      });

      this.new_todo = ""
      }

    }
  },
}
</script>

<style>
  .content-center{
    align-content: center;
  }
</style>