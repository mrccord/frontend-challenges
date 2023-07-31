import { UseFormGetValues } from 'react-hook-form'
import { FormData } from '../types/data.type'
import { COST_BY_ADDON, COST_BY_PLAN } from '../constants/costs'
import { INITIAL_STEPS } from '../constants/intialSteps'

type Props = {
  getValues: UseFormGetValues<Partial<FormData>>
  formData: Partial<FormData>
  goTo: (step: number) => void
}

function Service({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex flex-row items-center justify-between p-3">
      <span className="text-sm text-mf-cool-gray">{name}</span>
      <span className="text-sm text-mf-marine-blue">+{price}</span>
    </div>
  )
}

export default function SummaryStep({ getValues, formData, goTo }: Props) {
  const planFrecuencyValue = getValues('planFrecuency')
  if (!formData.plan) return null
  const totalCost = () => {
    if (!formData.plan) return 0
    let total = 0
    total +=
      COST_BY_PLAN[formData.plan!][planFrecuencyValue ? 'yearly' : 'monthly']
    if (formData.onlineService) {
      total +=
        COST_BY_ADDON.onlineService[planFrecuencyValue ? 'yearly' : 'monthly']
    }
    if (formData.largeStorage) {
      total +=
        COST_BY_ADDON.largeStorage[planFrecuencyValue ? 'yearly' : 'monthly']
    }
    if (formData.customProfile) {
      total +=
        COST_BY_ADDON.customProfile[planFrecuencyValue ? 'yearly' : 'monthly']
    }
    return total
  }

  const selectPlanStep =
    INITIAL_STEPS.find((step) => step.name === 'Select Plan')!.id - 1

  return (
    <section className="my-8">
      <div className="rounded bg-mf-magnolia p-4">
        <div className="flex flex-row items-center justify-between p-3">
          <div>
            <h3 className="font-bold text-mf-marine-blue">
              {!formData.plan ? '' : COST_BY_PLAN[formData.plan!].name}{' '}
              {planFrecuencyValue ? '(Monthly)' : '(Yearly)'}
            </h3>
            <a
              className="cursor-pointer text-sm text-mf-purplish-blue underline"
              onClick={() => goTo(selectPlanStep)}
            >
              Change
            </a>
          </div>
          <span className="font-bold text-mf-marine-blue">
            {planFrecuencyValue
              ? `$${COST_BY_PLAN[formData.plan!].yearly}/yr`
              : `$${COST_BY_PLAN[formData.plan!].monthly}/mo`}
          </span>
        </div>
        <hr className="text-mf-light-gray " />
        {formData.onlineService && (
          <Service
            name="Online Service"
            price={
              planFrecuencyValue
                ? `$${COST_BY_ADDON.onlineService.yearly}/yr`
                : `$${COST_BY_ADDON.onlineService.monthly}/mo`
            }
          />
        )}
        {formData.largeStorage && (
          <Service
            name="Large Storage"
            price={
              planFrecuencyValue
                ? `$${COST_BY_ADDON.largeStorage.yearly}/yr`
                : `$${COST_BY_ADDON.largeStorage.monthly}/mo`
            }
          />
        )}
        {formData.customProfile && (
          <Service
            name="Custom Profile"
            price={
              planFrecuencyValue
                ? `$${COST_BY_ADDON.customProfile.yearly}/yr`
                : `$${COST_BY_ADDON.customProfile.monthly}/mo`
            }
          />
        )}
      </div>
      <div className="flex flex-row items-center justify-between px-7 py-4">
        <span className="text-sm text-mf-cool-gray">
          Total {planFrecuencyValue ? '(per year)' : '(per month)'}
        </span>
        <span className="text-lg font-bold text-mf-purplish-blue">
          {totalCost()} {planFrecuencyValue ? '/yr' : '/mo'}
        </span>
      </div>
    </section>
  )
}
