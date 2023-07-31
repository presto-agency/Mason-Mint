import { PageLayout } from '@/app/layouts/PageLayout'
import { CustomMintingContent } from '@/modules/CustomMinting'

const CustomMintingPage = () => {
  return (
    <PageLayout>
      <CustomMintingContent />
    </PageLayout>
  )
}

export default CustomMintingPage

export const getStaticProps = () => {
  return {
    props: {},
  }
}
