import { useState } from 'react'
import classNames from 'classnames'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import Container from '@/app/layouts/Container'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import Accordion from '@/modules/Home/ui/FAQSection/Accordion/Accordion'

import styles from './FAQSection.module.scss'

const FAQSection = () => {
  const [expanded, setExpanded] = useState<false | number>(0)

  const accordionsDescription = [
    {
      id: 1,
      title: 'Who is scottsdale mint?',
      description:
        'Scottsdale mint is located in Arizona and was founded in 2009 by Josh Phair as a Worldwide Manufacturer for the Highest quality silver and gold bullion. The company originally started as a reseller for silver coins and bullion, it then shifted to become a full private mint out of North Scottsdale minting original and unique rounds, coins and other bullion products for distributors and foreign Governments around the world.',
      src: '/images/home/coin_example.png',
    },
    {
      id: 2,
      title: 'Are precious metals a good investment?',
      description:
        'Scottsdale mint is located in Arizona and was founded in 2009 by Josh Phair as a Worldwide Manufacturer for the Highest quality silver and gold bullion. The company originally started as a reseller for silver coins and bullion, it then shifted to become a full private mint out of North Scottsdale minting original and unique rounds, coins and other bullion products for distributors and foreign Governments around the world.',
      src: '/images/home/coin_example.png',
    },
    {
      id: 3,
      title: 'How to start investing in precious metals and silver coin',
      description:
        'Scottsdale mint is located in Arizona and was founded in 2009 by Josh Phair as a Worldwide Manufacturer for the Highest quality silver and gold bullion. The company originally started as a reseller for silver coins and bullion, it then shifted to become a full private mint out of North Scottsdale minting original and unique rounds, coins and other bullion products for distributors and foreign Governments around the world.',
      src: '/images/home/coin_example.png',
    },
    {
      id: 4,
      title: 'Why buy gold and silver from Mason Mint?',
      description:
        'Scottsdale mint is located in Arizona and was founded in 2009 by Josh Phair as a Worldwide Manufacturer for the Highest quality silver and gold bullion. The company originally started as a reseller for silver coins and bullion, it then shifted to become a full private mint out of North Scottsdale minting original and unique rounds, coins and other bullion products for distributors and foreign Governments around the world.',
      src: '/images/home/coin_example.png',
    },
    {
      id: 5,
      title: 'Can you buy gold with bitcoin or other cryptocurrency?',
      description:
        'Scottsdale mint is located in Arizona and was founded in 2009 by Josh Phair as a Worldwide Manufacturer for the Highest quality silver and gold bullion. The company originally started as a reseller for silver coins and bullion, it then shifted to become a full private mint out of North Scottsdale minting original and unique rounds, coins and other bullion products for distributors and foreign Governments around the world.',
      src: '/images/home/coin_example.png',
    },
    {
      id: 6,
      title: 'Can you visit Mason Mint in Scottsdale az?',
      description:
        'Scottsdale mint is located in Arizona and was founded in 2009 by Josh Phair as a Worldwide Manufacturer for the Highest quality silver and gold bullion. The company originally started as a reseller for silver coins and bullion, it then shifted to become a full private mint out of North Scottsdale minting original and unique rounds, coins and other bullion products for distributors and foreign Governments around the world.',
      src: '/images/home/coin_example.png',
    },
  ]

  return (
    <section className={styles['FAQSection']}>
      <Container>
        <div className={styles['FAQSection__content']}>
          <div className={styles['FAQSection__content_left']}>
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
            />
          </div>
          <div className={styles['FAQSection__content_right']}>
            <ul>
              {accordionsDescription.map((item) => (
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
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FAQSection
