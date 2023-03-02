import './App.css';
import TodoLists from './components/TodoLists.js';
import Header from './components/Header.js';
import { createContext, useReducer } from 'react';

//사용할 상태 초기값 설정
//초기상태를 컴포너트 밖에 선언하기
const initialState = {
  input: "",
  todos: [
    {id: 1, text: "해야할 일1", isDone: false},
    {id: 2, text: "해야할 일2", isDone: false},
  ],
  id : 3
}
//reducer 함수 선언
function reducer(state, action){
  switch(action.type){
    case 'changeInput':
      return {
        ...state,
        input: action.payload
      };
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos,action.todo],
        id: state.id+1,
        input: ""
      };
    case 'deleteTodo':
      return {
        ...state,
        todos: state.todos.filter(todo=> todo.id !== action.id)
      };
    case 'toggleTodo':
      return {
        ...state,
        todos: state.todos.map(todo=>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone }
          : todo)
      }
    default:
      return state;
  }
}
export const UserDispatch = createContext(null);
function App() {
  //상태선언하기
  // const [state, dispatch] = useReducer(함수, 초기값);
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { todos, input, id } = state;
  // //input 값 업데이트 요청
  // const onChange = (e) => {
  //   dispatch({
  //     type: 'changeInput',
  //     payload: e.target.value
  //   })
  // }
  // //할일 항목 추가 업데이트 요청
  // const addTodo = () => {
  //   dispatch({
  //     type: "addTodo",
  //     todo: { id: id, text: input, idDone: false }
  //   })
  // }
  // //todo 삭제 업데이트 요청
  // const deleteTodo = (id) => {
  //   dispatch({
  //     type: "deleteTodo",
  //     id: id
  //   })
  // }
  // const toggleTodo = (id) => {
  //   dispatch({
  //     type: "toggleTodo",
  //     id: id
  //   })
  // }
  return (
    <UserDispatch.Provider value={dispatch}>
      <div className="App">
        <Header input={input} id={id} />
        {/* addTodo={addTodo} */}
        <TodoLists todos={todos} />
         {/* TodoLists 태그 안에 있던 toggleTodo={toggleTodo} deleteTodo={deleteTodo}*/} 
      </div>
    </UserDispatch.Provider>
  );
}

export default App;
