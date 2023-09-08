import { Dispatch, createContext, useContext } from "react";

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export enum TodoActionType {
  AddTodo = 'ADD_TODO',
  RemoveTodo = 'REMOVE_TODO',
  RemoveAllCompletedTodos = 'REMOVE_ALL_COMPLETED_TODOS',
  CompleteTodo = 'COMPLETE_TODO',
  Reorder = 'REORDER',
}

export type TodoAction =
  | { type: TodoActionType.AddTodo; payload: ITodo }
  | { type: TodoActionType.RemoveTodo; payload: string }
  | { type: TodoActionType.RemoveAllCompletedTodos }
  | { type: TodoActionType.CompleteTodo; payload: string }
  | { type: TodoActionType.Reorder; payload: { src: number; dest: number } };

export interface TodoState {
  todos: ITodo[]
}

export interface TodoContextType {
  state: TodoState,
  dispatch: Dispatch<TodoAction>
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined)

export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext)

  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider')
  }

  return context
}