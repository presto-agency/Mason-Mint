import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'

const variants = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const PageTransitionLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={variants}
  >
    {children}
  </motion.div>
)
export default PageTransitionLayout
