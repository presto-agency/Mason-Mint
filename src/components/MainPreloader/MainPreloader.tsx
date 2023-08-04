import { useState, useEffect } from 'react'
import { motion, useSpring, MotionValue, useTransform } from 'framer-motion'
import Lottie from 'lottie-react'
import loaderJson from './assets/Loader.json'

import styles from './MainPreloader.module.scss'

// const Counter = ({ value }: { value: number }) => {
//   const animatedValue = useSpring(value)
//   useEffect(() => {
//     animatedValue.set(value)
//   }, [animatedValue, value])
//
//   return (
//     <div className="flex h-6 ring-2 ring-red-500">
//       <div className="relative">
//         {[...Array(10).keys()].map((i) => (
//           <Number place={100} mv={animatedValue} number={i} key={i} />
//         ))}
//       </div>
//       <div className="relative w-6">
//         {[...Array(10).keys()].map((i) => (
//           <Number place={10} mv={animatedValue} number={i} key={i} />
//         ))}
//       </div>
//       <div className="relative w-6">
//         {[...Array(10).keys()].map((i) => (
//           <Number place={1} mv={animatedValue} number={i} key={i} />
//         ))}
//       </div>
//     </div>
//   )
// }

// const Number = ({
//   place,
//   mv,
//   number,
// }: {
//   place: number
//   mv: MotionValue
//   number: number
// }) => {
//   const y = useTransform(mv, (latest) => {
//     const height = 24
//     const placeValue = (latest / place) % 10
//     const offset = (10 + number - placeValue) % 10
//
//     let memo = offset * height
//
//     if (offset > 5) {
//       memo -= 10 * height
//     }
//
//     return memo
//   })
//
//   return (
//     <motion.span style={{ y }} className="absolute inset-0 flex justify-center">
//       {number}
//     </motion.span>
//   )
// }

const MainPreloader = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  return (
    <motion.div
      className={styles['preloader']}
      exit={{ opacity: 0 }}
      transition={{ type: 'linear', duration: 1 }}
    >
      <div className={styles['preloader__label']}>
        <span>Please wait</span>
        <span>we make money</span>
      </div>
      <motion.div
        className={styles['preloader__thumb']}
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Lottie
          className={styles['preloader__thumb_item']}
          animationData={loaderJson}
          autoplay={true}
          onLoadedImages={() => setIsLoaded(true)}
        />
      </motion.div>
      <p className={styles['preloader__title']}>Page is rolling...</p>
      <div className={styles['preloader__percent']}>
        {/*<Counter value={100} />%*/}
      </div>
    </motion.div>
  )
}

export default MainPreloader
