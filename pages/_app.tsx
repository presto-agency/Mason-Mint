import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { AnimatePresence } from 'framer-motion'
import { StoreProvider } from '@/utils/Store'
import AppLayout from '@/app/layouts/AppLayout'
import { useNextCssRemovalPrevention } from '@madeinhaus/nextjs-page-transition'
import MainPreloaderWrapper from '@/components/MainPreloader/MainPreloaderWrapper'
import { useRouter } from 'next/router'

import 'bootstrap/scss/bootstrap-grid.scss'
import '@/app/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }

  useNextCssRemovalPrevention()
  const router = useRouter()
  const pageKey = router.asPath

  return (
    <StoreProvider>
      <AppLayout>
        <NextNProgress color="#266ef9" />
        <MainPreloaderWrapper />
        <AnimatePresence onExitComplete={onExitComplete} mode="wait">
          <Component {...pageProps} key={pageKey} />
        </AnimatePresence>
      </AppLayout>
    </StoreProvider>
  )
}
