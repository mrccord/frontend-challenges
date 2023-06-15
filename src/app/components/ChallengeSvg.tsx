'use client'
import React, { ReactElement } from 'react'
import { techEnum } from '../enums/tech.enum'
import NextIcon from '../../assets/svg/next-icon.svg'
import TailwindIcon from '../../assets/svg/tailwind-icon.svg'
import TypescriptIcon from '../../assets/svg/typescript-icon.svg'

const svgByTechEnum: Record<keyof typeof techEnum, ReactElement> = {
  NEXT: (
    <NextIcon className="h-10 w-10 text-white hover:text-electric-blue dark:text-keppel dark:hover:text-electric-blue " />
  ),
  TAILWIND: (
    <TailwindIcon className="h-10 w-10 text-white hover:text-electric-blue dark:text-keppel dark:hover:text-electric-blue" />
  ),
  TYPESCRIPT: (
    <TypescriptIcon className="h-10 w-10 text-white hover:text-electric-blue dark:text-keppel dark:hover:text-electric-blue" />
  ),
}

type typeProps = {
  tech: techEnum
}

export default function ChallengeSvg({ tech }: typeProps) {
  return svgByTechEnum[tech]
}
