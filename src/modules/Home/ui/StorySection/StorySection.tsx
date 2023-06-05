import { BackgroundImage } from '@/ui/BackgroundImage'
import { ButtonPrimary } from '@/ui/Button'
import styles from './StorySection.module.scss'
import { MotionValue, motion, useTransform, useScroll } from 'framer-motion'
import { FC } from 'react'
import { useInView } from 'react-intersection-observer'

const sectionVariants = {
  hidden: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 2 },
  },
}

export const StorySection: FC = () => {
  const useParallax = (value: MotionValue<number>) => {
    return useTransform(value, [1, 0], [-300, 300])
  }
  const { scrollYProgress } = useScroll({})
  const y = useParallax(scrollYProgress)
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  return (
    <section id={styles.story}>
      <div className={styles.left}>
        <motion.h3
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          Mason Mint was born from the idea of producing world-class custom
          minted sulver products
        </motion.h3>
        <p>
          Mason Mint was born from the idea of producing world-class custom
          minted silver products. Our motto &quot;Excellence In Minting&quot;
          are words that we live by.
        </p>
        <BackgroundImage
          src="/images/home/home_story_1.png"
          className={styles.photoContainer}
          alt="Coin photo"
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
        <ButtonPrimary variant="outlined">OUR STORY</ButtonPrimary>
      </motion.div>
    </section>
  )
}
