import React from 'react'
import { Step } from '../types/steps.type'

type Props = {
  steps: Step[]
  currentStep: number
}

export default function Sidebar({ steps, currentStep }: Props) {
  return (
    <div className="flex h-[250px] w-full flex-row justify-center bg-multistep_form_bg_mobile bg-cover bg-no-repeat lg:ml-5 lg:h-[568px] lg:w-[274px] lg:flex-col lg:justify-normal lg:bg-multistep_form_bg_desktop">
      {steps.map((step) => (
        <div
          key={step.id}
          className="flex h-2/3 items-center gap-3 p-4 pl-6 text-mf-white lg:h-auto"
        >
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full border  text-xl font-bold ${
              currentStep === step.id - 1
                ? 'border-mf-light-blue bg-mf-light-blue'
                : 'border-mf-white bg-transparent'
            }`}
          >
            {step.id}
          </div>
          <div className="text-md ml-4 hidden flex-col lg:flex">
            <span className="text-mf-cool-gray">STEP {step.id}</span>
            <span className="font-bold">{step.name.toUpperCase()}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
