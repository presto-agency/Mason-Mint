import { PageLayout } from '@/app/layouts/PageLayout'
import { HomeContent } from '@/modules/Home'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import styles from '@/modules/Home/ui/IntroSection/IntroSection.module.scss'

export default function Home() {
  return (
    <PageLayout headerTheme="dark">
      <HomeContent />
      <ButtonPrimary className={styles['button']} variant="white">
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary className={styles['button']} variant="white" size="small">
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary
        className={styles['button']}
        variant="white"
        backwardArrows={true}
      >
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary
        className={styles['button']}
        variant="white"
        backwardArrows={true}
        size="small"
      >
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary
        className={styles['button']}
        variant="white"
        size="small"
        arrows={false}
      >
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary className={styles['button']} variant="blue">
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary className={styles['button']} variant="blue" size="small">
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary
        className={styles['button']}
        backwardArrows={true}
        variant="blue"
      >
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary
        className={styles['button']}
        backwardArrows={true}
        variant="blue"
        size="small"
      >
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary
        className={styles['button']}
        variant="blue"
        size="small"
        arrows={false}
      >
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary className={styles['button']} variant="noStroked">
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary
        className={styles['button']}
        variant="noStroked"
        size="small"
      >
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary
        className={styles['button']}
        backwardArrows={true}
        variant="noStroked"
      >
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary
        className={styles['button']}
        variant="noStroked"
        backwardArrows={true}
        size="small"
      >
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary
        className={styles['button']}
        variant="noStroked"
        size="small"
        arrows={false}
      >
        LEARN MORE
      </ButtonPrimary>
      <ButtonPrimary
        className={styles['button']}
        variant="noStroked"
        arrows={false}
      >
        LEARN MORE
      </ButtonPrimary>
      {/*<div*/}
      {/*  style={{*/}
      {/*    height: '100vh',*/}
      {/*    display: 'flex',*/}
      {/*    alignItems: 'center',*/}
      {/*    justifyContent: 'center',*/}
      {/*    backgroundColor: 'var(--black)',*/}
      {/*    color: 'var(--white)',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <h1>Coming soon</h1>*/}
      {/*</div>*/}
    </PageLayout>
  )
}
