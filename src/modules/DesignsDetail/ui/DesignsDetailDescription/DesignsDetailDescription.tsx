import { FC } from 'react'
import { ProductProps } from '@/utils/types'

type DesignsDetailDescriptionProps = {
  product: ProductProps | null
}

const DesignsDetailDescription: FC<DesignsDetailDescriptionProps> = ({
  product,
}) => {
  return (
    <div>
      <h1 className="h3">{product?.ProductName}</h1>
    </div>
  )
}

export default DesignsDetailDescription
