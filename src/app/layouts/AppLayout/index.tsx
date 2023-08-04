import { FC, ReactNode, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { withModal } from '@/context/modal'
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer/Footer'
const CustomCursor = dynamic(() => import('@/ui/CustomCursor/CustomCursor'), {
  ssr: false,
})

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const [isTablet, setIsTablet] = useState(false)
  const [headerTheme, setHeaderTheme] = useState<'light' | 'dark'>('light')
  const [existHeaderFooter, setExistHeaderFooter] = useState<boolean>(true)
  const { width } = useWindowDimensions()
  const { route } = useRouter()
  const lenis = useLenis()
  const options = {
    duration: 1,
    smoothWheel: true,
    smoothTouch: false,
    easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  }

  useEffect(() => {
    setIsTablet(width <= 991)
  }, [width])

  useEffect(() => {
    // Back to top
    // if (lenis) {
    //   lenis.scrollTo(0, {
    //     lerp: 0,
    //     duration: 0,
    //     force: true,
    //   })
    // }

    const forDarkHeader = ['/']
    const withoutHeaderFooter = ['/404']
    // Change theme
    if (forDarkHeader.includes(route)) {
      setHeaderTheme('dark')
    } else if (headerTheme !== 'light') {
      setHeaderTheme('light')
    }
    // Hide Header & Footer
    if (withoutHeaderFooter.includes(route)) {
      setExistHeaderFooter(false)
    } else if (!existHeaderFooter) {
      setExistHeaderFooter(true)
    }
  }, [route, headerTheme, existHeaderFooter])

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Mason Mint supplying both investors and collector with high quality silver products."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
        />
      </Head>
      {!isTablet && <CustomCursor />}
      <ReactLenis root options={{ ...options }}>
        {existHeaderFooter && <Header theme={headerTheme} />}
        {children}
        {existHeaderFooter && <Footer />}
      </ReactLenis>
    </>
  )
}

export default withModal(AppLayout)
