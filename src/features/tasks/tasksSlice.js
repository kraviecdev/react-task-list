import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTasks: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const taskIndex = tasks.findIndex(({ id }) => id === payload);
            tasks[taskIndex].done = !tasks[taskIndex].done;
        },
        removeTask: ({ tasks }, { payload }) => {
            const taskIndex = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(taskIndex, 1)
        },
        markAllTaskDone: ({ tasks }) => {
            tasks.map(task => task.done = true);
        },
    }
});

export const { addTasks, toggleHideDone, toggleTaskDone, removeTask, markAllTaskDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;