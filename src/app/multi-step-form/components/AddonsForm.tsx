import { COST_BY_ADDON } from '../constants/costs'
import { FormData } from '../types/data.type'
import { UseFormRegister, UseFormGetValues } from 'react-hook-form'

type Props = {
  register: UseFormRegister<Partial<FormData>>
  getValues: UseFormGetValues<Partial<FormData>>
}

type Addon = {
  name: keyof FormData
  label: string
  description: string
  monthlyPrice: string
  yearlyPrice: string
}

const addonsFormFields: Addon[] = [
  {
    name: 'onlineService',
    label: COST_BY_ADDON.onlineService.name,
    description: 'Access to multiplayer games',
    monthlyPrice: `+$${COST_BY_ADDON.onlineService.monthly}/mo`,
    yearlyPrice: `+$${COST_BY_ADDON.onlineService.yearly}/yr`,
  },
  {
    name: 'largeStorage',
    label: COST_BY_ADDON.largeStorage.name,
    description: 'Extra 1TB of cloud save',
    monthlyPrice: `+$${COST_BY_ADDON.largeStorage.monthly}/mo`,
    yearlyPrice: `+$${COST_BY_ADDON.largeStorage.yearly}/yr`,
  },
  {
    name: 'customProfile',
    label: COST_BY_ADDON.customProfile.name,
    description: 'Custom theme on your profile',
    monthlyPrice: `+$${COST_BY_ADDON.customProfile.monthly}/mo`,
    yearlyPrice: `+$${COST_BY_ADDON.customProfile.yearly}/yr`,
  },
]

export default function AddonsForm({ register, getValues }: Props) {
  const planFrecuencyValue = getValues('planFrecuency')

  return (
    <div className="mt-5 pb-8">
      {addonsFormFields.map((addon) => (
        <div
          key={addon.name}
          className="mt-3 flex items-center rounded border border-mf-light-gray p-3"
        >
          <div className="p-3">
            <input
              id={addon.name}
              type="checkbox"
              {...register(addon.name)}
              className="border-1 h-5 w-5 rounded bg-mf-purplish-blue text-mf-purplish-blue checked:bg-mf-purplish-blue focus:ring-0 focus:ring-mf-purplish-blue"
            />
          </div>
          <label
            htmlFor={addon.name}
            className="ml-2  w-full py-4 text-sm font-medium text-mf-cool-gray"
          >
            <span className="text-lg text-mf-marine-blue">{addon.label}</span>
            <p>{addon.description}</p>
          </label>
          <div>
            <span className="text-xs text-mf-purplish-blue">
              {planFrecuencyValue ? addon.yearlyPrice : addon.monthlyPrice}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
