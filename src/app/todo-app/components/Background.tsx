'use client'
type Props = {
  children?: React.ReactNode
}

export default function Background({ children }: Props) {
  return (
    <div className="flex h-full flex-col bg-lt-very-light-gray bg-cover dark:bg-dt-very-dark-blue">
      <div className="h-72 w-full bg-todo_app_bg_light_mobile bg-cover align-middle dark:bg-todo_app_bg_dark_mobile sm:bg-todo_app_bg_light dark:sm:bg-todo_app_bg_dark" />
      {children}
    </div>
  )
}
