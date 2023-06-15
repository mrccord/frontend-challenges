import ChallengeCard from './components/ChallengeCard'
import { techEnum } from './enums/tech.enum'

const challenges = [
  {
    title: 'Todo App',
    description:
      'The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.',
    techs: [techEnum.NEXT, techEnum.TAILWIND, techEnum.TYPESCRIPT],
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/llcq9eiv3ney5tkxgdtu.jpg',
    slug: 'todo-app',
  },
  {
    title: 'Multi-step form',
    description:
      'An excellent test for your form-building and JS skills, this project will pose many challenges along the way to completion.',
    techs: [techEnum.TYPESCRIPT, techEnum.TAILWIND],
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/vxqbpnpbamodg5ioplbj.jpg',
    slug: 'multi-step-form',
  },
  {
    title: 'Password generator app',
    description:
      "This app will be an excellent test of your HTML, CSS, and JS skills. You'll build custom form controls and use JavaScript to generate random passwords.",
    techs: [techEnum.NEXT, techEnum.TAILWIND],
    img: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/nvjjyhvhqfwnjseojdgg.jpg',
    slug: 'password-generator-app',
  },
]

export default function Home() {
  return (
    <main>
      <div className="grid gap-8 px-6 pt-24 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.title} challenge={challenge} />
        ))}
      </div>
    </main>
  )
}
