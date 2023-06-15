'use client'
import Wrapper from '../components/Wrapper'
import Background from './components/Background'
import TodoLayout from './components/TodoLayout'
import TodoList from './components/TodoList'

export default function () {
  return (
    <Wrapper>
      <Background>
        <TodoLayout />
      </Background>
    </Wrapper>
  )
}
