import { FC } from 'react'
import ModalWindow, { ModalWindowProps } from '@/ui/ModalWindow/ModalWindow'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import routes from '@/utils/routes'

import styles from './ProductManipulatedSuccess.module.scss'

const ProductManipulatedSuccessModal: FC<ModalWindowProps> = (props) => {
  return (
    <ModalWindow {...props}>
      <div className={styles['modal']}>
        <p className="h4">The data has been successfully saved</p>
        <div className={styles['modal__actions']}>
          <ButtonPrimary
            size="small"
            href={routes.private.products}
            arrows={false}
          >
            Back to list
          </ButtonPrimary>
          <ButtonPrimary
            size="small"
            variant="blue"
            onClick={() => props.onClose()}
            arrows={false}
          >
            Continue on this page
          </ButtonPrimary>
        </div>
      </div>
    </ModalWindow>
  )
}

export default ProductManipulatedSuccessModal
