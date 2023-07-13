import IconArcade from '../../../assets/svg/multistep/icon-arcade.svg'
import IconAdvanced from '../../../assets/svg/multistep/icon-advanced.svg'
import IconPro from '../../../assets/svg/multistep/icon-pro.svg'
import { UseFormGetValues, UseFormRegister } from 'react-hook-form'
import { FormData } from '../types/data.type'
import { ReactElement, useState } from 'react'

type Props = {
  register: UseFormRegister<Partial<FormData>>
  getValues: UseFormGetValues<Partial<FormData>>
}

type RadioOption = {
  name: keyof FormData
  value: string
  icon: ReactElement
  price: string
  label: string
}

const radioOptions: RadioOption[] = [
  {
    name: 'plan',
    label: 'Arcade',
    value: 'plan-arcade',
    icon: <IconArcade />,
    price: '$9/mo',
  },
  {
    name: 'plan',
    label: 'Advanced',
    value: 'plan-advanced',
    icon: <IconAdvanced />,
    price: '$12/mo',
  },
  {
    name: 'plan',
    label: 'Pro',
    value: 'plan-pro',
    icon: <IconPro />,
    price: '$15/mo',
  },
]

export default function PlanForm({ register, getValues }: Props) {
  const planFrecuencyValue = getValues('planFrecuency')
  const [planFrecuency, setPlanFrecuency] = useState(planFrecuencyValue)

  return (
    <>
      <ul className="mt-8 grid w-full gap-6 md:grid-cols-3">
        {radioOptions.map((option) => (
          <li key={option.value}>
            <input
              type="radio"
              {...register(option.name, { required: true })}
              name={option.name}
              value={option.value}
              id={option.value}
              className="peer hidden"
            />
            <label
              htmlFor={option.value}
              className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-mf-light-gray bg-white p-5 text-mf-marine-blue hover:border-mf-purplish-blue peer-checked:border-mf-purplish-blue peer-checked:bg-mf-magnolia"
            >
              <div className="flex gap-5 lg:block">
                <div className="mb-8">{option.icon}</div>
                <div className="flex flex-col">
                  <div className="w-full text-lg font-semibold">
                    {option.label}
                  </div>
                  <div className="w-full text-sm text-mf-cool-gray">
                    {option.price}
                  </div>
                </div>
              </div>
            </label>
          </li>
        ))}
      </ul>
      <div className="mb-5 mt-10 flex w-full justify-center rounded bg-mf-magnolia p-4 lg:mb-0">
        <span
          className={`mr-3 text-sm font-bold ${
            !planFrecuency ? 'text-mf-marine-blue' : 'text-mf-cool-gray'
          }`}
        >
          Monthly
        </span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            {...register('planFrecuency', {
              onChange: (e) => {
                setPlanFrecuency(e.target.checked)
              },
            })}
            className="peer sr-only"
          />
          <div className="peer h-6 w-11 rounded-full bg-mf-marine-blue after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
        </label>
        <span
          className={`ml-3 text-sm font-bold ${
            planFrecuency ? 'text-mf-marine-blue' : 'text-mf-cool-gray'
          }`}
        >
          Yearly
        </span>
      </div>
    </>
  )
}
