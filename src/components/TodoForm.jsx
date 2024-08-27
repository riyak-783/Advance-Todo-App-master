import React, { useRef } from 'react'
import { useTodos } from '../context/TodosContext';
import { MdAddCircle } from 'react-icons/md';
import { LuPlus } from 'react-icons/lu';

function TodoForm() {

    const text = useRef();
    const { addTodo } = useTodos(); 

    const handleAddTodo = (e) => {
        e.preventDefault();
        const newTodo = { id: Date.now(), text: text.current.value , isCompleted: false};
        addTodo(newTodo);
        text.current.value = '';
    };

    return (
        <form onSubmit={handleAddTodo} className='space-x-2 theme-bg-gray p-2 rounded-md px-4  flex w-full mx-auto'>

            <label htmlFor='text' className='self-center'>Add Todo : </label>
            <input ref={text} id='text' className='bg-inherit  border-none outline-none rounded-md px-2 flex-grow' type="text" required placeholder='Todo' />
            <button type='submit' className='theme-bg-i h-8 rounded-xl text-2xl font-semibold px-1'> <LuPlus /> </button>

        </form>
    )
}

export default TodoForm
