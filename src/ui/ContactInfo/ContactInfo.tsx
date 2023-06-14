import { FC } from 'react'
import classNames from 'classnames'
import Arrow from '@/ui/Icons/Arrow'

import styles from './ContactInfo.module.scss'

const ContactInfo: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classNames(styles['list'], className)}>
      <div className={styles['list__item']}>
        <Arrow
          className={classNames(styles['list__item_arrow'], styles['__1'])}
        />
        <a
          href="mailto:sales@masonmint.com"
          className={classNames('h4', styles['list__item_link'])}
        >
          Sales@MasonMint.com
        </a>
        <Arrow
          className={classNames(styles['list__item_arrow'], styles['__2'])}
        />
      </div>
      <div className={styles['list__item']}>
        <Arrow
          className={classNames(styles['list__item_arrow'], styles['__1'])}
        />
        <a
          href="tel:9043268600"
          className={classNames('h4', styles['list__item_link'])}
        >
          904 326 8600
        </a>
        <Arrow
          className={classNames(styles['list__item_arrow'], styles['__2'])}
        />
      </div>
    </div>
  )
}

export default ContactInfo
