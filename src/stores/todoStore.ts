import { create } from 'zustand';
import { TTodo } from '../types/todo';

type TodoStoreType = {
  todos: TTodo[];
  addTodo: (text:string)=>void;
  toggleTodo: (id:number)=>void;
  deleteTodo: (id:number)=>void;
}

export const useTodoStore = create<TodoStoreType>((set)=>({
  todos: [],
  addTodo: (text:string)=>set((state)=>({
    todos: [...state.todos, {id: Math.random(), text, isCompleted: false}]
  })),
  deleteTodo: (id:number)=>set((state)=>({
    todos: state.todos.filter((todo)=>todo.id !== id)
  })),
  toggleTodo: (id:number)=>set((state)=>({
    todos: state.todos.map((todo) => 
      todo.id === id
      ? { ...todo, isCompleted: !todo.isCompleted}
      : todo)
  })),
}))