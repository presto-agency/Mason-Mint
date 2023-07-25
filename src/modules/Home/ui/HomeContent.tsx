import dynamic from 'next/dynamic'
import { StorySection } from './StorySection/StorySection'
import { IntroSection } from './IntroSection/IntroSection'
import { FAQSection } from './FAQSection/FAQSection'
import BecomeDistributorSection from '@/components/BecomeDistributorSection/BecomeDistributorSection'
import SellSection from './SellSection/SellSection'
const ExploreDesignsSection = dynamic(
  () => import('@/modules/Home/ui/ExploreDesignsSection/ExploreDesignsSection'),
  { ssr: false }
)
const CustomDesignsSection = dynamic(
  () => import('@/modules/Home/ui/CustomDesignsSection/CustomDesignsSection'),
  { ssr: false }
)

import styles from './HomeContent.module.scss'

const HomeContent = () => {
  return (
    <main className={styles['HomeContent']}>
      <IntroSection />
      <StorySection />
      <ExploreDesignsSection />
      <CustomDesignsSection />
      <SellSection />
      <FAQSection />
      <BecomeDistributorSection />
    </main>
  )
}

export default HomeContent
