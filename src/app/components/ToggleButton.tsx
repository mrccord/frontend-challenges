'use client'
import React from 'react'
import useTheme from '../hooks/useTheme'
import { Theme } from '../enums/theme.enum'
import SunIcon from './../../assets/svg/sun-icon.svg'
import MoonIcon from './../../assets/svg/moon-icon.svg'

export default function ToggleButton() {
  const [theme, setTheme] = useTheme()
  return (
    <div className="mr-5 flex items-center">
      {theme === Theme.DARK ? (
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 shadow-md dark:bg-dark-gunmetal"
          onClick={() => setTheme(Theme.LIGHT)}
        >
          <SunIcon className="h-8 w-8 text-keppel" />
        </button>
      ) : (
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 shadow-md dark:bg-dark-gunmetal"
          onClick={() => setTheme(Theme.DARK)}
        >
          <MoonIcon className="h-5 w-5 text-keppel" />
        </button>
      )}
    </div>
  )
}
