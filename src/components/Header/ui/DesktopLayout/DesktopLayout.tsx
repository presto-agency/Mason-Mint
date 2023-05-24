import { FC } from 'react'
import Link from 'next/link'
import { ButtonBecomeDistriburor } from '@/ui/Button'
import styles from '../Header.module.scss'

export const DesktopLayout: FC = () => {
  return (
    <>
      <nav className={styles.navigation}>
        <Link href={'/about'}>ABOUT US</Link>
        <Link href={'/'}>CUSTOM MINTING</Link>
        <Link href={'/'}>DESIGNS</Link>
        <Link href={'/'}>PACKAGING</Link>
        <Link href={'/'}>CONTACT US</Link>
      </nav>
      <ButtonBecomeDistriburor />
    </>
  )
}
