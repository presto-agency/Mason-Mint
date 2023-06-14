import { FC, useRef } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import ContactInfo from '@/ui/ContactInfo/ContactInfo'
import { Logo } from '@/ui/Logo'
import { useScroll, useTransform, motion } from 'framer-motion'
import PrestoLogo from '../../../public/icons/presto-logo.svg'

import styles from './Footer.module.scss'

const LogoBlock = () => {
  return (
    <div className={styles.logo}>
      <Logo className={styles.logo__item} />
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
  const footerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 0.3], [-400, 0])
  return (
    <div ref={footerRef}>
      <motion.footer className={styles.footer} style={{ y }}>
        <Container>
          <div className={styles.footer__content}>
            <div className={styles.footer__content_top}>
              <LogoBlock />
              <ContactInfo />
              <NavigationBlock />
            </div>
            <div className={styles.footer__content_bottom}>
              <div className={styles.creators}>
                Made by <PrestoLogo className={styles.creators__logo} />{' '}
                Studiopresto
              </div>
              <div>
                2023 Mason Mint excellence in minting. All rights reserved.
              </div>
            </div>
          </div>
        </Container>
      </motion.footer>
    </div>
  )
}
