import { FC } from 'react'
import classNames from 'classnames'
import styles from './MobileMenu.module.scss'
import headerStyles from '../Header.module.scss'
import { Portal } from '@/ui/Portal/Portal'
import { motion } from 'framer-motion'
import { NavigationLayout } from '@/components/Header/ui/NavigationLayout/NavigationLayout'

type MobileMenuProps = {
  className?: string
}

const headerVariant = {
  animate: { height: '100%' },
  initial: { height: '0%' },
  exit: { height: '0%' },
  transition: {
    ease: 'easeInOut',
    duration: 0.5,
    delay: 0.5,
  },
}

const MobileMenu: FC<MobileMenuProps> = ({ className }) => {
  return (
    <Portal>
      <motion.div
        className={classNames(styles.menu, [className])}
        {...headerVariant}
      >
        <NavigationLayout className={headerStyles.mobile} isAnimated={true} />
      </motion.div>
    </Portal>
  )
}

export default MobileMenu
