import Head from 'next/head'
import { CustomMintingContent } from '@/modules/CustomMinting'
import RouterTransitionLayout from '@/app/layouts/RouterTransitionLayout'

const CustomMintingPage = () => {
  return (
    <>
      <Head>
        <title>Custom Minting | Mason Mint</title>
      </Head>
      <RouterTransitionLayout>
        <CustomMintingContent />
      </RouterTransitionLayout>
    </>
  )
}

export default CustomMintingPage

export const getStaticProps = () => {
  return {
    props: {},
  }
}
