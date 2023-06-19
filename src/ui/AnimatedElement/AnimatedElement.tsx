import { FC, ReactNode, useRef } from 'react'
import { useInView, motion } from 'framer-motion'

import styles from './AnimatedElement.module.scss'

type AnimatedElementProps = {
  children: ReactNode
}

const AnimatedElement: FC<AnimatedElementProps> = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const elementFrame = {
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        type: 'spring',
        duration: 2,
        delay: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 5,
      rotate: 1,
    },
  }

  return (
    <motion.div
      className={styles['element']}
      variants={elementFrame}
      initial="hidden"
      animate={isInView ? 'visible' : ''}
      ref={ref}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedElement
