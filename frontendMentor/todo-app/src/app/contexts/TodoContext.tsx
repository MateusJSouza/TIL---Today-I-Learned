import { ReactNode, useReducer } from "react"
import { TodoAction, TodoActionType, TodoContext, TodoState } from "../types";

interface TodoProviderProps {
  children: ReactNode
}

const initialState: TodoState = {
  todos: []
}

const todoReducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionType.AddTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case TodoActionType.RemoveTodo:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      }
    case TodoActionType.RemoveAllCompletedTodos:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      }
    case TodoActionType.CompleteTodo:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: true } : todo
        )
      }
    case TodoActionType.Reorder:
      const { src, dest } = action.payload;
      const todos = [...state.todos];
      const [removed] = todos.splice(src, 1);
      todos.splice(dest, 0, removed);
      return {
        ...state,
        todos,
      }
    default:
      return state;
  }
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
};