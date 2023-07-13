import React from 'react'
import Wrapper from '../components/Wrapper'
import MultistepForm from './components/MultistepForm'

export default function page() {
  return (
    <Wrapper bgColor="bg-mf-magnolia">
      <div className="flex w-full items-stretch justify-center bg-mf-magnolia lg:h-full lg:items-center">
        <MultistepForm />
      </div>
    </Wrapper>
  )
}
