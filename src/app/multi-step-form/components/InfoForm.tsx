import { Control, useFormState } from 'react-hook-form'
import { FormData } from '../types/data.type'

type Props = {
  register: any
  control: Control<Partial<FormData>, any>
}

type Field = {
  name: keyof FormData
  placeholder: string
  label: string
  type: string
  validation: RegExp
  message: string
}

const fieldsInfoForm: Field[] = [
  {
    name: 'name',
    placeholder: 'e.g. "John Doe"',
    label: 'Name',
    type: 'text',
    validation: /.*/,
    message: '',
  },
  {
    name: 'email',
    placeholder: 'e.g. "johndoe@lorem.com"',
    label: 'Email',
    type: 'email',
    validation: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: 'Invalid email',
  },
  {
    name: 'phone',
    placeholder: 'e.g. "+1 123 456 7890"',
    label: 'Phone Number',
    type: 'number',
    validation: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
    message: 'Invalid phone number',
  },
]

export default function InfoForm({ register, control }: Props) {
  const { errors } = useFormState({ control })
  console.log('errors in child', errors)
  return (
    <div className="my-8 flex flex-col">
      {fieldsInfoForm.map((field) => (
        <div key={field.name} className="mb-4 flex flex-col">
          <div className="flex justify-between">
            <label htmlFor="name" className="mb-2 text-sm text-mf-marine-blue">
              {field.label} *
            </label>
          </div>
          <input
            type={field.type}
            {...register(field.name, {
              required: true,
              pattern: {
                value: field.validation,
                message: field.message,
              },
            })}
            placeholder={field.placeholder}
            className="rounded border border-mf-cool-gray px-4 py-2"
          />
        </div>
      ))}
      <span className="text-sm text-mf-cool-gray">(*) required fields</span>
    </div>
  )
}
