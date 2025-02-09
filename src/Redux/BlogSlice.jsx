import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: []
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        addData: (state, action) => {
            state.blogs = action.payload;
        }
    }
})

export const { addData } = blogSlice.actions;
export default blogSlice.reducer;
