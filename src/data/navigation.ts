export interface NavItem {
  id: string
  label: string
  path: string
}

export const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'works', label: 'Works', path: '/works' },
  { id: 'cv', label: 'CV', path: '/cv' },
]
