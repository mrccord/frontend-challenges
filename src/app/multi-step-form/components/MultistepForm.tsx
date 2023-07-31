'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { INITIAL_STEPS } from '../constants/intialSteps'
import { useMultistepForm } from '../hooks/useMultistepForm'
import { FormData } from '../types/data.type'
import Sidebar from './Sidebar'
import { useState } from 'react'

export default function MultistepForm() {
  const { currentStep, next, previous, steps, isFirstStep, isLastStep, goTo } =
    useMultistepForm(INITIAL_STEPS)

  const [formData, setFormData] = useState<Partial<FormData>>({})

  const { register, handleSubmit, getValues, formState, control } = useForm<
    Partial<FormData>
  >({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      plan: 'plan-arcade',
      planFrecuency: false,
      customProfile: false,
      largeStorage: false,
      onlineService: false,
    },
  })

  const onSubmit: SubmitHandler<Partial<FormData>> = (data) => {
    if (isLastStep(currentStep)) {
      setFormData(data)
    }
  }

  console.log('dirtyFields', formState.dirtyFields)
  console.log('errors', formState.errors)

  const nextStep = () => {
    next()
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
          {steps[currentStep].component({
            register,
            getValues,
            formData,
            goTo,
            control,
          })}
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
                onClick={() => nextStep()}
                className="justify-self-end rounded bg-mf-marine-blue px-4 py-2 text-sm font-bold text-mf-white disabled:bg-mf-light-blue"
                disabled={!formState.isValid}
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                className="justify-self-end rounded bg-mf-marine-blue px-4 py-2 text-sm font-bold text-mf-white"
              >
                Confirm
              </button>
            )}
          </div>
        </footer>
      </form>
    </div>
  )
}
