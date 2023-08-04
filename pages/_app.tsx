import type { AppProps } from 'next/app'
import AppLayout from '@/app/layouts/AppLayout'
import { StoreProvider } from '@/utils/Store'
import NextNProgress from 'nextjs-progressbar'
import 'bootstrap/scss/bootstrap-grid.scss'
import '@/app/styles/index.scss'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageKey = router.asPath
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
