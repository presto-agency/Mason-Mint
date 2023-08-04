import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { StoreProvider } from '@/utils/Store'
import AppLayout from '@/app/layouts/AppLayout'

import 'bootstrap/scss/bootstrap-grid.scss'
import '@/app/styles/index.scss'
import { useNextCssRemovalPrevention } from '@madeinhaus/nextjs-page-transition'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

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
        <AnimatePresence
          onExitComplete={onExitComplete}
          mode="wait"
          initial={false}
        >
          <Component {...pageProps} key={pageKey} />
        </AnimatePresence>
      </AppLayout>
    </StoreProvider>
  )
}
