import { FC } from 'react'
import HeroInner from '@/ui/HeroInner/HeroInner'

import styles from './CustomMintingContent.module.scss'

export const CustomMintingContent: FC = () => {
  return (
    <main className={styles['CustomMintingContent']}>
      <HeroInner title="Coming soon" subtitle="Custom Minting" />
    </main>
  )
}
