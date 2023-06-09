import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ButtonBecomeDistributor } from '@/ui/Button'
import styles from '../Header.module.scss'
import classNames from 'classnames'
import { motion } from 'framer-motion'

type MobileMenuProps = {
  opened: boolean
  className?: string
}

export const NavigationLayout: FC<MobileMenuProps> = ({
  opened,
  className,
}) => {
  const divRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const heightOfDiv = divRef.current.offsetHeight
    setHeight(heightOfDiv)
  }, [])

  return (
    <motion.div
      className={classNames(styles.header__content_desktop, [className])}
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className={styles.navigation} ref={divRef}>
        <nav className={styles.navigation__content}>
          <Link className={styles.navigation__content_link} href={'/about'}>
            About Us
          </Link>
          <Link className={styles.navigation__content_link} href={'/'}>
            Custom Minting
          </Link>
          <Link className={styles.navigation__content_link} href={'/'}>
            Designs
          </Link>
          <Link className={styles.navigation__content_link} href={'/'}>
            Packaging
          </Link>
          <Link className={styles.navigation__content_link} href={'/'}>
            Contact Us
          </Link>
        </nav>
        <ButtonBecomeDistributor />
      </div>
    </motion.div>
  )
}
