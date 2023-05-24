import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import { Logo } from '@/ui/Logo'
import { DesktopLayout } from './DesktopLayout/DesktopLayout'

import styles from './Header.module.scss'

type HeaderProps = {
  className?: string
  theme: 'dark' | 'light'
}

export const Header: FC<HeaderProps> = ({ className, theme }) => {
  const [scrolled, setScrolled] = useState(false)

  const mods = {
    [styles.scrolled]: scrolled,
    [styles[theme]]: true,
  }

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={classNames(styles.Header, styles[theme], mods, className)}
    >
      <Link href={'/'}>
        <Logo className={styles.logo} />
      </Link>
      <DesktopLayout />
    </header>
  )
}
