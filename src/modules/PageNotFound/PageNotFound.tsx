import Link from 'next/link'
import classNames from 'classnames'
import routes from '@/utils/routes'
import Image from 'next/image'
import { ButtonPrimary } from '@/ui/Button'
import BrokenCoinFirstPart from './assets/images/broken_coin_part_1.png'
import BrokenCoinSecondPart from './assets/images/broken_coin_part_2.png'

import styles from './PageNotFound.module.scss'

const PageNotFound = () => {
  return (
    <div className={styles['empty']}>
      <div className={styles['empty__box']}>
        <p className={styles['empty__label']}>oops...</p>
        <div className={styles['empty__core']}>
          4
          <div className={styles['empty__core_thumb']}>
            <div
              className={classNames(styles['empty__coin'], styles['firstPart'])}
            >
              <Image
                src={BrokenCoinFirstPart.src}
                alt="Broken Coin"
                fill
                className={styles['empty__coin_item']}
              />
            </div>
            <div
              className={classNames(
                styles['empty__coin'],
                styles['secondPart']
              )}
            >
              <Image
                src={BrokenCoinSecondPart.src}
                alt="Broken Coin"
                fill
                className={styles['empty__coin_item']}
              />
            </div>
          </div>
          4
        </div>
        <p className={styles['empty__description']}>
          Page not found. Don&apos;t lose your head, you can always
        </p>
        <Link href={routes.public.index}>
          <ButtonPrimary variant="blue" className={styles['empty__action']}>
            Go back
          </ButtonPrimary>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
