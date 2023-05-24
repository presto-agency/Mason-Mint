import { FC } from 'react'
import classNames from 'classnames'
import styles from './AboutContent.module.scss'

type AboutContentProps = {
  className?: string
}

export const AboutContent: FC<AboutContentProps> = ({ className }) => {
  return (
    <main className={classNames(styles.AboutContent, {}, [className])}>
      <section className={styles.firstSection}>
        <h1>Finding a partner you can trust is not an easy decision</h1>
      </section>
    </main>
  )
}
