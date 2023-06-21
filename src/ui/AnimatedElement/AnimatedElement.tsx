import { FC, ReactNode, useRef } from 'react'
import classNames from 'classnames'
import { useInView, motion } from 'framer-motion'

import styles from './AnimatedElement.module.scss'

type AnimatedElementProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const AnimatedElement: FC<AnimatedElementProps> = ({
  children,
  className,
  delay = 0,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const elementFrame = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'anticipate',
        duration: 2,
        delay,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <motion.div
      className={classNames(styles['element'], className)}
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
