import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import NextNProgress from 'nextjs-progressbar'
import { StoreProvider } from '@/utils/Store'
import AppLayout from '@/app/layouts/AppLayout'

import 'bootstrap/scss/bootstrap-grid.scss'
import '@/app/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { asPath: pageKey } = router

  const onExitComplete = () => {
    window.scrollTo({ top: 0 })
  }

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
