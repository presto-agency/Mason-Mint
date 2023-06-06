import { FC, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import useWindowDimensions from '@/hooks/useWindowDimensions'

import { Logo } from '@/ui/Logo'
import { DesktopLayout } from './DesktopLayout/DesktopLayout'
import { MobileLayout } from './MobileLayout/MobileLayout'

import styles from './Header.module.scss'

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

  return (
    <header className={classNames(styles.Header, mods)}>
      <div className="base-container">
        <div className={styles.Header__content}>
          <Link href={'/'}>
            <Logo className={styles.logo} />
          </Link>
          <DesktopLayout />
          <MobileLayout
            scrolled={scrolled}
            theme={headerTheme}
            menuOpened={menuOpened}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </header>
  )
}
