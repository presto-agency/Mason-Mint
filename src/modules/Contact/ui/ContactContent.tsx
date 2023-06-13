import Container from '@/app/layouts/Container'
import ContactForm from '@/modules/Contact/ui/ContactForm/ContactForm'
import ContactBody from '@/modules/Contact/ui/ContactBody/ContactBody'

import styles from './ContactContent.module.scss'

export const ContactContent = () => {
  return (
    <main className={styles['contactContent']}>
      <Container>
        <div className="row">
          <div className="col-md-4">
            <ContactBody className={styles['contactContent__body']} />
          </div>
          <div className="col-md-6 offset-md-1">
            <ContactForm className={styles['contactContent__form']} />
          </div>
        </div>
      </Container>
    </main>
  )
}
