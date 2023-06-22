import { TodosStatusEnum } from '../enums/todos-status.enum'

type Props = {
  handleFilters: (status: TodosStatusEnum) => void
  selectedFilter: TodosStatusEnum
}

const filterActions = [
  {
    id: 1,
    name: 'All',
    status: TodosStatusEnum.ALL
  },
  {
    id: 2,
    name: 'Active',
    status: TodosStatusEnum.ACTIVE
  },
  {
    id: 3,
    name: 'Completed',
    status: TodosStatusEnum.COMPLETED
  }
]

export default function TodoActions({  selectedFilter, handleFilters }: Props) {
  return (
    <div className="flex gap-5">
      {
        filterActions.map((action) => (
          <span
            key={action.id}
            onClick={() => {
              handleFilters(action.status)
            }}
            className={`${
              selectedFilter === action.status && 'text-gradient-base'
            } cursor-pointer hover:text-lt-very-dark-grayish-blue dark:hover:text-dt-light-grayish-blue-hover`}
          >
            {action.name}
          </span>
        ))
      }
    </div>
  )
}
