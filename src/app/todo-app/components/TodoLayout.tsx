import { TTodo } from '../types/todo'
import InputTodo from './InputTodo'
import TodoList from './TodoList'
import { useState } from 'react'

export default function TodoLayout() {
  const [todos, setTodos] = useState<TTodo[]>([])

  const markAsCompleted = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      }),
    )
  }

  const removeAllCompletedTodos = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className="-mt-52 flex w-80 flex-col self-center text-lt-very-light-gray sm:w-[35rem]">
      <h1 className="text-3xl">TODO</h1>
      <InputTodo setTodo={setTodos} />
      <TodoList
        todos={todos}
        markAsCompleted={markAsCompleted}
        removeAllCompletedTodos={removeAllCompletedTodos}
        setTodo={setTodos}
        removeTodo={removeTodo}
      />
    </div>
  )
}
