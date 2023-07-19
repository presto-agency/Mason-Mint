import { FC } from 'react'
import HeroInner from '@/ui/HeroInner/HeroInner'

import styles from './PackagingContent.module.scss'

export const PackagingContent: FC = () => {
  return (
    <main className={styles['PackagingContent']}>
      <HeroInner title="Coming soon" subtitle="Packaging" />
    </main>
  )
}
