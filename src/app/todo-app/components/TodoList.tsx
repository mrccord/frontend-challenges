import { useEffect, useState } from 'react'
import { TTodo } from '../types/todo'
import Todo from './Todo'
import TodoActions from './TodoActions'
import { TodosStatusEnum } from '../enums/todos-status.enum'

type Props = {
  todos: TTodo[]
  markAsCompleted: (id: string) => void
  removeAllCompletedTodos: () => void
}

export default function TodoList({
  todos = [],
  removeAllCompletedTodos,
  markAsCompleted,
}: Props) {
  const [filteredTodos, setFilteredTodos] = useState<TTodo[]>(todos)
  const [active, setActive] = useState<TodosStatusEnum>(TodosStatusEnum.ALL)

  const todosleft = todos.filter((todo) => !todo.completed).length

  useEffect(() => {
    if (active === TodosStatusEnum.ALL) {
      setFilteredTodos(todos)
    } else if (active === TodosStatusEnum.ACTIVE) {
      setFilteredTodos(todos.filter((todo) => !todo.completed))
    } else if (active === TodosStatusEnum.COMPLETED) {
      setFilteredTodos(todos.filter((todo) => todo.completed))
    }
  }, [todos, active])

  return (
    <div
      className={`${
        !todos.length ? 'flex h-80 justify-center' : 'relative'
      } mt-10 max-w-full rounded-md bg-white text-lt-very-dark-grayish-blue shadow-sm shadow-lt-light-grayish-blue dark:bg-dt-very-dark-desaturated-blue dark:text-dt-light-grayish-blue dark:shadow-lt-very-dark-grayish-blue`}
    >
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} markAsCompleted={markAsCompleted} />
      ))}
      {!todos.length ? (
        <span className="self-center text-lt-light-grayish-blue dark:text-dt-dark-grayish-blue">
          There are no tasks to display.
        </span>
      ) : (
        <TodoActions
          todosLeft={todosleft}
          setActive={setActive}
          active={active}
          removeAllCompletedTodos={removeAllCompletedTodos}
        />
      )}
    </div>
  )
}
