import React, { useRef, useState } from 'react'
import { useTodos } from '../context/TodosContext';
import { FaCheckCircle, FaCircle } from 'react-icons/fa';
import { RiEdit2Fill, RiRefreshFill } from 'react-icons/ri';
import { MdCancel, MdDelete } from 'react-icons/md';

function Todo({ todo }) {

  const { deleteTodo, updateTodo } = useTodos();

  const [isEditing, setIsEditing] = useState(false);
  const textInputRef = useRef();

  const handleCheckboxChange = () => {
    updateTodo(todo.id, { isCompleted: !todo.isCompleted });
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => textInputRef.current.focus(), 0);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const newText = textInputRef.current.value;
      updateTodo(todo.id, { text: newText });
      setIsEditing(false);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  return (
    <>
      <div className='flex  select-none items-center justify-between p-2 theme-bg-gray bg-opacity-50 rounded-md'>
        <div className='flex items-center flex-grow '>

          <button onClick={handleCheckboxChange} disabled={isEditing}
            className='mx-2 text-2xl disabled:opacity-40  p-1 cursor-pointer bg-none'>
            {todo?.isCompleted ? <FaCheckCircle /> : <FaCircle />}
          </button>
          {isEditing ? (
            <input
              type="text"
              defaultValue={todo.text}
              ref={textInputRef}
              onKeyDown={handleKeyPress}
              className='outline-none text-lg w-full bg-inherit  rounded '
            />
          ) : (
            <>
              <span className={`text-lg  ${todo?.isCompleted && 'line-through text-zinc-500'}`}>
                {todo?.text}
              </span>
            </>
          )}
        </div>
        <div className='space-x-3 *:px-1 text-xl '>
          {!isEditing &&
            <>
              <button
                onClick={handleEdit}
              >
                <RiEdit2Fill />
              </button>
              <button
                onClick={handleDelete}
              >
                <MdDelete />
              </button>
            </> 
          }
        </div>
      </div>

    </>
  )
}

export default Todo
