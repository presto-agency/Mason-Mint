import { FC, useRef } from 'react'
import classNames from 'classnames'

import { useScroll } from 'framer-motion'
import { Coin } from './Coin/Coin'
import { MarqueeText } from '@/ui/MarqueeText/MarqueeText'

import styles from './DiscoverMasonMintSection.module.scss'

type DiscoverMasonMintSectionProps = {
  className?: string
}

export const DiscoverMasonMintSection: FC<DiscoverMasonMintSectionProps> = ({
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  })

  return (
    <section
      ref={targetRef}
      className={classNames(styles['DiscoverMasonMintSection'], className)}
    >
      <div className={styles['stickyContainer']}>
        <Coin scrollYProgress={scrollYProgress} />
        <MarqueeText
          text={'discover meet mason mint.'}
          scrollYProgress={scrollYProgress}
          outputRange={['75%', '-100%']}
        />
      </div>
    </section>
  )
}
