import { Dispatch, FormEvent, SetStateAction } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TTodo } from '../types/todo'

type Props = {
  setTodo: Dispatch<SetStateAction<TTodo[]>>
}

export default function InputTodo({ setTodo }: Props) {
  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const elements = e.currentTarget.elements.namedItem(
      'todo',
    ) as HTMLInputElement

    const todo = elements.value
    setTodo((prev) => [
      ...prev,
      { id: uuidv4(), title: todo, completed: false },
    ])
    ;(e.currentTarget.elements.namedItem('todo') as HTMLInputElement).value = ''
  }
  return (
    <form onSubmit={handleSumbit}>
      <div className="mt-10 flex">
        <div className="relative flex w-full flex-row">
          <div className="h-12 w-12 rounded-l-md bg-white dark:bg-dt-very-dark-desaturated-blue">
            <div className="m-3 h-6 w-6 rounded-full border-[1px] border-lt-very-light-grayish-blue dark:border-dt-very-dark-grayish-blue"></div>
          </div>
          <input
            name="todo"
            className="focus:ring-none h-12 w-full rounded-r-md bg-white text-lt-very-dark-grayish-blue focus:border-transparent focus:outline-none focus:ring-0 dark:bg-dt-very-dark-desaturated-blue dark:text-dt-light-grayish-blue"
            placeholder="Write your todo"
          />
        </div>
      </div>
    </form>
  )
}
