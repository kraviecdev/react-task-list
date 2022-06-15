import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTasks: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const taskIndex = tasks.findIndex(({ id }) => id === taskId);
            tasks[taskIndex].done = !tasks[taskIndex].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const taskIndex = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(taskIndex, 1)
        },
        markAllTaskDone: ({ tasks }) => {
            tasks.map(task => task.done = true);
        },
    }
});

export const {
    addTasks,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    markAllTaskDone
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsListEmpty = state => selectTasks(state).length === 0;
export const selectAreAllTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectIsAnyTaskDone = state => selectTasks(state).find(({ done }) => done);

export default tasksSlice.reducer;