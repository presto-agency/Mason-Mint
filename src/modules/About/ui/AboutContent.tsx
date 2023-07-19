import { FC } from 'react'
import HeroInner from '@/ui/HeroInner/HeroInner'

import styles from './AboutContent.module.scss'

export const AboutContent: FC = () => {
  return (
    <main className={styles.AboutContent}>
      <HeroInner title="Coming soon" subtitle="Welcome to masonmint" />
    </main>
  )
}
