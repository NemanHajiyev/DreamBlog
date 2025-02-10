import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
    detail: [],
    category: [],
    search: "",
    searched: [],
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        addData: (state, action) => {
            state.blogs = action.payload;
        },
        blogDetail: (state, action) => {
            const detailBlogs = state.blogs.filter((item) => item.id === action.payload);
            console.log(detailBlogs)
            state.detail = detailBlogs;
        },
        categorySelect: (state, action) => {
            const categoryBlogs = state.blogs.filter((item) => item.category === action.payload);
            state.category = categoryBlogs;
        },
        searchBlog: (state, action) => {
            state.search = action.payload;
            state.searched = state.blogs.filter((item) => item.title.toLowerCase().includes(state.search.toLowerCase()))
        }
    }
})

export const { addData, blogDetail, categorySelect, searchBlog } = blogSlice.actions;
export default blogSlice.reducer;
