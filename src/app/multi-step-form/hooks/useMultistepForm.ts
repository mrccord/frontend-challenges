'use client'
import { useState } from 'react'
import { Step } from '../types/steps.type'

export const useMultistepForm = (steps: Step[]) => {
  const [currentStep, setCurrentStep] = useState(0)

  const next = () => {
    setCurrentStep((i) => {
      if (isLastStep(i)) return i
      return i + 1
    })
  }

  const previous = () => {
    setCurrentStep((i) => {
      if (isFirstStep(i)) return i
      return i - 1
    })
  }

  const isLastStep = (i: number) => {
    return i === steps.length - 1
  }

  const isFirstStep = (i: number) => {
    return i === 0
  }

  const goTo = (i: number) => {
    setCurrentStep(i)
  }

  return {
    currentStep,
    next,
    previous,
    goTo,
    isLastStep,
    isFirstStep,
    steps,
  }
}
