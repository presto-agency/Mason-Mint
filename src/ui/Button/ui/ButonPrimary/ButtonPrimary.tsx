import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import classNames from 'classnames'
import Arrow from '@/ui/Icons/Arrow'

import styles from './ButtonPrimary.module.scss'

type ButtonPrimaryVariants = 'white' | 'outlined' | 'blue' | 'mini'

type ButtonPrimaryProps = {
  className?: string
  variant?: ButtonPrimaryVariants
  fullWidth?: boolean
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  className,
  children,
  variant = 'white',
  disabled,
  fullWidth = false,
  ...buttonProps
}) => {
  const mods = {
    [styles[variant]]: true,
  }

  return (
    <button
      className={classNames(
        styles['buttonPrimary'],
        mods,
        fullWidth ? styles['fullWidth'] : '',
        className
      )}
      disabled={disabled}
      {...buttonProps}
    >
      <div className={styles['buttonPrimary__content']}>
        <Arrow
          className={classNames(
            styles['buttonPrimary__content_icon'],
            styles['__1']
          )}
        />
        <span>{children}</span>
        <Arrow
          className={classNames(
            styles['buttonPrimary__content_icon'],
            styles['__2']
          )}
        />
      </div>
    </button>
  )
}
