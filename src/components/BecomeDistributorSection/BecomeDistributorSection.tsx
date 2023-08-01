import { FC } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import Container from '@/app/layouts/Container'
import VideoComponent from '@/ui/VideoComponent/VideoComponent'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import routes from '@/utils/routes'

import styles from './BecomeDistributorSection.module.scss'

type BecomeDistributorSectionProps = {
  className?: string
}

const BecomeDistributorSection: FC<BecomeDistributorSectionProps> = ({
  className,
}) => {
  return (
    <section
      className={classNames(styles['BecomeDistributorSection'], className)}
    >
      <Container size={'xl'}>
        <div className={styles['BecomeDistributorSection__content']}>
          <VideoComponent src="/video/CTA.mp4" />
          <h2 className="h2">
            <AnimatedText title>Become An Authorized Distributor</AnimatedText>
          </h2>
          <p
            className={styles['BecomeDistributorSection__content_description']}
          >
            <AnimatedText>
              Our authorized dealer partners have access to our entire line of
              products at industry leading wholesale prices.
            </AnimatedText>
          </p>
          <AnimatedElement className={styles['buttonContainer']} delay={0.2}>
            <Link href={routes.public.becomeDistributor}>
              <ButtonPrimary
                className={styles['buttonContainer__button']}
                variant="blue"
              >
                Join now
              </ButtonPrimary>
            </Link>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  )
}

export default BecomeDistributorSection
