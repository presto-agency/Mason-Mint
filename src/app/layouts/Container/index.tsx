import { FC, ReactNode } from 'react'

type PageLayoutProps = {
  children: ReactNode
}

const Container: FC<PageLayoutProps> = ({ children }) => {
  return <div className="base-container">{children}</div>
}

export default Container
