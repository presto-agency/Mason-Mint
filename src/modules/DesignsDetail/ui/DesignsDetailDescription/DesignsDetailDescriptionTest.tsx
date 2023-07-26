import { FC } from 'react'
import dynamic from 'next/dynamic'
import classNames from 'classnames'
import Link from 'next/link'
import { ProductTestProps } from '@/utils/types'
import routes from '@/utils/routes'

import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
const AnimatedText = dynamic(() => import('@/ui/AnimatedText/AnimatedText'))
const AnimatedElement = dynamic(
  () => import('@/ui/AnimatedElement/AnimatedElement')
)

import styles from './DesignsDetailDescription.module.scss'

type DesignsDetailDescriptionTestProps = {
  product: ProductTestProps | null
  className?: string
}

const DesignsDetailDescriptionTest: FC<DesignsDetailDescriptionTestProps> = ({
  product,
  className,
}) => {
  return (
    <div className={classNames(styles['product'], className)}>
      <AnimatedElement delay={0}>
        <p className={styles['product__category']}>{product?.category?.name}</p>
      </AnimatedElement>
      <h1 className={classNames(styles['product__title'], 'h3')}>
        <AnimatedText title>{`${product?.ProductName}`}</AnimatedText>
      </h1>
      <div className={styles['product__description']}>
        <AnimatedText>{`${product?.description}`}</AnimatedText>
      </div>
      <div className={styles['product__follow']}>
        <AnimatedElement delay={0}>
          <Link href={routes.public.becomeDistributor}>
            <ButtonPrimary variant="transparent">Inquire Now</ButtonPrimary>
          </Link>
        </AnimatedElement>
      </div>
      <p className={classNames(styles['product__subtitle'], 'h4')}>
        <AnimatedText>Specifications:</AnimatedText>
      </p>
      <ul className={styles['product__list']}>
        {product?.specification[0] &&
          Object.entries(product.specification[0]).map(
            ([key, value], index) => {
              if (value && value !== '') {
                return (
                  <li key={index} className={styles['product__list_item']}>
                    <p className={styles['product__label']}>
                      <AnimatedText>
                        {key.split(/(?=[A-Z])/).join(' ')}
                      </AnimatedText>
                    </p>
                    <p className={styles['product__value']}>
                      <AnimatedText>{value}</AnimatedText>
                    </p>
                  </li>
                )
              }
            }
          )}
      </ul>
    </div>
  )
}

export default DesignsDetailDescriptionTest
