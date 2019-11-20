import React, { useState, useEffect, useReducer} from 'react';
import FormEditor from './formEditor';
import TodoList from './todolist';
import Modal from './Modal';
import shortid from 'shortid';


const ActionType = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  FETCH_TODOS: 'FETCH_TODOS',
};

export const todosReducer = (state,  { type, payload }) =>{
  switch (type) {
    case ActionType.FETCH_TODOS:
      return payload.todos;

    case ActionType.ADD_TODO:
      return [...state, payload.todo];

    case ActionType.DELETE_TODO:
      return state.filter(todo => todo.id !== payload.id);

    default:
      return state;
  }
};

const TodoBlock = (props) => {

  // useEffect - Замена componentDidMount(), ксли с завсимостями то замена componentDidUpdate()
  // 2 параметром принимает масиф зависимостей, при изменении которых он опять вызывается
  // можно делать асинхронку
  // если хотим чтоб useEffect отработал при первом маунте передаем пустой массиф [] в зависимости

  /*
   * TODOS
   */
  // const [todoList, setTodoList] = useState([]);
  //
  // const addTodo = (text) => {
  //   const todo = {
  //     id: shortid.generate(),
  //     text,
  //   };
  //
  //   setTodoList(prevState => [...prevState, todo]);
  // };
  //
  // const handleDeleteTodo = (id) => {
  //   setTodoList(prevState => prevState.filter(item => item.id !== id));
  // };

  const [todos, dispatch] = useReducer(todosReducer, []);
  console.log(todos);

  const addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
    };

    dispatch({
      type: ActionType.ADD_TODO,
      payload: { todo },
    });
  };

  const handleDeleteTodo = id => {
    dispatch({
      type: ActionType.DELETE_TODO,
      payload: { id },
    });
  };


  useEffect(() => {
    const persistedTodos = localStorage.getItem('todos');
    if (persistedTodos) {
      // setTodos(JSON.parse(persistedTodos));
      const todos = JSON.parse(persistedTodos);

      dispatch({
        type: ActionType.FETCH_TODOS,
        payload: { todos },
      });
    }
  }, []);

  // "Как будто аналог" didUpdate с проверкой todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  /*
 * MODAL
 */
  const [isOpenModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!isOpenModal)
  };

  return (
    <div>
      <button onClick={toggleModal}>OPEN MODAL</button>

      <FormEditor onSubmitForm={addTodo}/>
      {todos.length > 0 && (
        <TodoList deleteTodo={handleDeleteTodo} items={todos}/>
      )}

      {isOpenModal && (
        <Modal onClose={toggleModal}/>
      )}

    </div>
  );
};

export default TodoBlock;