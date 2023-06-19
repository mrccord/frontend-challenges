import { Dispatch, SetStateAction } from 'react'
import { TodosStatusEnum } from '../enums/todos-status.enum'

type Props = {
  todosLeft: number
  setActive: Dispatch<SetStateAction<TodosStatusEnum>>
  active: TodosStatusEnum
  removeAllCompletedTodos: () => void
}

export default function TodoActions({
  todosLeft,
  setActive,
  active,
  removeAllCompletedTodos,
}: Props) {
  const cssClass =
    'cursor-pointer hover:text-lt-very-dark-grayish-blue dark:hover:text-dt-light-grayish-blue-hover'
  const cssColorBase = 'text-gradient-base'
  return (
    <section className="mt-auto flex h-12 w-full items-center justify-between self-end px-4 text-sm text-lt-dark-grayish-blue dark:text-dt-dark-grayish-blue">
      <span>{todosLeft} items left</span>
      <div className="flex gap-5">
        <span
          onClick={() => {
            setActive(TodosStatusEnum.ALL)
          }}
          className={`${
            active === TodosStatusEnum.ALL && cssColorBase
          } ${cssClass}`}
        >
          All
        </span>
        <span
          onClick={() => {
            setActive(TodosStatusEnum.ACTIVE)
          }}
          className={`${
            active === TodosStatusEnum.ACTIVE && cssColorBase
          } ${cssClass}`}
        >
          Active
        </span>
        <span
          onClick={() => {
            setActive(TodosStatusEnum.COMPLETED)
          }}
          className={`${
            active === TodosStatusEnum.COMPLETED && cssColorBase
          } ${cssClass}`}
        >
          Completed
        </span>
      </div>
      <span onClick={removeAllCompletedTodos} className={cssClass}>
        Clear Completed
      </span>
    </section>
  )
}
