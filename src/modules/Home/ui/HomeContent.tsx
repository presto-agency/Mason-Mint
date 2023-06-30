import { FC } from 'react'

import { StorySection } from './StorySection/StorySection'
import { IntroSection } from './IntroSection/IntroSection'
import { ExploreDesignsSection } from './ExploreDesignsSection/ExploreDesignsSection'
import { FeaturedDesignsSection } from './FeaturedDesignsSection/FeaturedDesignsSection'
import { CustomDesignsSection } from './CustomDesignsSection/CustomDesignsSection'

import styles from './HomeContent.module.scss'
import { FAQSection } from './FAQSection/FAQSection'
import { BecomeDistributorSection } from '@/components/BecomeDistributorSection'

export const HomeContent: FC = () => {
  return (
    <main className={styles.HomeContent}>
      <IntroSection />
      {/*<StorySection />*/}
      {/*<ExploreDesignsSection />*/}
      {/*<FeaturedDesignsSection />*/}
      {/*<CustomDesignsSection />*/}
      {/* SELL OUR PRODUCTS SECTION  */}
      {/*<FAQSection />*/}
      {/*<BecomeDistributorSection />*/}
    </main>
  )
}
