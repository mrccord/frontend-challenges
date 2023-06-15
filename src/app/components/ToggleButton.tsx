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
      <span>
        <SunIcon className="h-6 w-6 text-keppel" />
      </span>
      <label className="relative ml-2 mr-2 inline-flex cursor-pointer items-center self-center">
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          onChange={() =>
            setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
          }
        />
        <div className="peer h-6 w-11 rounded-full bg-keppel after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-keppel after:bg-white after:transition-all after:content-[''] peer-checked:bg-keppel peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-keppel dark:border-dark-gunmetal dark:bg-dark-gunmetal dark:peer-focus:ring-keppel"></div>
      </label>
      <span>
        <MoonIcon className="h5 w-5 text-keppel" />
      </span>
    </div>
  )
}
