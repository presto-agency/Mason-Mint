import { BlueDot } from '@/ui/BlueDot'
import styles from './FAQSection.module.scss'
import { BackgroundImage } from '@/ui/BackgroundImage'

export const FAQSection = () => {
  return (
    <section className={styles.FAQSection}>
      <div className={styles.left}>
        <h2>
          You have question
          <br />
          we have answers
          <BlueDot />
        </h2>
        <p>
          Read what our satisfied customers have to say about their experiences
          shopping at Recozy.
        </p>
        <BackgroundImage
          src="/images/home/home_faq_1.png"
          className={styles.photoContainer}
          quality={75}
          alt="Coin photo"
        />
      </div>
      <div className={styles.right}></div>
    </section>
  )
}
