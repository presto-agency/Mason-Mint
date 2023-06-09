import { FC } from 'react'
import ModalWindow, {
  ModalWindowProps,
} from '@/components/ModalWindow/ModalWindow'

const ThanksModal: FC<ModalWindowProps> = (props) => {
  return (
    <ModalWindow {...props}>
      <h3>Thanks modal template</h3>
    </ModalWindow>
  )
}

export default ThanksModal
