import React from 'react'
import { TTodo } from '../types/todo'

type Props = {
  todo: TTodo
  markAsCompleted: (id: string) => void
}

export default function Todo({ todo, markAsCompleted }: Props) {
  return (
    <div className="flex h-12 w-full border-b-[1px] border-lt-very-light-grayish-blue dark:border-dt-very-dark-grayish-blue">
      <div className="h-12 w-12 rounded-l-md">
        <div className="hover:via-gradient-from m-3 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-lt-very-light-grayish-blue hover:bg-gradient-to-tl hover:from-todo-gradient-from hover:to-todo-gradient-to dark:bg-dt-very-dark-grayish-blue">
          <button
            onClick={() => markAsCompleted(todo.id)}
            className={`flex h-6 w-6 items-center justify-center rounded-full ${
              todo.completed
                ? 'bg-gradient-to-tl from-todo-gradient-from to-todo-gradient-to'
                : 'bg-lt-very-light-gray dark:bg-dt-very-dark-desaturated-blue'
            }`}
          >
            {todo.completed && (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M1 4.304L3.696 7l6-6"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <span className="self-center">
        {todo.completed ? (
          <del className="text-lt-light-grayish-blue dark:text-dt-dark-grayish-blue">
            {todo.title}
          </del>
        ) : (
          <span className="text-lt-very-dark-grayish-blue dark:text-dt-light-grayish-blue">
            {todo.title}
          </span>
        )}
      </span>
    </div>
  )
}
