import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { StoreProvider } from '@/utils/Store'
import AppLayout from '@/app/layouts/AppLayout'

import 'bootstrap/scss/bootstrap-grid.scss'
import '@/app/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <AppLayout>
        <NextNProgress color="#266ef9" />
        <Component {...pageProps} />
      </AppLayout>
    </StoreProvider>
  )
}
