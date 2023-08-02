import Head from 'next/head'
import { PackagingContent } from '@/modules/Packaging'
import RouterTransitionLayout from '@/app/layouts/RouterTransitionLayout'

const CustomMintingPage = () => {
  return (
    <>
      <Head>
        <title>Packaging | Mason Mint</title>
      </Head>
      <RouterTransitionLayout>
        <PackagingContent />
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
