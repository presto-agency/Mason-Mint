import React, { FC, ReactNode, useContext, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import MainPreloader from '@/components/MainPreloader/MainPreloader'
import { useLenis } from '@studio-freight/react-lenis'

const MainPreloaderWrapper: FC = () => {
  const [progress, setProgress] = useState<number>(0)
  const [isDestroy, setIsDestroy] = useState(true)
  const lenis = useLenis()

  if (lenis) {
    lenis.stop()
  }

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevState) => {
        if (prevState === 3) {
          clearInterval(progressInterval)
          setIsDestroy(false)
          return prevState
        }
        return prevState + 1
      })
    }, 800)
    return () => {
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <AnimatePresence>
      {isDestroy && <MainPreloader progress={progress} />}
    </AnimatePresence>
  )
}

export default MainPreloaderWrapper
