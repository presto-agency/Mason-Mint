import { FC } from 'react'
import classNames from 'classnames'
import styles from './MobileMenu.module.scss'
import headerStyles from '../Header.module.scss'
import { Portal } from '@/ui/Portal/Portal'
import { NavigationLayout } from '@/components/Header/ui/NavigationLayout/NavigationLayout'

type MobileMenuProps = {
  className?: string
}

const MobileMenu: FC<MobileMenuProps> = ({ className }) => {
  return (
    <Portal>
      <div className={classNames(styles.menu, [className])}>
        <NavigationLayout className={headerStyles.mobile} />
      </div>
    </Portal>
  )
}

export default MobileMenu
