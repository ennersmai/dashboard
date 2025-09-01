export interface MenuItem {
  id: string
  title: string
  icon: string
  path?: string
  badge?: string | number
  children?: MenuItem[]
  external?: boolean
  target?: string
  isSection?: boolean
}
