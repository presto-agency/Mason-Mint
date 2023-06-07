import { FC } from 'react'
import Link from 'next/link'
import { ButtonBecomeDistributor } from '@/ui/Button'
import styles from '../Header.module.scss'

export const DesktopLayout: FC = () => {
  return (
    <div className={styles.header__content_desktop}>
      <nav className={styles.navigation}>
        <Link className={styles.navigation__link} href={'/about'}>
          ABOUT US
        </Link>
        <Link className={styles.navigation__link} href={'/'}>
          CUSTOM MINTING
        </Link>
        <Link className={styles.navigation__link} href={'/'}>
          DESIGNS
        </Link>
        <Link className={styles.navigation__link} href={'/'}>
          PACKAGING
        </Link>
        <Link className={styles.navigation__link} href={'/'}>
          CONTACT US
        </Link>
      </nav>
      <ButtonBecomeDistributor />
    </div>
  )
}
