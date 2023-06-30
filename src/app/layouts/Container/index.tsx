import { FC, ReactNode } from 'react'
import classNames from 'classnames'

type PageLayoutProps = {
  children: ReactNode
  className?: string
}

const Container: FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <div className={classNames('base-container', className)}>{children}</div>
  )
}

export default Container
