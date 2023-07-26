import React, { FC } from 'react'
import styles from './AllProducts.module.scss'
import classNames from 'classnames'
import Container from '@/app/layouts/Container'
import AnimatedText from '@/ui/AnimatedText/AnimatedText'
import AnimatedElement from '@/ui/AnimatedElement/AnimatedElement'
import Image, { ImageProps } from 'next/image'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'

const sectionContent = [
  {
    title: 'High relief',
    id: 1,
    subtitle: '2 oz high relief silver round .999 fine',
    url: '/images/about/all_1.png',
  },
  {
    title: 'Silver bars',
    id: 2,
    subtitle: '10 oz .999 fine silver',
    url: '/images/about/all_2.png',
  },
  {
    title: 'Patriot series',
    id: 3,
    subtitle: '1 oz silver round .999 fine',
    url: '/images/about/all_3.png',
  },
]

const AllProducts: FC<{ className?: string }> = ({ className }) => {
  return (
    <section className={classNames(styles['AllProducts'], className)}>
      <Container>
        <h3 className={classNames('h3', styles['title'])}>
          <AnimatedElement>
            All of our products are iso{' '}
            <span className={styles['blue']}>9001:2015</span> approved.
          </AnimatedElement>
        </h3>
        <ul className={styles['AllProducts__content']}>
          {sectionContent.map((item) => (
            <li key={item.id} className={styles['AllProducts__content_item']}>
              <div className={styles['imageContainer']}>
                <Image
                  className={styles['image']}
                  src={item.url}
                  alt="image"
                  fill={true}
                />
              </div>
              <div className={styles['descriptionItem']}>
                <h4 className="h4">
                  <AnimatedText title>{item.title}</AnimatedText>
                </h4>
                <p>
                  <AnimatedText>{item.subtitle}</AnimatedText>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default AllProducts