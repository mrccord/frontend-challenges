'use client'
type Props = {
  children?: React.ReactNode
}

export default function Background({ children }: Props) {
  return (
    <div className="h-full w-full bg-lt-very-light-gray bg-cover dark:bg-dt-very-dark-blue">
      <div className="h-72 w-full bg-todo_app_bg_light bg-cover dark:bg-todo_app_bg_dark">
        {children}
      </div>
    </div>
  )
}
