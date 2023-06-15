import React from 'react'
import { techEnum } from '../enums/tech.enum'
import ChallengeSvg from './ChallengeSvg'
import Image from 'next/image'
import Link from 'next/link'

type typeProps = {
  title: string
  description: string
  techs: techEnum[]
  img: string
  slug: string
}

export default function ChallengeCard({
  challenge: { title, description, techs, img, slug },
}: {
  challenge: typeProps
}) {
  return (
    <article className="w-85 m-auto overflow-hidden rounded-lg bg-keppel text-white shadow-sm shadow-electric-blue dark:bg-dark-gunmetal dark:text-electric-blue">
      <Image
        src={img}
        alt=""
        className="block h-auto w-full"
        width={600}
        height={400}
      />
      <header className=" flex items-center justify-between p-2 leading-tight md:p-4">
        <Link href={slug}>
          <h1 className="text-lg">{title}</h1>
        </Link>
      </header>

      <footer className="flex flex-col items-center justify-between p-2 leading-none md:p-4 ">
        <p>{description}</p>
        <div className="flex flex-row">
          {techs.map((tech) => (
            <span className="bg-grey-lighter text-grey-darker mr-1 rounded-full px-1 pt-5 text-sm font-semibold">
              {<ChallengeSvg key={tech} tech={tech} />}
            </span>
          ))}
        </div>
      </footer>
    </article>
  )
}
