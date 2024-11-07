import { useState } from 'react'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Container from '@/app/layouts/Container'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import Accordion from '@/modules/Home/ui/FAQSection/Accordion/Accordion'
import data from './data'

import styles from './FAQSection.module.scss'
import ParallaxSection from '@/ui/ParallaxSection/ParallaxSection'

const FAQSection = () => {
  const [expanded, setExpanded] = useState<false | number>(0)

  return (
    <section className={styles['FAQSection']}>
      <Container>
        <div className={styles['FAQSection__content']}>
          <ParallaxSection
            className={styles['FAQSection__content_left']}
            parallaxValues={[100, -100]}
          >
            <h2 className={classNames('h2', styles['title'])}>
              <AnimatedText title withBlueDot>
                You have question we have answers
              </AnimatedText>
            </h2>
            <p className={styles['subtitle']}>
              <AnimatedText title>
                Read what our satisfied customers have to say about their
                experiences shopping at Recozy.
              </AnimatedText>
            </p>
            <BackgroundImage
              src="/images/home/home_faq_1.png"
              className={styles['photoContainer']}
              quality={75}
              alt="Coin photo"
              description="suppert"
              descriptionPositionRight={true}
            />
          </ParallaxSection>
          <ParallaxSection
            className={styles['FAQSection__content_right']}
            parallaxValues={[200, -400]}
          >
            <ul>
              {data.map((item) => (
                <Accordion
                  i={item.id}
                  key={item.id}
                  src={item.src}
                  description={item.description}
                  title={item.title}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              ))}
            </ul>
          </ParallaxSection>
        </div>
      </Container>
    </section>
  )
}

export default FAQSection
