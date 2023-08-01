import Head from 'next/head'
// import { Lenis as ReactLenis } from '@studio-freight/react-lenis'
import { AboutContent } from '@/modules/About'

export default function About() {
  // const options = {
  //   duration: 1,
  //   smoothWheel: true,
  // }

  return (
    <>
      <Head>
        <title>About Us | Mason Mint</title>
      </Head>
      {/*<ReactLenis root options={{ ...options }}>*/}
      <AboutContent />
      {/*</ReactLenis>*/}
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {},
  }
}
