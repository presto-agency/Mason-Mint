import Head from 'next/head'
// import { Lenis as ReactLenis } from '@studio-freight/react-lenis'
import { HomeContent } from '@/modules/Home'

export default function Home() {
  // const options = {
  //   duration: 1,
  //   smoothWheel: true,
  // }

  return (
    <>
      <Head>
        <title>Mason Mint Silver Coins and Rounds</title>
      </Head>
      {/*<ReactLenis root options={{ ...options }}>*/}
      <HomeContent />
      {/*</ReactLenis>*/}
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {},
  }
}
