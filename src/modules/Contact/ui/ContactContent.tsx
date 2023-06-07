import styles from './ContactContent.module.scss'
import ContactForm from '@/modules/Contact/ui/ContactForm/ContactForm'

export const ContactContent = () => {
  return (
    <main className={styles['contactContent']}>
      <ContactForm />
    </main>
  )
}
