import React from 'react'
import { TTodo } from '../types/todo'
import { Draggable } from 'react-beautiful-dnd'

type Props = {
  todo: TTodo
  markAsCompleted: (id: string) => void
  removeTodo: (id: string) => void
  index: number
}

export default function Todo({
  todo,
  markAsCompleted,
  index,
  removeTodo,
}: Props) {
  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="flex h-12 w-full border-b-[1px] border-lt-very-light-grayish-blue dark:border-dt-very-dark-grayish-blue"
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
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

          <span className="w-2/3 self-center">
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
          <div className="mouse-pointer flex w-1/3 items-center justify-end pr-5">
            <button onClick={() => removeTodo(todo.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                  fill="#494C6B"
                  fill-rule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </Draggable>
  )
}
