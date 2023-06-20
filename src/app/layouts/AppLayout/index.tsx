import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { withModal } from '@/context/modal'
import { Lenis as ReactLenis } from '@studio-freight/react-lenis'
import CustomCursor from '@/ui/CustomCursor/CustomCursor'

type AppLayoutProps = {
  children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const options = {
    duration: 2.5,
  }

  return (
    <>
      <Head>
        <title>Mason Mint</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CustomCursor />
      <ReactLenis root options={{ ...options }}>
        {children}
      </ReactLenis>
    </>
  )
}

export default withModal(AppLayout)
