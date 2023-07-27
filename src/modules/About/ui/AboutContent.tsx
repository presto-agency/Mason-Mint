import React, { FC } from 'react'
import HeroInner from '@/ui/HeroInner/HeroInner'
import WasBorn from '@/modules/About/ui/WasBorn/WasBorn'
import AllProducts from '@/modules/About/ui/AllProducts/AllProducts'
import BecomeDistributorSection from '@/components/BecomeDistributorSection/BecomeDistributorSection'
import WhatWeDo from '@/modules/About/ui/WhatWeDo/WhatWeDo'
import dynamic from 'next/dynamic'
const FindPartner = dynamic(
  () => import('@/modules/About/ui/FindPartner/FindPartner'),
  { ssr: false }
)

import styles from './AboutContent.module.scss'

export const AboutContent: FC = () => {
  return (
    <main className={styles.AboutContent}>
      <HeroInner
        title="Finding a partner you can trust is not an easy decision"
        subtitle="Welcome to masonmint"
        columns={10}
      />
      <FindPartner />
      <WasBorn />
      <AllProducts />
      <WhatWeDo />
      <BecomeDistributorSection />
    </main>
  )
}
