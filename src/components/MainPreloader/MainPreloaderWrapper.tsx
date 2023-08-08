import React, { FC, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import MainPreloader from '@/components/MainPreloader/MainPreloader'
import { useLenis } from '@studio-freight/react-lenis'

const MainPreloaderWrapper: FC = () => {
  const [progress, setProgress] = useState<number>(0)
  const [isVisible, setIsVisible] = useState(true)
  const lenis = useLenis()

  // Disable scroll
  if (lenis) {
    lenis.stop()
  }

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevState) => {
        if (prevState === 3) {
          clearInterval(progressInterval)
          setIsVisible(false)
          return prevState
        }
        // Back to top
        window.scrollTo(0, 0)
        return prevState + 1
      })
    }, 800)
    return () => {
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && <MainPreloader progress={progress} />}
    </AnimatePresence>
  )
}

export default MainPreloaderWrapper
