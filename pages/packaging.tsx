import Head from 'next/head'
import { PackagingContent } from '@/modules/Packaging'

const CustomMintingPage = () => {
  return (
    <>
      <Head>
        <title>Packaging | Mason Mint</title>
      </Head>
      <PackagingContent />
    </>
  )
}

export default CustomMintingPage

export const getStaticProps = () => {
  return {
    props: {},
  }
}
