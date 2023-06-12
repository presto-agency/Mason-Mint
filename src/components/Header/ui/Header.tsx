import { FC, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { Logo } from '@/ui/Logo'
import { NavigationLayout } from './NavigationLayout/NavigationLayout'
import { MobileLayout } from './MobileLayout/MobileLayout'
import Container from '@/app/layouts/Container'

import styles from './Header.module.scss'
import { motion } from 'framer-motion'
import { ButtonBecomeDistributor } from '@/ui/Button'

type HeaderProps = {
  theme: 'dark' | 'light'
}

export const Header: FC<HeaderProps> = ({ theme: initialTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)
  const [headerTheme, setHeaderTheme] = useState(initialTheme)
  const { width } = useWindowDimensions()

  const mods = {
    [styles.scrolled]: scrolled,
    [styles[headerTheme]]: true,
  }

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev)
  }

  const handleScroll = useCallback(() => {
    if (menuOpened) {
      return
    }
    if (window.scrollY > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [menuOpened])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    if (menuOpened) {
      setScrolled(false)
      setHeaderTheme('dark')
    }

    if (!menuOpened && window.scrollY > 10) {
      setScrolled(true)
    }

    if (!menuOpened) {
      setHeaderTheme(initialTheme)
    }
  }, [menuOpened, initialTheme])

  useEffect(() => {
    if (width > 1250) setMenuOpened(false)
  }, [width])

  useEffect(() => {
    document.body.style.overflow = menuOpened ? 'hidden' : 'auto'
  }, [menuOpened])

  return (
    <header
      className={`${classNames(styles.header, mods)} ${
        menuOpened ? styles.active : ''
      }`}
    >
      <Container>
        <div className={styles.header__content}>
          <Link className={styles.header__content_link} href={'/'}>
            <Logo className={styles.logo} />
          </Link>
          <div className={styles.header__content_desktop}>
            <div className={styles.navigation}>
              <nav className={styles.navigation__content}>
                <Link
                  className={styles.navigation__content_link}
                  href={'/about'}
                >
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
          </div>
          <MobileLayout
            scrolled={scrolled}
            theme={headerTheme}
            menuOpened={menuOpened}
            toggleMenu={toggleMenu}
          />
        </div>
      </Container>
    </header>
  )
}
