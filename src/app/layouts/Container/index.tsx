import { FC, ReactNode } from 'react'
import classNames from 'classnames'

type PageLayoutProps = {
  children: ReactNode
  className?: string
  size?: 'xl'
}

const mods = {}

const Container: FC<PageLayoutProps> = ({ children, className, size }) => {
  return (
    <div className={classNames('base-container', size, className)}>
      {children}
    </div>
  )
}

export default Container
