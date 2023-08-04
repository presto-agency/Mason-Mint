import { FC, useCallback, useEffect, useState, memo } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { Logo } from '@/ui/Logo'
import { MobileLayout } from './MobileLayout/MobileLayout'
import Container from '@/app/layouts/Container'
import { useRouter } from 'next/router'
import { NavigationLayout } from '@/components/Header/ui/NavigationLayout/NavigationLayout'

import styles from './Header.module.scss'

type HeaderProps = {
  theme: 'dark' | 'light'
}

const Header: FC<HeaderProps> = ({ theme: initialTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)
  const [headerTheme, setHeaderTheme] = useState(initialTheme)
  const { width } = useWindowDimensions()
  const router = useRouter()

  const mods = {
    [styles[headerTheme]]: true,
    [styles.scrolled]: scrolled,
    [styles.opened]: menuOpened,
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
      setHeaderTheme('light')
    } else {
      setScrolled(false)
      setHeaderTheme(initialTheme)
    }
  }, [menuOpened, initialTheme])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    if (menuOpened && !scrolled) {
      setHeaderTheme('dark')
    }

    if (!menuOpened && !scrolled) {
      setHeaderTheme(initialTheme)
    }

    if (menuOpened && scrolled) {
      setHeaderTheme('dark')
    }

    if (!menuOpened && scrolled) {
      setHeaderTheme('light')
    }
  }, [menuOpened, initialTheme, scrolled])

  useEffect(() => {
    if (width > 991) setMenuOpened(false)
  }, [width])

  useEffect(() => {
    document.body.style.overflow = menuOpened ? 'hidden' : 'auto'
  }, [menuOpened])

  useEffect(() => {
    const handleRouteChange = () => {
      setMenuOpened(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])

  return (
    <>
      <header className={classNames(styles['header'], mods)}>
        <Container>
          <div className={styles['header__content']}>
            <Link
              scroll={false}
              className={styles['header__content_link']}
              href={'/'}
            >
              <Logo className={styles['logo']} />
            </Link>
            <NavigationLayout />
            <MobileLayout
              scrolled={scrolled}
              theme={headerTheme}
              menuOpened={menuOpened}
              toggleMenu={toggleMenu}
            />
          </div>
        </Container>
      </header>
    </>
  )
}

export default memo(Header)
