import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

const RouterTransitionLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'linear', duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default RouterTransitionLayout
