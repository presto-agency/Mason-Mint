import { FC } from 'react'
import Link from 'next/link'
import { ButtonBecomeDistributor } from '@/ui/Button'
import styles from '../Header.module.scss'
import classNames from 'classnames'

type MobileMenuProps = {
  className?: string
}

export const NavigationLayout: FC<MobileMenuProps> = ({ className }) => {
  return (
    <div className={classNames(styles.header__content_desktop, [className])}>
      <nav className={styles.navigation}>
        <Link className={styles.navigation__link} href={'/about'}>
          About Us
        </Link>
        <Link className={styles.navigation__link} href={'/'}>
          Custom Minting
        </Link>
        <Link className={styles.navigation__link} href={'/'}>
          Designs
        </Link>
        <Link className={styles.navigation__link} href={'/'}>
          Packaging
        </Link>
        <Link className={styles.navigation__link} href={'/'}>
          Contact Us
        </Link>
      </nav>
      <ButtonBecomeDistributor />
    </div>
  )
}
