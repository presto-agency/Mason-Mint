import { FC } from 'react'
import classNames from 'classnames'
import styles from './HomeContent.module.scss'

export const HomeContent: FC = () => {
  return (
    <main className={classNames(styles.HomeContent)}>
      <section id={styles.intro}>
        <h1>
          <span>Excelence</span>
          <span>
            in minting <span className={styles.blueDot}>.</span>
          </span>
        </h1>
      </section>
    </main>
  )
}
