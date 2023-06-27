import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import styles from './StorySection.module.scss'
import { MotionValue, motion, useTransform, useScroll } from 'framer-motion'
import { FC } from 'react'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'

export const StorySection: FC = () => {
  const useParallax = (value: MotionValue<number>) => {
    return useTransform(value, [1, 0], [-300, 300])
  }
  const { scrollYProgress } = useScroll({})
  const y = useParallax(scrollYProgress)

  return (
    <section id={styles.story}>
      <div className={styles.left}>
        <h3>
          Mason Mint was born from the idea of producing world-class custom
          minted sulver products
        </h3>
        <p>
          Mason Mint was born from the idea of producing world-class custom
          minted silver products. Our motto &quot;Excellence In Minting&quot;
          are words that we live by.
        </p>
        <BackgroundImage
          src="/images/home/home_story_1.png"
          className={styles.photoContainer}
          alt="Coin photo"
          parallax={true}
        />
      </div>
      <motion.div style={{ y }} className={styles.right}>
        <BackgroundImage
          src="/images/home/home_story_2.png"
          className={styles.photoContainer}
          quality={100}
          alt="Coin photo"
        />
        <div className={styles.text}>
          <h4>
            Mason Mint was born from the idea of producing world-class custom
            minted sulver products
          </h4>
          <p>
            Our motto &quot;Excellence In Minting&quot; are words that we live
            by. Our high standards for quality and design is what separates us
            from everyone else. We look forward to supplying both the investor
            and collector silver market with superior products that are sure to
            impress.
          </p>
        </div>
        <ButtonPrimary variant="transparent">OUR STORY</ButtonPrimary>
      </motion.div>
    </section>
  )
}
