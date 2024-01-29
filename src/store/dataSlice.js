import {createSlice} from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "SearchBar",
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        searchData: (state, action) =>{
            state.data = state.data.filter((user) =>
            {user.name.includes(action.payload)}
            )
        }
    }
})

export const { setData, searchData } =  dataSlice.actions;
export default dataSlice.reducer;