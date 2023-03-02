import React, { useContext } from 'react';
import { UserDispatch } from '../App';
import { MdDone, MdDelete } from 'react-icons/md';

const TodoLists = ({todos}) => {
    // , toggleTodo, deleteTodo
    const dispatch = useContext(UserDispatch);
    return (
        <div>
            <ul>
                {todos.map(todo=><li key={todo.id} style={{color: todo.isDone ? '#ddd' : '#333'}}>
                    <MdDone></MdDone><span onClick={()=>{
                    dispatch({type: 'toggleTodo', id: todo.id})
                }}>{todo.text}</span>
                {/* toggleTodo */}
                <button onClick={()=>{
                    dispatch({type: 'deleteTodo', id: todo.id})
                }}><MdDelete></MdDelete></button></li>)}
                {/* deleteTodo(todo.id) */}
            </ul>
        </div>
    );
};

export default TodoLists;