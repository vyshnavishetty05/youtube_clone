import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name:'chat',
    initialState: {
        messages:[],
    },
    reducers: {
        addMessage: (state, action)=>{
            //below line removes a first message after 10th msg adds up to the array, WE ARE DOING THIS TO PREVENT HANGINGN OF PAGE BY OVERLOADING DOM
            state.messages.splice(OFFSET_LIVE_CHAT,1);
            state.messages.unshift(action.payload);
            //unshift is used to add at first unlike push which appends at last
        }
    },
});
export const {addMessage}= chatSlice.actions;
export default chatSlice.reducer;