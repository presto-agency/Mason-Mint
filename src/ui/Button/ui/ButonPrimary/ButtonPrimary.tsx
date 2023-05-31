import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import classNames from 'classnames'
import Arrow from '../../../../../public/icons/arrow.svg'

import styles from './ButtonPrimary.module.scss'

type ButtonPrimaryVariants = 'white' | 'outlined' | 'blue' | 'mini'

type ButtonPrimaryProps = {
  className?: string
  variant?: ButtonPrimaryVariants
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  className,
  children,
  variant = 'white',
  disabled,
  ...buttonProps
}) => {
  const mods = {
    [styles[variant]]: true,
  }

  return (
    <button
      className={classNames(styles.ButtonPrimary, mods, className)}
      disabled={disabled}
      {...buttonProps}
    >
      <div className={styles.buttonContent}>
        <span>{children}</span>
        <Arrow className={styles.arrow} />
      </div>
    </button>
  )
}
