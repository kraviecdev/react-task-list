import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        newTaskContent: "",
    },
    reducers: {
        addQucikTask: ({ tasks }, { payload: task }) => {
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
        handleNewTaskContent: (state, action) => {
            state.newTaskContent = action.payload;
        },
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    }
});

export const {
    addQucikTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    markAllTaskDone,
    handleNewTaskContent,
    fetchExampleTasks,
    setTasks,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectNewTaskContent = state => selectTasksState(state).newTaskContent;
export const selectIsListEmpty = state => selectTasks(state).length === 0;
export const selectAreAllTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectIsAnyTaskDone = state => selectTasks(state).find(({ done }) => done);

export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);

export default tasksSlice.reducer;