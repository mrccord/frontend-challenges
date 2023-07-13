import { UseFormRegister } from 'react-hook-form'
import { FormData } from '../types/data.type'

type Props = {
  register: UseFormRegister<Partial<FormData>>
}

type Field = {
  name: keyof FormData
  placeholder: string
  label: string
}

const fieldsInfoForm: Field[] = [
  {
    name: 'name',
    placeholder: 'e.g. "John Doe"',
    label: 'Name',
  },
  {
    name: 'email',
    placeholder: 'e.g. "johndoe@lorem.com"',
    label: 'Email',
  },
  {
    name: 'phone',
    placeholder: 'e.g. "+1 123 456 7890"',
    label: 'Phone Number',
  },
]

export default function InfoForm({ register }: Props) {
  return (
    <div className="mt-8 flex flex-col">
      {fieldsInfoForm.map((field) => (
        <div key={field.name} className="mb-4 flex flex-col">
          <div className="flex justify-between">
            <label htmlFor="name" className="mb-2 text-sm text-mf-marine-blue">
              {field.label}
            </label>
            <label
              className="mb-2 text-sm font-bold text-mf-strawberry-red"
              htmlFor="error"
            >
              This field is required
            </label>
          </div>
          <input
            type="text"
            {...register(field.name, { required: true })}
            placeholder={field.placeholder}
            className="rounded border border-mf-cool-gray px-4 py-2"
          />
        </div>
      ))}
    </div>
  )
}
