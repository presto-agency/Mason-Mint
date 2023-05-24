import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import classNames from 'classnames'

import defaultStyles from '../Button.module.scss'
import styles from './ButtonBecomDistributor.module.scss'

type ButtonBecomeDistriburorProps = {
  className?: string
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const ButtonBecomeDistriburor: FC<ButtonBecomeDistriburorProps> = ({
  className,
  disabled,
  ...buttonProps
}) => {
  return (
    <button
      className={classNames(
        defaultStyles.Button,
        styles.becomeDistributor,
        className
      )}
      disabled={disabled}
      {...buttonProps}
    >
      BECOME A DISTRIBUTOR
    </button>
  )
}
