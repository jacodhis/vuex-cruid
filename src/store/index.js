import {createStore} from 'vuex'

// // main.js
import { createApp } from 'vue'
import store from '@/store' // short for @/store/index
const app = createApp({ /* your root component */ })
app.use(store)

import TodoItems from './modules/todos.js'

const createstore=createStore({
    modules:{
        TodoItems
       }
  })

export default createstore


// import Vue from 'vue';
// import Vuex from 'vuex';
// Vue.use(Vuex);


// import TodoItems from './modules/todos.js'

// const store = new Vuex.Store({
//     modules:{
//     TodoItems
//    }
// })
// export default store;