import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { FC, ReactNode } from 'react'
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'

type PageLayoutProps = {
  children: ReactNode
  headerTheme?: 'light' | 'dark'
}

export const PageLayout: FC<PageLayoutProps> = ({
  children,
  headerTheme = 'light',
}) => {
  // const lenis = useLenis(({scroll}) => {
  //   console.log('hi')
  // })
  const options = {
    duration: 3,
  }

  return (
    <>
      <ReactLenis root options={{ ...options }}>
        <Header theme={headerTheme} />
        {children}
        <Footer />
      </ReactLenis>
    </>
  )
}
