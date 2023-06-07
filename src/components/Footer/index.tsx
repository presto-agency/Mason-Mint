import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { Logo } from '@/ui/Logo'
import Arrow from '../../../public/icons/arrow.svg'
import PrestoLogo from '../../../public/icons/presto-logo.svg'

import styles from './Footer.module.scss'
import Container from '@/app/layouts/Container'

const LogoBlock = () => {
  return (
    <div className={styles.logo}>
      <Logo className={styles.logo__item} />
    </div>
  )
}

const InfoBlock = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__field}>
        <Arrow className={styles.arrow} />
        <span>Sales@MasonMint.com</span>
      </div>
      <div className={styles.info__field}>
        <Arrow className={styles.arrow} />
        <span>904 326 8600</span>
      </div>
    </div>
  )
}

const NavigationBlock = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__left}>
        <div className={styles.navigation__left_list}>
          <h6 className={styles.title}>sitemap</h6>
          <div className={styles.title__items}>
            <Link className={styles.title__items_link} href={'/about'}>
              ABOUT US
            </Link>
            <Link className={styles.title__items_link} href={'/'}>
              CONTACT US
            </Link>
          </div>
        </div>
        <div className={styles.navigation__left_list}>
          <h6 className={styles.title}>products</h6>
          <div className={styles.title__items}>
            <Link className={styles.title__items_link} href={'/'}>
              DESIGNS
            </Link>
            <Link className={styles.title__items_link} href={'/'}>
              CUSTOM MINTING
            </Link>
            <Link className={styles.title__items_link} href={'/'}>
              PACKAGING
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.navigation__left_list}>
        <h6 className={styles.title}>follow us</h6>
        <div className={classNames(styles.title__items)}>
          <div className={styles.title__items}>
            <Link className={styles.title__items_link} href={'/'}>
              FACEBOOK
            </Link>
            <Link className={styles.title__items_link} href={'/'}>
              INSTAGRAM
            </Link>
          </div>
          <div className={styles.title__items}>
            <Link className={styles.title__items_link} href={'/'}>
              TWITTER
            </Link>
            <Link className={styles.title__items_link} href={'/'}>
              LINKEDIN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__content}>
          <div className={styles.footer__content_top}>
            <LogoBlock />
            <InfoBlock />
            <NavigationBlock />
          </div>
          <div className={styles.footer__content_bottom}>
            <div className={styles.presto}>
              Made by <PrestoLogo className={styles.presto__logo} />{' '}
              Studiopresto
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
