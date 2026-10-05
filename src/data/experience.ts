import type { ExperienceItem } from '../types/portfolio'

export interface TimelineMilestone {
  id: string
  year: string
  title: string
  subtitle?: string
  description?: string
  isCurrent?: boolean
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'spawned',
    year: '2005',
    title: 'spawned',
  },
  {
    id: 'college',
    year: '2023',
    title: 'college',
  },
  {
    id: 'unemployed',
    year: '2026',
    title: 'unemployed',
    isCurrent: true,
  },
]

export const experiencesData: ExperienceItem[] = [
  {
    title: "Solana India Fellowship '26",
    description: `- learnt and shipped trading engines, prediction markets and more
- finished in Top 20 and recieved $2500 bounty`,
    imageUrl: '/images/solana.png',
  },
  {
    title: 'Next Campus',
    role: 'founding engg',
    description: 'led the development and built a complete AI integrated ERP platform using TypeScript and Next.js',
    imageUrl: '/images/nextcampus.jpg',
  },
]
