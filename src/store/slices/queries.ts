import { createSlice } from "@reduxjs/toolkit";
import type { Responses } from "../../services/productsApi";

const initialState: Responses = {
    skip: 0,
    limit: 21,
    sortBy: "id",
    order: "asc",
    search: "",
    page: 1
}
const querySlice = createSlice({
    name: "queries",
    initialState: initialState,
    reducers: {
        changeSkip: (state, action) => {
            state.skip = action.payload
        },
        changeLimit: (state, action) => {
            state.limit = action.payload
        },
        changeSortBy: (state, action) => {
            state.sortBy = action.payload
        },
        changeOrder: (state, action) => {
            state.order = action.payload
        },
        changeSearch: (state, action) => {
            state.search = action.payload
        },
        changePage: (state, action) => {
            state.page = action.payload;
            changeSkip(state.limit * (state.page - 1));
        }
    }
});

export const {changeSkip, changeLimit, changeSortBy, changeOrder, changeSearch, changePage} = querySlice.actions;
export default querySlice.reducer;