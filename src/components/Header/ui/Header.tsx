import { FC, useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { Logo } from '@/ui/Logo'
import { MobileLayout } from './MobileLayout/MobileLayout'
import Container from '@/app/layouts/Container'
import routes from '@/utils/routes'

import styles from './Header.module.scss'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import { useRouter } from 'next/router'

type HeaderProps = {
  theme: 'dark' | 'light'
}

export const Header: FC<HeaderProps> = ({ theme: initialTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [substrateHeight, setSubstrateHeight] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)
  const [headerTheme, setHeaderTheme] = useState(initialTheme)
  const { width } = useWindowDimensions()
  const headerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const mods = {
    [styles[headerTheme]]: true,
    [styles.opened]: menuOpened,
  }

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev)
  }

  const handleScroll = useCallback(() => {
    if (headerRef.current) {
      const heightOfHeader = headerRef.current.offsetHeight
      setSubstrateHeight(heightOfHeader)
    }

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
    if (headerRef.current) {
      const heightOfHeader = headerRef.current.offsetHeight
      setSubstrateHeight(heightOfHeader)
    }
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
      <header
        ref={headerRef}
        className={classNames(styles.header, mods)}
        style={{ padding: scrolled ? '12rem 0' : '' }}
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
                    href={routes.public.about}
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
                  <Link
                    className={styles.navigation__content_link}
                    href={routes.public.contactUs}
                  >
                    Contact Us
                  </Link>
                </nav>
                <ButtonPrimary
                  variant="blue"
                  arrows={false}
                  size={'small'}
                  href={routes.public.becomeDistributor}
                >
                  Become A Distributor
                </ButtonPrimary>
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
      <div
        style={{
          height: substrateHeight,
          backgroundColor: scrolled ? 'var(--white)' : '',
        }}
        className={classNames(styles.substrate)}
      ></div>
    </>
  )
}
