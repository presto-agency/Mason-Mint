import React, { FC } from 'react'

import styles from './BecomeADistributorBody.module.scss'
import classNames from 'classnames'

const BecomeADistributorBody: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classNames(styles['distributorBody'], className)}>
      <p className={styles['distributorBody__title']}>
        To become a broker, fill out a form and be responsible and professional
        for success in financial markets.
      </p>
      <div className={styles['distributorBody__image']}>
        <p className={styles['distributorBody__image_description']}>
          Become A Distributor
        </p>
      </div>
    </div>
  )
}

export default BecomeADistributorBody
