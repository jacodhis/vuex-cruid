<template>
    <div class="">
      
    <div class=" row">
     
     <div class="legend">
         <span>
             <span class="incomplete-box"></span> =Incomplete
         </span>
          <span>
             <span class="complete-box"></span> =Complete
         </span>
     </div>
            <div class="col-md-4" @Dblclick="onDblclick(todo)"  v-for="todo in allTodos" :key="todo.id" v-bind:class="{'is_complete':todo.completed}">
              <div class="card">
                {{todo.title}}
                <a href="javascript:void(0)" @click="handleDelete(todo.id)">Delete A Todo</a>
                
            </div>
       </div>
    </div>
        
    </div>
</template>

<script>
 
import {mapGetters,mapActions} from 'vuex'
export default {
   data(){
       return{
          
         
       }
   },
   methods:{
       ...mapActions(['fetchTodos','deleteTodo','updateTodos']),
       onDblclick(todo){
     
           const updateTodo = {
               id:todo.id,
               title:todo.title,
               completed: !todo.completed
           }
           this.updateTodos(updateTodo)
       },

       handleDelete(id){
          this.deleteTodo(id)
       }
      
   },
   computed:mapGetters(['allTodos']),
   created(){
       this.fetchTodos();
   }
   

}
</script>

<style scoped>
.card{
    padding:20px;
    /* background-color: rgb(86, 156, 86); */
    margin: 5px;
}
.incomplete-box{
    display:inline-block;
    width:10px;
    height:10px;
    background: blue;
    
}
.complete-box{
    display:inline-block;
    width:10px;
    height:10px;
    background: red;
    
}
.is_complete{
   
    color: red;
}
</style>
