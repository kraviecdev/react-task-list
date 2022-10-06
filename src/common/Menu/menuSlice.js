import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        toggleMenu: state => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

export const {
    toggleMenu
} = menuSlice.actions;

const selectMenuState = state => state.theme;

export const selectIsMenuOpen = state => selectMenuState(state).isMenuOpen;

export default menuSlice.reducer;