import { createSlice } from "@reduxjs/toolkit";

 const searchSlice= createSlice({
    name:"search",
    initialState: {},
    reducers: {
        cacheResults: (state,action)=>{
            state= Object.assign(state,action.payload);
            // const a = {...action.payload};
            // state= {...state, a};
        },
    },
 });
export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
 /**
  * caching concept:;::
  * 
  * time complexity for search in array: O(n)
  * time complexity for search in Object/Map/HasMap: O(1)
  * 
  * 
  * new Map(); --> this is even more optimized
  */