import styles from './MainPreloader.module.scss'

const MainPreloader = () => {
  return (
    <div className={styles['preloader']}>
      <div className={styles['preloader__label']}>
        <span>Please wait</span>
        <span>we make money</span>
      </div>
      <div className={styles['preloader__thumb']}>
        {/*<img src="/images/load-coin.png" alt="Page is rolling..." />*/}
      </div>
      <p className={styles['preloader__title']}>Page is rolling...</p>
      <div className={styles['preloader__percent']}>00%</div>
    </div>
  )
}

export default MainPreloader
