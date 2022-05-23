import axios from 'axios'

const state = {
    todos:[]
       
};
const getters = {
    allTodos:(state)=>state.todos
};
 const actions = {
     async fetchTodos({commit}){
         const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
         commit('setTodos',response.data) 
     },
     async addTodo({commit},title){
         const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
             title,
             completed:false 
         })
         commit('newTodo',response.data)
     },
     async deleteTodo({commit},id){
         axios.delete('https://jsonplaceholder.typicode.com/todos',+ id);
         commit('removeTodo',id);
     },
     async updateTodos({commit},updatedTodo){
      const response =  await axios.put('https://jsonplaceholder.typicode.com/todos'+ updatedTodo.id,updatedTodo);
       console.log(response.data)
       commit('updatated',response.data)
     },
     async filterTodos({commit}){
      const sel = document.getElementById('mySelected').value
       const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit='+sel)

       commit('setTodos',response.data)
      
    },
 };
 const mutations = {
     setTodos:(state,todos)=>(state.todos = todos),
     newTodo:(state,todo)=>state.todos.unshift(todo),
     removeTodo:(state,id)=>state.todos = state.todos.filter(todo=> todo.id !== id ),
     updatated:(state,updatedTodo)=>{
         const index = state.todos.findIndex(todo=>todo.id == updatedTodo.id)
         if(index != -1){
             state.todos.splice(index,1,updatedTodo)
         }

     }
 };

 export default{
     state,
     getters,
     actions,
     mutations
 }