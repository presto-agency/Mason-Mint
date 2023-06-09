import { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './ModalWindow.module.scss'

export type ModalWindowProps = {
  onClose: () => void
  size: string
  children?: ReactNode
}
const ModalWindow = ({ onClose, size, children }: ModalWindowProps) => {
  return (
    <div className={styles['modal']}>
      <div className={styles['modal-bg']} />
      <div className={styles['modal-close']} onClick={() => onClose()} />
      <div className={classNames(styles['modal-body'], styles[size])}>
        <div className={styles['modal-body-close']} onClick={() => onClose()}>
          close
        </div>
        <div className={styles['modal-body-content']}>{children}</div>
      </div>
    </div>
  )
}

export default ModalWindow
