import { FC } from 'react'
import classNames from 'classnames'
import styles from './MobileMenu.module.scss'
import headerStyles from '../Header.module.scss'
import { Portal } from '@/ui/Portal/Portal'
import { motion } from 'framer-motion'
import { NavigationLayout } from '@/components/Header/ui/NavigationLayout/NavigationLayout'

type MobileMenuProps = {
  opened: boolean
  className?: string
}

const variants = {
  open: {
    height: '100%',
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.5,
    },
  },
  closed: {
    height: '0%',
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.5,
    },
  },
}

const MobileMenu: FC<MobileMenuProps> = ({ opened, className }) => {
  return (
    <Portal>
      <motion.div
        className={classNames(styles.menu, [className])}
        variants={variants}
        animate={'open'}
        initial="closed"
        exit="closed"
      >
        <NavigationLayout className={headerStyles.mobile} />
      </motion.div>
    </Portal>
  )
}

export default MobileMenu
