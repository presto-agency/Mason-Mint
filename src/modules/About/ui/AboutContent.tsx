import React, { FC } from 'react'
import FindPartner from '@/modules/About/ui/FindPartner/FindPartner'

import styles from './AboutContent.module.scss'
import HeroInner from '@/ui/HeroInner/HeroInner'

export const AboutContent: FC = () => {
  return (
    <main className={styles.AboutContent}>
      <HeroInner
        title="Finding a partner you can trust is not an easy decision"
        subtitle="Welcome to masonmint"
      />
      <FindPartner />
    </main>
  )
}
