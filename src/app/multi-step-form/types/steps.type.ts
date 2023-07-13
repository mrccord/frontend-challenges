import { ReactElement } from 'react'
import { UseFormGetValues, UseFormRegister } from 'react-hook-form'
import { FormData } from './data.type'

export type Step = {
  id: number
  name: string
  label: string
  description: string
  component: (
    register: UseFormRegister<Partial<FormData>>,
    getValues: UseFormGetValues<Partial<FormData>>,
  ) => ReactElement
}
