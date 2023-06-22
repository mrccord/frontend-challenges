import { TodosStatusEnum } from '../enums/todos-status.enum'
import TodoActions from './TodoActions'

type Props = {
  todosleft: number
  removeAllCompletedTodos: () => void
  handleFilters: (status: TodosStatusEnum) => void,
  filter: TodosStatusEnum
}

export default function TodoFooter({
  todosleft,
  removeAllCompletedTodos,
  filter,
  handleFilters
}: Props) {
  return (
    <section className="mt-auto flex h-12 w-full items-center justify-between self-end px-4 text-sm text-lt-dark-grayish-blue dark:text-dt-dark-grayish-blue">
      <span>{todosleft} items left</span>
      <div className="hidden sm:flex">
        <TodoActions selectedFilter={filter} handleFilters={handleFilters}/>
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
