'use client'
import { useState } from 'react'
import Wrapper from '../components/Wrapper'
import CopyIcon from './../../assets/svg/copy-icon.svg'
import { SubmitHandler, set, useForm } from 'react-hook-form'
import {
  PasswordConfig,
  strengthConfig,
} from './types/password-generator.types'
import { generatePassword } from './utils/password-generator'
import InputText from './components/inputText'
import { strenghColor } from './utils/color-selector'
import { Tooltip } from 'react-tooltip'

const defaultValues: PasswordConfig = {
  length: 12,
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false,
}

const defaultStrength: strengthConfig = {
  length: 0,
  color: 'bg-transparent',
}

const inputTextFields = [
  {
    fieldName: 'uppercase',
    description: 'Include Uppercase Letters',
  },
  {
    fieldName: 'lowercase',
    description: 'Include Lowercase Letters',
  },
  {
    fieldName: 'numbers',
    description: 'Include Numbers',
  },
  {
    fieldName: 'symbols',
    description: 'Include Symbols',
  },
]

export default function page() {
  const [password, setPassword] = useState('P4$$W0RD')
  const { register, handleSubmit } = useForm<PasswordConfig>({
    defaultValues,
  })
  const [length, setLength] = useState(defaultValues.length)
  const [strength, setStrength] = useState<strengthConfig>(defaultStrength)
  const [error, setError] = useState<string | null>(null)

  const onSubmit: SubmitHandler<PasswordConfig> = (data) => {
    const pass = generatePassword(data)
    if (pass === '')
      return setError('Please select at least one include option')
    setPassword(pass)
  }

  const handleRangeChange = (e: any) => {
    setLength(e.target.value)
  }

  const handleCheckChange = (e: any) => {
    setError(null)
    setStrength((prev) => {
      let value: number = e.target.checked ? prev.length + 1 : prev.length - 1
      return {
        length: value,
        color: strenghColor(value),
      }
    })
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
  }

  return (
    <Wrapper>
      <div className="flex h-full items-center justify-center bg-pg-chinese-black">
        <div className="flex flex-col text-center text-white">
          <h1 className="text-pg-roman-silver">Password Generator</h1>
          <div className="mt-3 flex w-96 justify-between bg-pg-pine-tree p-3">
            <span className="text-pg-roman-silver">{password}</span>
            <button
              onClick={() => copyToClipboard()}
              data-tooltip-id="tooltip"
              data-tooltip-delay-hide={1000}
            >
              <CopyIcon className="cursor-pointer text-pg-mint-green hover:text-pg-hover-mint-green" />
            </button>
            <Tooltip id="tooltip" content="Copied!" openOnClick />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-3 flex w-96 flex-col justify-between bg-pg-pine-tree p-3">
              <div className="flex w-full justify-between">
                <span>Character length</span>
                <span className="text-lg text-pg-mint-green">{length}</span>
              </div>
              <div className="mt-4 flex">
                <input
                  {...register('length', {
                    onChange: handleRangeChange,
                  })}
                  className=" h-4 w-full appearance-none overflow-hidden rounded-lg bg-pg-chinese-black accent-pg-mint-green out-of-range:bg-pg-chinese-black"
                  type="range"
                  min="6"
                  max="30"
                />
              </div>
              <div className="mt-4">
                {inputTextFields.map((inputText) => (
                  <InputText
                    key={inputText.fieldName}
                    register={register}
                    handleCheckChange={handleCheckChange}
                    fieldName={inputText.fieldName}
                    description={inputText.description}
                  />
                ))}
              </div>
              <div className="mt-4">
                <div className="flex justify-between bg-pg-chinese-black p-2">
                  <span>STRENGTH</span>
                  <div className="flex gap-2">
                    {[...Array(4)].map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 border border-white ${
                          strength.length >= index + 1 && strength.color
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-pg-mint-green p-2 text-pg-pine-tree hover:bg-pg-hover-mint-green"
                >
                  Generate Password →
                </button>
              </div>
              {error && (
                <div className="mt-4 text-pg-strength-red">
                  <span>{error}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
