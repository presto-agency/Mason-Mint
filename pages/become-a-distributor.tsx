import Head from 'next/head'
import { BecomeADistributorContent } from '@/modules/BecomeADistributor'
import RouterTransitionLayout from '@/app/layouts/RouterTransitionLayout'

export default function BecomeADistributor() {
  return (
    <>
      <Head>
        <title>Become An Authorized Distributor | Mason Mint</title>
        <meta
          name="description"
          content="Complete the application below and one of our customer service representatives will contact you with more information regarding our products."
        />
      </Head>
      <RouterTransitionLayout>
        <BecomeADistributorContent />
      </RouterTransitionLayout>
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {},
  }
}
