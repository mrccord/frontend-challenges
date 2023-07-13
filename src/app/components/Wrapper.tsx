type Props = {
  children?: React.ReactNode
  bgColor?: string | undefined
}

export default function Wrapper({ children, bgColor }: Props) {
  return (
    <div className={`${bgColor} h-[calc(100vh-82px)] border border-keppel`}>
      {children}
    </div>
  )
}
