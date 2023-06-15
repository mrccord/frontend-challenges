import Link from 'next/link'
import React from 'react'
import SearchButton from './SearchButton'
import ToggleButton from './ToggleButton'

export default function Header() {
  return (
    <header className="flex justify-around pb-5 pt-5 text-center text-white dark:text-electric-blue">
      <div className="flex w-full justify-center text-2xl">
        <Link className="m-auto" href="/">
          <span className="text-keppel dark:text-white">{'<>'}</span>Frontend
          Challenges
          <span className="text-keppel dark:text-white">{'</>'}</span>
        </Link>
      </div>
      <div className="w-full self-center">
        <SearchButton />
      </div>
      <div className="flex w-full justify-end">
        <ToggleButton />
      </div>
    </header>
  )
}
