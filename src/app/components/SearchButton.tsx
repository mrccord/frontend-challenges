import React from 'react'

export default function SearchButton() {
  return (
    <form>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="text"
            id="search-dropdown"
            className="z-20 block w-full rounded-lg border border-electric-blue bg-keppel p-2.5 text-sm text-white placeholder-white focus:border-electric-blue focus:outline-none focus:ring-electric-blue dark:border-keppel  dark:bg-dark-gunmetal dark:text-electric-blue dark:placeholder-keppel dark:ring-keppel dark:focus:border-keppel dark:focus:outline-none"
            placeholder="Search challenges"
            required
          />
          <button
            type="submit"
            className="focus:ring-none focus:ring-blue-300 absolute right-0 top-0 rounded-r-lg border border-electric-blue p-2.5 text-sm font-medium text-white hover:text-electric-blue focus:outline-none dark:border-keppel dark:bg-dark-gunmetal dark:text-keppel dark:hover:text-electric-blue"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  )
}
