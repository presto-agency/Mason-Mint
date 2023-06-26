import { FC, useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import useWindowDimensions from '@/hooks/useWindowDimensions'
import { Logo } from '@/ui/Logo'
import { MobileLayout } from './MobileLayout/MobileLayout'
import Container from '@/app/layouts/Container'
import { ButtonPrimary } from '@/ui/Button'
import routes from '@/utils/routes'

import styles from './Header.module.scss'
import stylesButton from '@/ui/Button/ui/ButonPrimary/ButtonPrimary.module.scss'

type HeaderProps = {
  theme: 'dark' | 'light'
}

export const Header: FC<HeaderProps> = ({ theme: initialTheme }) => {
  const [scrolled, setScrolled] = useState(false)
  const [scrolledSubstrate, setScrolledSubstrate] = useState(false)
  const [substrateHeight, setSubstrateHeight] = useState(0)
  const [scrolledAndOpened, setScrolledAndOpened] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)
  const [headerTheme, setHeaderTheme] = useState(initialTheme)
  const { width } = useWindowDimensions()
  const headerRef = useRef<HTMLDivElement>(null)

  const mods = {
    [styles.scrolled]: scrolled,
    [styles[headerTheme]]: true,
    [styles.dark_opened]: menuOpened,
    [styles._scrolled]: scrolledAndOpened,
  }

  const modsSubstrate = {
    [styles.scrolled]: scrolledSubstrate,
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
      setScrolledSubstrate(true)
    } else {
      setScrolled(false)
      setScrolledSubstrate(false)
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
      setScrolledAndOpened(false)
    }

    if (!menuOpened) {
      setHeaderTheme(initialTheme)
    }

    if (menuOpened && window.scrollY > 10) {
      setScrolledAndOpened(true)
    }

    if (menuOpened && window.scrollY < 10) {
      setScrolledAndOpened(false)
    }
  }, [menuOpened, initialTheme])

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

  return (
    <>
      <header ref={headerRef} className={classNames(styles.header, mods)}>
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
                  className={stylesButton['small']}
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
        style={{ height: substrateHeight }}
        className={classNames(styles.substrate, modsSubstrate)}
      ></div>
    </>
  )
}
