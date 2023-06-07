import { FC, PropsWithChildren } from 'react'
import ModalWindow, {
  ModalWindowProps,
} from '@/components/ModalWindow/ModalWindow'

const ThanksModal: FC<PropsWithChildren<ModalWindowProps>> = (props) => {
  return <ModalWindow {...props}>Thanks modal template</ModalWindow>
}

export default ThanksModal
