import React, { FC } from 'react'
import FindPartner from '@/modules/About/ui/FindPartner/FindPartner'

import styles from './AboutContent.module.scss'
import HeroInner from '@/ui/HeroInner/HeroInner'
import WasBorn from '@/modules/About/ui/WasBorn/WasBorn'

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
    </main>
  )
}
