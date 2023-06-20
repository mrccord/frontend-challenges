import { Dispatch, SetStateAction } from 'react'
import { TodosStatusEnum } from '../enums/todos-status.enum'

type Props = {
  setActive: Dispatch<SetStateAction<TodosStatusEnum>>
  active: TodosStatusEnum
}

export default function TodoActions({ setActive, active }: Props) {
  const cssClass =
    'cursor-pointer hover:text-lt-very-dark-grayish-blue dark:hover:text-dt-light-grayish-blue-hover'
  const cssColorBase = 'text-gradient-base'
  return (
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
  )
}
