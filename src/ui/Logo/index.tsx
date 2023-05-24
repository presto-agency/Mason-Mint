import { FC } from 'react'
import classNames from 'classnames'
import styles from './Logo.module.scss'
import LogoSvg from '../../../public/icons/logo.svg'

type LogoProps = {
  className?: string
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return <LogoSvg className={classNames(styles.Logo, className)} />
}
