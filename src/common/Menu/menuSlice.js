import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleMenu: state => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const {
    toggleMenu
} = menuSlice.actions;

const selectMenuState = state => state.theme;

export const selectIsOpen = state => selectMenuState(state).isOpen;

export default menuSlice.reducer;