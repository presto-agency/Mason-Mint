import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react'
import classNames from 'classnames'
import Arrow from '@/ui/Icons/Arrow'

import styles from './ButtonPrimary.module.scss'
import Link from 'next/link'

type ButtonPrimaryVariants = 'white' | 'outlined' | 'blue' | 'mini'

type ButtonPrimaryProps = {
  className?: string
  variant?: ButtonPrimaryVariants
  fullWidth?: boolean
  href?: string
  arrows?: boolean
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type ButtonInnerProps = {
  children: ReactNode
  arrows?: boolean
}

const ButtonInner: FC<ButtonInnerProps> = ({ children, arrows }) => (
  <div className={styles['buttonPrimary__content']}>
    {arrows && (
      <Arrow
        className={classNames(
          styles['buttonPrimary__content_icon'],
          styles['__1']
        )}
      />
    )}
    <span>{children}</span>
    {arrows && (
      <Arrow
        className={classNames(
          styles['buttonPrimary__content_icon'],
          styles['__2']
        )}
      />
    )}
  </div>
)

export const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  className,
  children,
  variant = 'white',
  disabled,
  fullWidth = false,
  href,
  arrows = true,
  ...buttonProps
}) => {
  const mods = {
    [styles[variant]]: true,
    [styles['noArrowsAnimation']]: !arrows,
  }

  return (
    <>
      {!href ? (
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
          <ButtonInner arrows={arrows}>{children}</ButtonInner>
        </button>
      ) : (
        <Link
          href={href}
          className={classNames(
            styles['buttonPrimary'],
            mods,
            fullWidth ? styles['fullWidth'] : '',
            className
          )}
        >
          <ButtonInner arrows={arrows}>{children}</ButtonInner>
        </Link>
      )}
    </>
  )
}
