import ContactForm from '@/modules/Contact/ui/ContactForm/ContactForm'

import styles from './ContactContent.module.scss'

export const ContactContent = () => {
  return (
    <main className={styles['contactContent']}>
      <ContactForm />
    </main>
  )
}
