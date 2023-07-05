import { FC, ReactNode } from 'react'
import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header'

type PageLayoutProps = {
  children: ReactNode
  headerTheme?: 'light' | 'dark'
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
