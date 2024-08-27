import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

export const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {

    const [todos, setTodos] = useState([]);
    const auth = useAuth()

    const initializeTodos = () => {
        const storedTodos = localStorage.getItem('todos');
        if (auth?.user?.isLoggedin && storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    };

    useEffect(() => {
        initializeTodos();
    }, [auth]);

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const updateTodo = (id, updatedFields) => {
        const updatedTodos = todos.map(todo => 
            todo.id === id ? { ...todo, ...updatedFields } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };


    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo}}>
            {children}
        </TodoContext.Provider>
    );
};
