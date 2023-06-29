import React, { FC } from 'react'
import classNames from 'classnames'

import styles from './BecomeADistributorBody.module.scss'

const BecomeADistributorBody: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classNames(styles['distributorBody'], className)}>
      <p className={styles['distributorBody__title']}></p>
      <div className={styles['distributorBody__image']}>
        <p className={styles['distributorBody__image_description']}></p>
      </div>
    </div>
  )
}

export default BecomeADistributorBody
