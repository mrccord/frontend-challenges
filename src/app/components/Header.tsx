import Link from 'next/link'
import React from 'react'
import ToggleButton from './ToggleButton'

export default function Header() {
  return (
    <header className="flex justify-around pb-5 pt-5 text-center text-white dark:text-electric-blue">
      <Link className="m-auto ml-5 flex  w-full flex-row text-2xl" href="/">
        <span className="text-keppel dark:text-white">{'<>'}</span>Frontend
        Challenges
        <span className="text-keppel dark:text-white">{'</>'}</span>
      </Link>
      <div className="flex w-full justify-end">
        <ToggleButton />
      </div>
    </header>
  )
}
