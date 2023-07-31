import { FC } from 'react'
import classNames from 'classnames'
import { ProductProps } from '@/utils/types'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import styles from './DesignsDetailGalley.module.scss'

type DesignsDetailGalleryProps = {
  product: ProductProps | null
  className?: string
}

const DesignsDetailGallery: FC<DesignsDetailGalleryProps> = ({
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
            alt="ProductOld galley image"
            quality={100}
          />
        </div>
        <div className="col-md-6">
          <BackgroundImage
            className={styles['gallery__item']}
            src="/images/detail/placeholder-2.jpg"
            alt="ProductOld galley image"
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}

export default DesignsDetailGallery
