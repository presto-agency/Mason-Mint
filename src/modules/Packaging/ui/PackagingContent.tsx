import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import HeroInner from '@/ui/HeroInner/HeroInner'
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo'
import BecomeDistributorSection from '@/components/BecomeDistributorSection/BecomeDistributorSection'
import NaturalVehicle from '@/modules/Packaging/ui/NaturalVehicle/NaturalVehicle'
import NumismaticPackaging from '@/modules/Packaging/ui/NumismaticPackaging/NumismaticPackaging'
const HeroDetail = dynamic(() => import('@/ui/HeroDetail/HeroDetail'), {
  ssr: false,
})

import styles from './PackagingContent.module.scss'

const sliderImages = ['/images/packaging/hero.jpg']

export const PackagingContent: FC = () => {
  return (
    <main className={styles['PackagingContent']}>
      <HeroInner
        title="Creation of any packaging is always the coin"
        subtitle="Packaging"
        description="It inspires the creative concepts for the narrative, and then the selection of the appropriate form and design. "
        columns={9}
      />
      <HeroDetail
        sliderImages={sliderImages}
        image="/images/packaging/hero.jpg"
        className={styles['HeroInner']}
      />
      <NaturalVehicle />
      <NumismaticPackaging />
      <WhatWeDo />
      <BecomeDistributorSection />
    </main>
  )
}
