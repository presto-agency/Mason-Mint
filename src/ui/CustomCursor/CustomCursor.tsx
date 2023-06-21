import React, { useEffect, useState } from 'react'
import styles from './CustomCursor.module.scss'
import { motion } from 'framer-motion'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useRouter } from 'next/router'

const CustomCursor: React.FC = () => {
  const [cursorVariant, setCursorVariant] = useState('default')
  const { scrollPosition: mousePosition } = useScrollPosition({ x: 0, y: 0 })
  const { route } = useRouter()

  const variants = {
    default: {
      width: 11,
      height: 11,
      x: mousePosition.x,
      y: mousePosition.y,
    },
    onSubject: {
      width: 0,
      height: 0,
      opacity: 0,
      x: mousePosition.x,
      y: mousePosition.y,
    },
  }

  const transition = {
    type: 'spring',
    mass: 0.6,
    stiffness: 500,
    damping: 28,
  }

  const onSubject = () => {
    setCursorVariant('onSubject')
  }

  const leaveDefault = () => {
    setCursorVariant('default')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const links = document.querySelectorAll('a, button, input, textarea')
      links.forEach((link) => {
        link.addEventListener('mouseenter', onSubject)
        link.addEventListener('mouseleave', leaveDefault)
      })
    }
  }, [route])

  return (
    <motion.div
      className={styles['CustomCursor']}
      variants={variants}
      animate={cursorVariant}
      transition={transition}
    ></motion.div>
  )
}

export default CustomCursor
