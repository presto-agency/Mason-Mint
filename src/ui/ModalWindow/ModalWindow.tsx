import { ReactNode } from 'react'
import classNames from 'classnames'
import Close from '@/ui/Icons/Close'

import styles from './ModalWindow.module.scss'

export type ModalWindowProps = {
  onClose: () => void
  size: string
  children?: ReactNode
}
const ModalWindow = ({ onClose, size, children }: ModalWindowProps) => {
  return (
    <div className={styles['modal']}>
      <div className={styles['modal__bg']} />
      <div className={styles['modal__close']} onClick={() => onClose()} />
      <div className={classNames(styles['modal__body'], styles[size])}>
        <button
          className={styles['modal__body_close']}
          onClick={() => onClose()}
        >
          <Close className={styles['modal__body_close_icon']} />
        </button>
        <div className={styles['modal__body_content']}>{children}</div>
      </div>
    </div>
  )
}

export default ModalWindow
