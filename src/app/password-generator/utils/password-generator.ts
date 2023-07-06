import {
  lowercaseLettersChars,
  numbersChars,
  symbolsChars,
  uppercaseLettersChars,
} from '../constants/chars.constants'
import { PasswordConfig } from '../types/password-generator.types'

export const generatePassword = (config: PasswordConfig): string => {
  const charsSet: string[] = []
  const { length, uppercase, lowercase, numbers, symbols } = config
  let chars = ''
  let password = ''

  if (uppercase) charsSet.push(uppercaseLettersChars)
  if (lowercase) charsSet.push(lowercaseLettersChars)
  if (numbers) charsSet.push(numbersChars)
  if (symbols) charsSet.push(symbolsChars)

  if (!charsSet.length) return ''
  for (let i = 0; i < charsSet.length; i++) {
    const selectedChars = charsSet[i]
    const randomIndex = Math.floor(Math.random() * selectedChars.length)
    const randomChar = selectedChars[randomIndex]
    password += randomChar
  }
  chars = charsSet.join('')
  for (let i = password.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    const randomChar = chars[randomIndex]
    password += randomChar
  }
  return suffleString(password)
}

const suffleString = (str: string): string => {
  const chars: string[] = str.split('')
  let currentIndex: number = chars.length
  let temporaryValue: string
  let randomIndex: number

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    temporaryValue = chars[currentIndex]
    chars[currentIndex] = chars[randomIndex]
    chars[randomIndex] = temporaryValue
  }

  return chars.join('')
}
