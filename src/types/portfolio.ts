export interface SocialLink {
  name: string
  url: string
  icon: 'github' | 'linkedin' | 'x' | 'mail' | 'medium'
}

export interface Profile {
  name: string
  greeting: string
  bio: string
  pfp: string
  socials: SocialLink[]
}

export interface ExperienceItem {
  title: string
  role?: string
  description: string
  imageUrl: string
}


export interface ProjectItem {
  name: string
  desc: string
  img: string
  link: string
}


export interface NavSection {
  id: string
  label: string
}

export interface NavItem {
  id: string
  label: string
  path: string
}
