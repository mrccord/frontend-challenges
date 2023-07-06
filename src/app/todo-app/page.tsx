'use client'
import Wrapper from '../components/Wrapper'
import Background from './components/Background'
import TodoLayout from './components/TodoLayout'

export default function () {
  return (
    <Wrapper>
      <Background>
        <TodoLayout />
      </Background>
    </Wrapper>
  )
}
