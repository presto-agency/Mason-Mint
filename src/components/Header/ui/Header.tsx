import { FC, useCallback, useEffect, useState, memo } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { Logo } from '@/ui/Logo'
import { MobileLayout } from './MobileLayout/MobileLayout'
import Container from '@/app/layouts/Container'
import { motion } from 'framer-motion'

import styles from './Header.module.scss'
import { useRouter } from 'next/router'
import { NavigationLayout } from '@/components/Header/ui/NavigationLayout/NavigationLayout'

type HeaderProps = {
  theme: 'dark' | 'light'
}

const Header: FC<HeaderProps> = ({ theme: initialTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)
  const [headerTheme, setHeaderTheme] = useState(initialTheme)
  const { width } = useWindowDimensions()
  const router = useRouter()

  const bgVariant = {
    opened: {
      backgroundColor: 'var(--black)',
    },
    closed: {
      backgroundColor: scrolled ? 'var(--white)' : '',
      transition: {
        delay: scrolled ? 0.8 : 0,
      },
    },
  }

  const mods = {
    [styles[headerTheme]]: true,
    [styles.scrolled]: scrolled,
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
      <motion.header
        className={classNames(styles.header, mods)}
        variants={bgVariant}
        initial="closed"
        animate={menuOpened ? 'opened' : 'closed'}
      >
        <Container>
          <div className={styles.header__content}>
            <Link className={styles.header__content_link} href={'/'}>
              <Logo className={styles.logo} />
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
      </motion.header>
    </>
  )
}

export default memo(Header)
