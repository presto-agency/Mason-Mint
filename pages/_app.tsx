import type { AppProps } from 'next/app'
import AppLayout from '@/app/layouts/AppLayout'
import { StoreProvider } from '@/utils/Store'
import 'bootstrap/scss/bootstrap-grid.scss'
import '@/app/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </StoreProvider>
  )
}
