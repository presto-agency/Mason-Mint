import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import routes from '@/utils/routes'

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
    <Link href={routes.public.becomeDistributor}>
      <button
        className={classNames(styles.becomeDistributor, className)}
        disabled={disabled}
        {...buttonProps}
      >
        BECOME A DISTRIBUTOR
      </button>
    </Link>
  )
}
