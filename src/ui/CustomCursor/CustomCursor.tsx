import React, { useEffect, useState } from 'react'
import styles from './CustomCursor.module.scss'
import { motion } from 'framer-motion'
import { useScrollPosition } from '@/hooks/useScrollPosition'

const CustomCursor: React.FC = () => {
  const [cursorVariant, setCursorVariant] = useState('default')
  const { scrollPosition: mousePosition } = useScrollPosition({ x: 0, y: 0 })

  const variants = {
    default: {
      width: 16,
      height: 16,
      x: mousePosition.x,
      y: mousePosition.y,
    },
    onLink: {
      width: 24,
      height: 24,
      x: mousePosition.x,
      y: mousePosition.y,
    },
    onInput: {
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
    damping: 35,
  }

  const onLink = () => {
    setCursorVariant('onLink')
  }

  const leaveDefault = () => {
    setCursorVariant('default')
  }

  const onInput = () => {
    setCursorVariant('onInput')
    console.log('hi')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const links = document.querySelectorAll('a, button')
      links.forEach((link) => {
        link.addEventListener('mouseenter', onLink)
        link.addEventListener('mouseleave', leaveDefault)
      })
      const inputs = document.querySelectorAll('input, textarea')
      inputs.forEach((input) => {
        input.addEventListener('mouseenter', onInput)
        input.addEventListener('mouseleave', leaveDefault)
      })
    }
  }, [])

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
