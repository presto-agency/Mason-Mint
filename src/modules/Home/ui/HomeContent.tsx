import React, { FC, useEffect, useState } from 'react'
import { StorySection } from './StorySection/StorySection'
import { IntroSection } from './IntroSection/IntroSection'
// import { FeaturedDesignsSection } from './FeaturedDesignsSection/FeaturedDesignsSection'
import { CustomDesignsSection } from './CustomDesignsSection/CustomDesignsSection'
import styles from './HomeContent.module.scss'
import { FAQSection } from './FAQSection/FAQSection'
import BecomeDistributorSection from '@/components/BecomeDistributorSection/BecomeDistributorSection'
import SellSection from '@/modules/Home/ui/SellSection/SellSection'
import { ExploreDesignsSection } from './ExploreDesignsSection/ExploreDesignsSection' // Regular import

export const HomeContent: FC = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <main className={styles.HomeContent}>
      <IntroSection />
      <StorySection />
      {/* Conditionally render ExploreDesignsSection on the client side */}
      {isClient && <ExploreDesignsSection />}
      {/*<FeaturedDesignsSection />*/}
      <CustomDesignsSection />
      <SellSection />
      <FAQSection />
      <BecomeDistributorSection />
    </main>
  )
}
