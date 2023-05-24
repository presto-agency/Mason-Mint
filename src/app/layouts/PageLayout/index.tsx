import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { FC, ReactNode } from 'react'

type PageLayoutProps = {
  children: ReactNode
  headerTheme?: 'light' | 'dark'
  className?: string
}

export const PageLayout: FC<PageLayoutProps> = ({
  children,
  headerTheme = 'light',
}) => {
  return (
    <>
      <Header theme={headerTheme} />
      {children}
      <Footer />
    </>
  )
}
