<template>
    <div>
        <h3 class="heading">
            Add Todo
        </h3>
        <form @submit.prevent="handleSubmit">
            <div class="input col-md-8 mx-auto d-flex">
              
                 <input type="text" v-model="newTodo" id="input" placeholder="add todo" class="form-control">
                <button type="submit" class="btn btn-primary btn-sm" id="btn">Add A Todo</button>
                
            </div>
        </form>
    </div>
</template>


<script>
import { mapActions } from 'vuex'
export default {
    name:"AddTodo",
    data(){
        return {
            newTodo:''
        }
    },
    methods:{
        ...mapActions(['addTodo']),
        handleSubmit(){
             this.addTodo(this.newTodo)
        }
    }
}
</script>


<style>
.input{
   padding-top: 10px;
     padding-bottom: 10px;
}
.heading{
    text-align: center;
}
.btn{
    max-height: 50px;
}
</style>