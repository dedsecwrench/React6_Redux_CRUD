import { createSlice } from "@reduxjs/toolkit";

const stdState = [
    {name:"Harvey",age:24,course:"MERN",batch:"August",id:0},
    {name:"Mike",age:22,course:"MERN",batch:"September",id:1},
    {name:"Ric",age:25,course:"MERN",batch:"October",id:2},
    {name:"Miguel",age:21,course:"MERN",batch:"November",id:3},
    {name:"Hawk",age:23,course:"MERN",batch:"December",id:4}
]

const stdSlice = createSlice({
    name: "student",

    initialState:{
        stdState,
        count:4
    },
    
    reducers : {
        add:(state,action)=>{
            state.count = state.count + 1
            let item = {...action.payload,id:state.count}
            state.stdState.push(item)
            // console.log(item);
        },
        edit:(state,action)=>{
            let item = action.payload
            let id = item.id
            state.stdState[id] = item
        },
        del:(state,action)=>{
            state.stdState.splice(action.payload,1);
        }
    }
})


export const { add,edit,del } = stdSlice.actions;
export default stdSlice.reducer;
