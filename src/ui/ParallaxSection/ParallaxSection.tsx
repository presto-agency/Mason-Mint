import React, { FC, ReactNode, useRef } from 'react'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

type ParallaxSection = {
  children: ReactNode
  parallaxValues?: [number, number]
  className?: string
}

const ParallaxSection: FC<ParallaxSection> = ({
  children,
  parallaxValues = [0, 150],
  className,
}) => {
  const useParallax = (value: MotionValue<number>) => {
    return useTransform(value, [0, 1], parallaxValues)
  }
  const refTarget = useRef(null)

  const { scrollYProgress } = useScroll({
    target: refTarget,
    offset: ['start end', 'end start'],
  })
  const y = useParallax(scrollYProgress)
  return (
    <motion.div
      ref={refTarget}
      className={className}
      style={{
        y,
      }}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxSection
