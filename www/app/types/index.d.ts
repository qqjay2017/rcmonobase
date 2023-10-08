




export type NavItem = {
    title: string
    href: string
    disabled?: boolean
  }
  
export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)
export type DocsConfig = {
    mainNav: MainNavItem[]
    sidebarNav: SidebarNavItem[]
  }


export interface Post {
    name: string // useHook
    slug: string // use-hook
    href: string // /react-hook/use-hook
    docs: Buffer // markdown raw
    hook: Buffer // markdown raw
    demo: Buffer // markdown raw
  }
  
  export type Option<T> = T | null