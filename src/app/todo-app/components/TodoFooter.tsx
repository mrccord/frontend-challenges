import React, { Dispatch, SetStateAction } from 'react'
import { TodosStatusEnum } from '../enums/todos-status.enum'
import TodoActions from './TodoActions'

type Props = {
  todosleft: number
  removeAllCompletedTodos: () => void
  setActive: Dispatch<SetStateAction<TodosStatusEnum>>
  active: TodosStatusEnum
}

export default function TodoFooter({
  todosleft,
  removeAllCompletedTodos,
  setActive,
  active,
}: Props) {
  return (
    <section className="mt-auto flex h-12 w-full items-center justify-between self-end px-4 text-sm text-lt-dark-grayish-blue dark:text-dt-dark-grayish-blue">
      <span>{todosleft} items left</span>
      <div className="hidden sm:flex">
        <TodoActions setActive={setActive} active={active} />
      </div>
      <span
        onClick={removeAllCompletedTodos}
        className="cursor-pointer hover:text-lt-very-dark-grayish-blue dark:hover:text-dt-light-grayish-blue-hover"
      >
        Clear Completed
      </span>
    </section>
  )
}
