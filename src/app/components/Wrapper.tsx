type Props = {
  children?: React.ReactNode
}

export default function Wrapper({ children }: Props) {
  return (
    <div className="h-[calc(100vh-82px)] border border-keppel">{children}</div>
  )
}
