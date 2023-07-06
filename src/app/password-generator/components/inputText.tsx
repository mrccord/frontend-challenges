import { UseFormRegister } from 'react-hook-form'

type Props = {
  register: UseFormRegister<any>
  handleCheckChange: (e: any) => void
  fieldName: string
  description: string
}

export default function InputText({
  register,
  handleCheckChange,
  fieldName,
  description,
}: Props) {
  return (
    <div className="flex items-center justify-start">
      <input
        {...register(fieldName, {
          onChange: handleCheckChange,
        })}
        type="checkbox"
        className="h-4 w-4 border accent-pg-mint-green checked:bg-pg-mint-green focus:ring-1 focus:ring-pg-mint-green"
      />
      <span className="p-2">{description}</span>
    </div>
  )
}
