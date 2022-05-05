import { configureStore } from "@reduxjs/toolkit";

import stdReducer from "../Reducer/Reducer";


const store = configureStore({
    reducer:{
        studentReducer : stdReducer
    }
})

export default store