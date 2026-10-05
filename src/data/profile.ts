import type { Profile } from '../types/portfolio'

export const profileData: Profile = {
  name: 'Tarun',
  greeting: 'Hola, Tarun here',
  bio: 'i like building software that scales.\nmostly writing golang, java and code that runs distrubuted systems.',
  pfp: '/images/pfp.png',
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/tarunbtw',
      icon: 'github',
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com',
      icon: 'x',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: 'mailto:tarun@example.com',
      icon: 'mail',
    },
  ],
}
