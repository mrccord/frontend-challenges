import { Dispatch, SetStateAction} from 'react'
import { TTodo } from '../types/todo'
import Todo from './Todo'
import TodoActions from './TodoActions'
import { TodosStatusEnum } from '../enums/todos-status.enum'
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd'
import TodoFooter from './TodoFooter'

type Props = {
  todos: TTodo[]
  markAsCompleted: (id: string) => void
  removeAllCompletedTodos: () => void
  setTodo: Dispatch<SetStateAction<TTodo[]>>
  removeTodo: (id: string) => void
  todosleft: number
  handleFilters: (status: TodosStatusEnum) => void
  filter: TodosStatusEnum
}

export default function TodoList({
  todos = [],
  removeAllCompletedTodos,
  markAsCompleted,
  setTodo,
  removeTodo,
  todosleft,
  handleFilters,
  filter,
}: Props) {

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const items = Array.from(todos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setTodo(items)
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="mt-10 flex min-h-[30rem] max-w-full flex-col rounded-md bg-white text-lt-very-dark-grayish-blue shadow-sm shadow-lt-light-grayish-blue dark:bg-dt-very-dark-desaturated-blue dark:text-dt-light-grayish-blue dark:shadow-lt-very-dark-grayish-blue">
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`${snapshot.isDraggingOver ? '' : ''}`}
              >
                {todos.map((todo, index) => (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    markAsCompleted={markAsCompleted}
                    index={index}
                    removeTodo={removeTodo}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {!todos.length && (
            <span className="mt-auto self-center text-lt-light-grayish-blue dark:text-dt-dark-grayish-blue">
              There are no tasks to display.
            </span>
          )}
          <TodoFooter
            todosleft={todosleft}
            removeAllCompletedTodos={removeAllCompletedTodos}
            handleFilters={handleFilters}
            filter={filter}
          />
        </div>
      </DragDropContext>
      <div className="mx-w-full mt-10 flex h-10 items-center justify-center rounded-md bg-white text-lt-dark-grayish-blue shadow-sm shadow-lt-light-grayish-blue dark:bg-dt-very-dark-desaturated-blue dark:shadow-lt-very-dark-grayish-blue sm:hidden">
        <TodoActions handleFilters={handleFilters} selectedFilter={filter} />
      </div>
      <h2 className="mt-10 self-center text-xs text-lt-dark-grayish-blue dark:text-dt-very-dark-grayish-blue">
        Drag and drop to reorder list
      </h2>
    </>
  )
}
