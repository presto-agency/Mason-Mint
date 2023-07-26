import { FC } from 'react'
import classNames from 'classnames'
import { ProductTestProps } from '@/utils/types'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import styles from './DesignsDetailGalley.module.scss'

type DesignsDetailGalleryTestProps = {
  product: ProductTestProps | null
  className?: string
}

const DesignsDetailGalleryTest: FC<DesignsDetailGalleryTestProps> = ({
  product,
  className,
}) => {
  return (
    <div className={classNames(styles['gallery'], className)}>
      <div className="row">
        <div className="col-md-6">
          <BackgroundImage
            className={styles['gallery__item']}
            src="/images/detail/placeholder-1.jpg"
            alt="Product galley image"
            quality={100}
          />
        </div>
        <div className="col-md-6">
          <BackgroundImage
            className={styles['gallery__item']}
            src="/images/detail/placeholder-2.jpg"
            alt="Product galley image"
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default DesignsDetailGalleryTest
