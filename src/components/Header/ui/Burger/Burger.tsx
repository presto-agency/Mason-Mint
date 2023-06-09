import { FC } from 'react'
import classNames from 'classnames'
import styles from './Burger.module.scss'
import { motion } from 'framer-motion'

type BurgerProps = {
  opened: boolean
  toggleMenu: () => void
  scrolled: boolean
  theme: 'dark' | 'light'
}

const topLineVariants = {
  open: {
    rotate: 45,
    top: '50%',
    translateY: '-50%',
    transition: {
      top: { duration: 0.2 },
      rotate: { delay: 0.5, duration: 0.2 },
    },
  },
  closed: {
    rotate: 0,
    top: '0%',
    translateY: '0%',
    transition: {
      top: { delay: 0.5, duration: 0.2 },
      rotate: { duration: 0.2 },
    },
  },
}

const middleLineVariants = {
  open: {
    rotate: -45,
    transition: {
      rotate: { delay: 0.5, duration: 0.2 },
    },
  },
  closed: {
    rotate: 0,
    translateY: '-50%',
    transition: {
      rotate: { duration: 0.2 },
    },
  },
}

const bottomLineVariants = {
  open: {
    opacity: 0,
    bottom: '50%',
    translateY: '50%',
    transition: {
      bottom: { duration: 0.3 },
      opacity: { delay: 0.5, duration: 0.2 },
    },
  },
  closed: {
    opacity: 1,
    bottom: '0%',
    translateY: '0%',
    transition: {
      opacity: { delay: 0.5 },
      bottom: { delay: 0.5, duration: 0.2 },
      translateY: { delay: 0.5, duration: 0.2 },
    },
  },
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
    <motion.div
      className={classNames(styles.burger, mods)}
      onClick={toggleMenu}
      initial={false}
      animate={opened ? 'open' : 'closed'}
    >
      <motion.span variants={topLineVariants}></motion.span>
      <motion.span variants={middleLineVariants}></motion.span>
      <motion.span variants={bottomLineVariants}></motion.span>
    </motion.div>
  )
}
