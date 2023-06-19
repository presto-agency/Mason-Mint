import { FC, Fragment, useRef } from 'react'
import { useInView, motion } from 'framer-motion'

import styles from './AnimatedText.module.scss'
import classNames from 'classnames'

type AnimatedTextProps = {
  children: string
  title?: boolean
  withBlueDot?: boolean
}

const AnimatedText: FC<AnimatedTextProps> = ({
  children,
  title = false,
  withBlueDot = false,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const container = {
    visible: () => ({
      transition: { staggerChildren: 0.01, delayChildren: 0.2 },
    }),
  }

  const wordFrame = {
    visible: {
      opacity: 1,
      rotateX: 0,
      rotate: 0,
      y: 0,
      transition: {
        type: 'spring',
        duration: 2,
      },
    },
    hidden: title
      ? {
          opacity: 0,
          y: '120%',
          rotate: 12,
        }
      : {
          opacity: 0,
          y: 5,
          rotateX: -50,
          rotate: 2,
        },
  }

  return (
    <motion.span
      className={classNames(styles['split'], title ? styles['title'] : '')}
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : ''}
    >
      <>
        {children.split(' ').map((word, index) => {
          return (
            <Fragment key={index}>
              <motion.span
                className={styles['split__word']}
                variants={wordFrame}
              >
                {word}
              </motion.span>
              <span> </span>
            </Fragment>
          )
        })}
        {withBlueDot && (
          <motion.span
            className={classNames(styles['split__word'], 'blue')}
            variants={wordFrame}
          >
            .
          </motion.span>
        )}
      </>
    </motion.span>
  )
}

export default AnimatedText
