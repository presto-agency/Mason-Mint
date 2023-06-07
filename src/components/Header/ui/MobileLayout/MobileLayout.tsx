import { FC, memo } from 'react'
import dynamic from 'next/dynamic'
import styles from '../Header.module.scss'
import { Burger } from '../Burger/Burger'

const MobileMenu = dynamic(() => import('../MobileMenu/MobileMenu'))

type MobileLayoutProps = {
  scrolled: boolean
  theme: 'dark' | 'light'
  menuOpened: boolean
  toggleMenu: () => void
}

export const MobileLayout: FC<MobileLayoutProps> = memo(
  ({ menuOpened, scrolled, theme, toggleMenu }) => {
    return (
      <div className={styles.header__content_mobile}>
        <Burger
          scrolled={scrolled}
          theme={theme}
          opened={menuOpened}
          toggleMenu={toggleMenu}
        />
        {menuOpened && <MobileMenu />}
      </div>
    )
  }
)
