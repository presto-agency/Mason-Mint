import { useContext, FC } from 'react'
import { ModalContext, ModalContextType } from '@/context/modal'

type ModalComponentProps = {
  onClose: () => void
  size?: string
}

type Options = {
  size?: string
}

export const useModal = (
  ModalComponent: FC<ModalComponentProps>,
  options: Options = {}
) => {
  const { size = 'md', ...modalProps } = options
  const [openModal, closeModal] = useContext(ModalContext) as ModalContextType
  return (onCancel?: () => void) => {
    const handleCancel = () => {
      closeModal()
      onCancel && onCancel()
    }

    openModal(
      <ModalComponent onClose={handleCancel} size={size} {...modalProps} />
    )

    return closeModal
  }
}
