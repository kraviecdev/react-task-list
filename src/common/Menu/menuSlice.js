import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        toggleMenuState: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    }
});

export const { toggleMenuState } = menuSlice.actions;
const selectMenuState = state => state.menu;

export const selectIsMenuOpen = state => selectMenuState(state).isMenuOpen;

export default menuSlice.reducer;