import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ButtonBecomeDistributor } from '@/ui/Button'
import styles from '../Header.module.scss'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import AnimatedTextCharacter from '@/components/Header/ui/NavigationLayout/AnimatedTextCharacter'

type MobileMenuProps = {
  className?: string
}

export const NavigationLayout: FC<MobileMenuProps> = ({ className }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (divRef.current) {
      const heightOfDiv = divRef.current.offsetHeight
      setHeight(heightOfDiv)
    }
  }, [])

  const motionProps = {
    initial: { height: 0 },
    animate: { height: height },
    transition: { delay: 0.5, duration: 0.5 },
  }

  return (
    <motion.div
      className={classNames(styles.header__content_desktop, [className])}
      {...motionProps}
    >
      <div className={styles.navigation} ref={divRef}>
        <nav className={styles.navigation__content}>
          <Link className={styles.navigation__content_link} href={'/'}>
            <AnimatedTextCharacter text="About Us" />
          </Link>
          <Link className={styles.navigation__content_link} href={'/'}>
            <AnimatedTextCharacter text="Custom Minting" />
          </Link>
          <Link className={styles.navigation__content_link} href={'/'}>
            <AnimatedTextCharacter text="Designs" />
          </Link>
          <Link className={styles.navigation__content_link} href={'/'}>
            <AnimatedTextCharacter text="Packaging" />
          </Link>
          <Link className={styles.navigation__content_link} href={'/'}>
            <AnimatedTextCharacter text="Contact Us" />
          </Link>
        </nav>
        <ButtonBecomeDistributor />
      </div>
    </motion.div>
  )
}
