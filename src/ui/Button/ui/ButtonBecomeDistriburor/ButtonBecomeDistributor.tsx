import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import classNames from 'classnames'

import styles from './ButtonBecomDistributor.module.scss'

type ButtonBecomeDistributorProps = {
  className?: string
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const ButtonBecomeDistributor: FC<ButtonBecomeDistributorProps> = ({
  className,
  disabled,
  ...buttonProps
}) => {
  return (
    <button
      className={classNames(styles.becomeDistributor, className)}
      disabled={disabled}
      {...buttonProps}
    >
      BECOME A DISTRIBUTOR
    </button>
  )
}
