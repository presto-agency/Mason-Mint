import { FC } from 'react'

import styles from './AboutContent.module.scss'

export const AboutContent: FC = () => {
  return (
    <main className={styles.AboutContent}>
      <section className={styles.firstSection}>
        <h1>Finding a partner you can trust is not an easy decision</h1>
      </section>
    </main>
  )
}
