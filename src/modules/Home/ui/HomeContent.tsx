import dynamic from 'next/dynamic'
import IntroSection from './IntroSection/IntroSection'
import StorySection from './StorySection/StorySection'
import FAQSection from './FAQSection/FAQSection'
import SellSection from './SellSection/SellSection'
const BecomeDistributorSection = dynamic(
  () =>
    import('@/components/BecomeDistributorSection/BecomeDistributorSection'),
  { ssr: false }
)
const ExploreDesignsSection = dynamic(
  () => import('@/modules/Home/ui/ExploreDesignsSection/ExploreDesignsSection'),
  { ssr: false }
)
const CustomDesignsSection = dynamic(
  () => import('@/modules/Home/ui/CustomDesignsSection/CustomDesignsSection'),
  { ssr: false }
)
const FeaturedDesignsSection = dynamic(
  () =>
    import('@/modules/Home/ui/FeaturedDesignsSection/FeaturedDesignsSection'),
  { ssr: false }
)

import styles from './HomeContent.module.scss'
import PageTransitionLayout from '../../../app/layouts/PageTransitionLayout'

const HomeContent = () => {
  return (
    <main className={styles['HomeContent']}>
      <IntroSection />
      <StorySection />
      <ExploreDesignsSection />
      <FeaturedDesignsSection />
      <CustomDesignsSection />
      <SellSection />
      <FAQSection />
      <BecomeDistributorSection />
    </main>
  )
}

export default HomeContent
