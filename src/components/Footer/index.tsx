import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { Logo } from '@/ui/Logo'
import Arrow from '../../../public/icons/arrow.svg'
import PrestoLogo from '../../../public/icons/presto-logo.svg'

import styles from './Footer.module.scss'
import { Container } from '@/app/layouts/Container'

const LogoBlock = () => {
  return (
    <div className={styles.logoBlock}>
      <Logo className={styles.logo} />
    </div>
  )
}

const InfoBlock = () => {
  return (
    <div className={styles.infoBlock}>
      <div className={styles.infoField}>
        <Arrow className={styles.arrow} />
        <span>Sales@MasonMint.com</span>
      </div>
      <div className={styles.infoField}>
        <Arrow className={styles.arrow} />
        <span>904 326 8600</span>
      </div>
    </div>
  )
}

const NavigationBlock = () => {
  return (
    <nav className={styles.navBlock}>
      <div className={styles.navBlockLeft}>
        <div className={styles.navList}>
          <h6 className={styles.navTitle}>sitemap</h6>
          <div className={styles.navItems}>
            <Link href={'/about'}>ABOUT US</Link>
            <Link href={'/'}>CONTACT US</Link>
          </div>
        </div>
        <div className={styles.navList}>
          <h6 className={styles.navTitle}>products</h6>
          <div className={styles.navItems}>
            <Link href={'/'}>DESIGNS</Link>
            <Link href={'/'}>CUSTOM MINTING</Link>
            <Link href={'/'}>PACKAGING</Link>
          </div>
        </div>
      </div>
      <div className={styles.navList}>
        <h6 className={styles.navTitle}>follow us</h6>
        <div className={classNames(styles.navItems, styles.socials)}>
          <div className={styles.navItems}>
            <Link href={'/'}>FACEBOOK</Link>
            <Link href={'/'}>INSTAGRAM</Link>
          </div>
          <div className={styles.navItems}>
            <Link href={'/'}>TWITTER</Link>
            <Link href={'/'}>LINKEDIN</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export const Footer: FC = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <div className={styles.Footer__content}>
          <div className={styles.top}>
            <LogoBlock />
            <InfoBlock />
            <NavigationBlock />
          </div>
          <div className={styles.bottom}>
            <div className={styles.madeBy}>
              Made by <PrestoLogo className={styles.presto} /> Studiopresto
            </div>
            <div>
              2023 Mason Mint excellence in minting. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
