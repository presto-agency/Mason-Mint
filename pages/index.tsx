import Head from 'next/head'
// import MainPreloader from '@/components/MainPreloader/MainPreloader'
import { HomeContent } from '@/modules/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mason Mint Silver Coins and Rounds</title>
      </Head>
      {/*<MainPreloader />*/}
      <HomeContent />
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {},
  }
}
