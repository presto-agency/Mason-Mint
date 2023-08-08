import { motion } from 'framer-motion'
import { FC, ReactNode, useContext } from 'react'
import { Footer } from '@/components/Footer/Footer'
import { Store } from '@/utils/Store'
import { useLenis } from '@studio-freight/react-lenis'

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

const innerVariant = {
  initial: {
    y: '100vh',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  animate: {
    y: 0,
    transition: {
      delay: 4,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const PageTransitionLayout: FC<{ children: ReactNode; isFooter?: boolean }> = ({
  children,
  isFooter = true,
}) => {
  const store = useContext(Store)
  const lenis = useLenis()

  const isFirstLoading = () => {
    if (store?.state.isFirstLoading) {
      store?.dispatch({ type: 'TOGGLE_FIRST_LOADING' })
    }
    if (lenis) {
      lenis.start()
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={store?.state.isFirstLoading ? innerVariant : variants}
      onAnimationComplete={isFirstLoading}
    >
      {children}
      {isFooter && <Footer />}
    </motion.div>
  )
}
export default PageTransitionLayout
