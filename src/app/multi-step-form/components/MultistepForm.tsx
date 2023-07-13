'use client'
import React, { ReactElement } from 'react'
import Sidebar from './Sidebar'
import InfoForm from './InfoForm'
import PlanForm from './PlanForm'
import { useMultistepForm } from '../hooks/useMultistepForm'
import { Step } from '../types/steps.type'
import { SubmitHandler, UseFormGetValues, useForm } from 'react-hook-form'
import { FormData } from '../types/data.type'

const initialSteps: Step[] = [
  {
    id: 1,
    name: 'Your Info',
    label: 'Personal info',
    description: 'Please provide your name, email address, and phone number',
    component: (register, getValues): ReactElement => (
      <InfoForm register={register} />
    ),
  },
  {
    id: 2,
    name: 'Select Plan',
    label: 'Select your plan',
    description: 'You have the option of monthly or yearly billing',
    component: (
      register,
      getValues: UseFormGetValues<Partial<FormData>>,
    ): ReactElement => <PlanForm register={register} getValues={getValues} />,
  },
  {
    id: 3,
    name: 'Add-ons',
    label: 'Pick add-ons',
    description: 'Add-ons hel enhance your gaming experience',
    component: (): ReactElement => <div>Step 3</div>,
  },
  {
    id: 4,
    name: 'Summary',
    label: 'Finishing up',
    description: 'Double-check everything looks OK before confirming',
    component: (): ReactElement => <div>Step 4</div>,
  },
]

export default function MultistepForm() {
  const { currentStep, next, previous, steps, isFirstStep, isLastStep } =
    useMultistepForm(initialSteps)

  const { register, handleSubmit, getValues } = useForm<Partial<FormData>>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      plan: '',
      planFrecuency: false,
    },
  })

  const onSubmit: SubmitHandler<Partial<FormData>> = (data) => {
    console.log(data)
  }

  return (
    <div className="flex h-full w-full flex-col items-center rounded lg:h-[38rem] lg:w-[60rem] lg:flex-row lg:items-center lg:bg-mf-white lg:shadow-sm lg:shadow-mf-cool-gray">
      <Sidebar steps={steps} currentStep={currentStep} />
      <form
        className="-mt-20 w-[90%] rounded bg-mf-white  shadow shadow-mf-cool-gray lg:mt-0 lg:h-[568px] lg:w-[666px] lg:shadow-none"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex h-full flex-col px-24 pt-8">
          <h1 className="text-3xl font-bold text-mf-marine-blue">
            {steps[currentStep].label}
          </h1>
          <p className="text-sm text-mf-cool-gray">
            {steps[currentStep].description}
          </p>
          {steps[currentStep].component(register, getValues)}
        </div>
        <footer className="fixed bottom-0 left-0 m-auto block w-full bg-mf-white lg:relative lg:-mt-20">
          <div className="grid grid-flow-col p-5 px-24">
            {!isFirstStep(currentStep) && (
              <button
                onClick={previous}
                className="justify-self-start text-sm font-bold text-mf-marine-blue"
              >
                Go Back
              </button>
            )}
            {!isLastStep(currentStep) ? (
              <button
                onClick={next}
                className="justify-self-end rounded bg-mf-marine-blue px-4 py-2 text-sm font-bold text-mf-white"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                className="justify-self-end rounded bg-mf-marine-blue px-4 py-2 text-sm font-bold text-mf-white"
              >
                Submit
              </button>
            )}
          </div>
        </footer>
      </form>
    </div>
  )
}
