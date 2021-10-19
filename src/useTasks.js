import { useState, useEffect } from "react";

export const useTasks = () => {

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("storedTasks")) || []);

    useEffect(() => {
        localStorage.setItem("storedTasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleDoneTask = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }

            return task;
        }));
    };

    const markAllTaskDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (newTaskContent) => {
        if (newTaskContent === "") {
            return;
        }
        return (
            setTasks(tasks => ([
                ...tasks,
                {
                    content: newTaskContent,
                    done: false,
                    id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                },
            ]))
        );
    };

    return {
        tasks,
        addNewTask,
        removeTask,
        markAllTaskDone,
        toggleDoneTask,
    }
};