import { ButtonPrimary } from '@/ui/Button'
import { BlueDot } from '@/ui/BlueDot'

import styles from './IntroSection.module.scss'

export const IntroSection = () => {
  return (
    <section id={styles.intro}>
      <div className={styles.top}>
        <h1>
          Excellence in minting
          <BlueDot />
        </h1>
      </div>
      <div className={styles.bottom}>
        <ButtonPrimary variant="white">LEARN MORE</ButtonPrimary>
        <p>
          Mason Mint&apos;s fantastic design for the 1 oz Noahs Ark Silver Round
          celebrates the Biblical patriarch and his work
        </p>
      </div>
    </section>
  )
}
