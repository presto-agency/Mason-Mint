import { FC } from 'react'
import classNames from 'classnames'
import styles from './HomeContent.module.scss'

type HomeContentProps = {
  className?: string
}

export const HomeContent: FC<HomeContentProps> = ({ className }) => {
  return (
    <main className={classNames(styles.HomeContent, {}, [className])}>
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
