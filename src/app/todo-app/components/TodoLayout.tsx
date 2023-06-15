import { v4 as uuidv4 } from 'uuid'
import { TTodo } from '../types/todo'
import InputTodo from './InputTodo'
import TodoList from './TodoList'
import { useEffect, useState } from 'react'

const baseTodos: TTodo[] = [
  {
    id: uuidv4(),
    title: 'todo 1: do this',
    completed: false,
  },
  {
    id: uuidv4(),
    title: 'todo 2: do this',
    completed: false,
  },
  {
    id: uuidv4(),
    title: 'todo 3: do this',
    completed: false,
  },
  {
    id: uuidv4(),
    title: 'todo 4: do this',
    completed: false,
  },
]

export default function TodoLayout() {
  const [todos, setTodos] = useState<TTodo[]>([])

  useEffect(() => {
    console.log('useEffect')
    setTodos(baseTodos)
  }, [])

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

  console.log('render TodoLayout')
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto mt-40 w-[35rem] self-center text-lt-very-light-gray">
      <h1 className="text-3xl">TODO</h1>
      <InputTodo setTodo={setTodos} />
      <TodoList
        todos={todos}
        markAsCompleted={markAsCompleted}
        removeAllCompletedTodos={removeAllCompletedTodos}
      />
    </div>
  )
}
