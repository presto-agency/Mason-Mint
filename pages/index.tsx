import Head from 'next/head'
import { HomeContent } from '@/modules/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mason Mint Silver Coins and Rounds</title>
      </Head>
      <HomeContent />
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {},
  }
}
