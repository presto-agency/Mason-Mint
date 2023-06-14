import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ButtonBecomeDistributorAnimated } from '@/ui/Button'
import styles from '../Header.module.scss'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import AnimatedTextCharacter from '@/components/Header/ui/NavigationLayout/AnimatedTextCharacter'

type MotionProps = {
  animate: { height: string }
  initial: { height: string }
  exit: { height: string }
  transition: { ease: string; duration: number; delay: number }
}

type MobileMenuProps = {
  motionProps: MotionProps
  className?: string
}

export const NavigationLayout: FC<MobileMenuProps> = ({
  motionProps,
  className,
}) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (divRef.current) {
      const heightOfDiv = divRef.current.offsetHeight
      setHeight(heightOfDiv)
    }
  }, [])

  return (
    <motion.div
      className={classNames(styles.header__content_desktop, [className])}
      animate={{ height: height }}
      initial={motionProps.initial}
      exit={motionProps.exit}
      transition={motionProps.transition}
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
        <ButtonBecomeDistributorAnimated />
      </div>
    </motion.div>
  )
}
