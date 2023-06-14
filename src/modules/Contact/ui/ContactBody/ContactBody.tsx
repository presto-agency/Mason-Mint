import { FC } from 'react'
import classNames from 'classnames'
import { BlueDot } from '@/ui/BlueDot'
import ContactInfo from '@/ui/ContactInfo/ContactInfo'
import Clock from '@/ui/Clock/Clock'

import styles from './ContactBody.module.scss'

const ContactBody: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classNames(styles['contactBody'], className)}>
      <div className="d-none d-md-block">
        <h1 className={classNames('h1', styles['contactBody__title'])}>
          {`Let's talk`}
          <BlueDot />
        </h1>
        <p className={styles['contactBody__contacts_title']}>
          Stay in touch with us:
        </p>
        <ContactInfo className={styles['contactBody__contacts']} />
      </div>
      <Clock className={styles['contactBody__clock']} />
      <p className={styles['contactBody__address_title']}>US Legal Address</p>
      <p className={styles['contactBody__address']}>
        470 Ramona St Palo Alto, 943 01, CA
      </p>
    </div>
  )
}

export default ContactBody
