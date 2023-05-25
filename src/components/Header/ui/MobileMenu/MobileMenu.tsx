import { FC } from 'react'
import classNames from 'classnames'
import styles from './MobileMenu.module.scss'
import { Portal } from '@/ui/Portal/Portal'

type MobileMenuProps = {
  className?: string
}

const MobileMenu: FC<MobileMenuProps> = ({ className }) => {
  return (
    <Portal>
      <div className={classNames(styles.MobileMenu, [className])}></div>
    </Portal>
  )
}

export default MobileMenu
