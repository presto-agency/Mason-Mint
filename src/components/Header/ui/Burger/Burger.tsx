import { FC } from 'react'
import classNames from 'classnames'
import styles from './Burger.module.scss'

type BurgerProps = {
  opened: boolean
  toggleMenu: () => void
  scrolled: boolean
  theme: 'dark' | 'light'
}

export const Burger: FC<BurgerProps> = ({
  opened,
  scrolled,
  theme,
  toggleMenu,
}) => {
  const mods = {
    [styles.scrolled]: scrolled,
    [styles[theme]]: true,
  }
  return (
    <div
      className={classNames(
        styles.burger,
        mods,
        opened ? styles.opened : undefined
      )}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
