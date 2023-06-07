import type { AppProps } from 'next/app'
import AppLayout from '@/app/layouts/AppLayout'
import 'bootstrap/scss/bootstrap-grid.scss'
import '@/app/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
