import { ReactElement } from 'react'
import { UseFormGetValues, UseFormRegister } from 'react-hook-form'
import { FormData } from './data.type'

export type formComponentProps = {
  register: UseFormRegister<Partial<FormData>>
  getValues: UseFormGetValues<Partial<FormData>>
  formData: Partial<FormData>
  goTo: (i: number) => void
  control: any
}

export type Step = {
  id: number
  name: string
  label: string
  description: string
  component: (props: formComponentProps) => ReactElement
}
