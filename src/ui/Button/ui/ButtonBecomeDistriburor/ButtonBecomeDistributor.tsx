import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'

import styles from './ButtonBecomDistributor.module.scss'

const buttonVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 3,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
}

type ButtonBecomeDistributorProps = {
  className?: string
  buttonMotionAnimation?: boolean
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const ButtonBecomeDistributor: FC<ButtonBecomeDistributorProps> = ({
  buttonMotionAnimation,
  className,
  disabled,
  ...buttonProps
}) => {
  return (
    <>
      {buttonMotionAnimation ? (
        <motion.button
          className={classNames(styles.becomeDistributor, className)}
          disabled={disabled}
          variants={buttonVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          {...buttonProps}
        >
          BECOME A DISTRIBUTOR
        </motion.button>
      ) : (
        <button
          className={classNames(styles.becomeDistributor, className)}
          disabled={disabled}
          {...buttonProps}
        >
          BECOME A DISTRIBUTOR
        </button>
      )}
    </>
  )
}
