import React, { ReactElement } from 'react'
import { Step, formComponentProps } from '../types/steps.type'
import InfoForm from '../components/InfoForm'
import PlanForm from '../components/PlanForm'
import AddonsForm from '../components/AddonsForm'
import SummaryStep from '../components/SummaryStep'

export const INITIAL_STEPS: Step[] = [
  {
    id: 1,
    name: 'Your Info',
    label: 'Personal info',
    description: 'Please provide your name, email address, and phone number',
    component: ({ register, control }: formComponentProps): ReactElement => (
      <InfoForm register={register} control={control} />
    ),
  },
  {
    id: 2,
    name: 'Select Plan',
    label: 'Select your plan',
    description: 'You have the option of monthly or yearly billing',
    component: ({ register, getValues }: formComponentProps): ReactElement => (
      <PlanForm register={register} getValues={getValues} />
    ),
  },
  {
    id: 3,
    name: 'Add-ons',
    label: 'Pick add-ons',
    description: 'Add-ons hel enhance your gaming experience',
    component: ({ register, getValues }: formComponentProps): ReactElement => (
      <AddonsForm register={register} getValues={getValues} />
    ),
  },
  {
    id: 4,
    name: 'Summary',
    label: 'Finishing up',
    description: 'Double-check everything looks OK before confirming',
    component: ({
      formData,
      getValues,
      goTo,
    }: formComponentProps): ReactElement => (
      <SummaryStep getValues={getValues} formData={formData} goTo={goTo} />
    ),
  },
]
