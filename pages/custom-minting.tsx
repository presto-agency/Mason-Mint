import Head from 'next/head'
import { CustomMintingContent } from '@/modules/CustomMinting'

const CustomMintingPage = () => {
  return (
    <>
      <Head>
        <title>Custom Minting | Mason Mint</title>
      </Head>
      <CustomMintingContent />
    </>
  )
}

export default CustomMintingPage

export const getStaticProps = () => {
  return {
    props: {},
  }
}
