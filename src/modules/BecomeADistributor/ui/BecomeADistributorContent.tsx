// import { useRef } from 'react'
import Container from '@/app/layouts/Container'
import BecomeADistributorForm from '@/modules/BecomeADistributor/ui/BecomeADistributorForm/BecomeADistributorForm'
import HeroInner from '@/ui/HeroInner/HeroInner'
// import { motion, useTransform, useScroll } from 'framer-motion'

import styles from './BecomeADistributorContent.module.scss'

export const BecomeADistributorContent = () => {
  // const targetRef = useRef<HTMLDivElement | null>(null)
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ['start end', 'end start'],
  // })

  // const y2 = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.5])
  return (
    <main className={styles['becomeADistributorContent']}>
      <HeroInner
        title="Become an authorized distributor"
        subtitle="wholesale & distribution"
        description="Complete the application below & one of our customer service representatives will contact you with more information regarding our products."
        theme="gray"
      />
      <Container>
        <div className="row">
          <div className="col-md-6 order-md-2">
            <BecomeADistributorForm />
          </div>
          <div className="col-md-5 order-md-1">
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
            {/*<div>*/}
            {/*  <div*/}
            {/*    style={{*/}
            {/*      width: '250rem',*/}
            {/*      height: '400rem',*/}
            {/*      overflow: 'hidden',*/}
            {/*    }}*/}
            {/*    data-title="target"*/}
            {/*    ref={targetRef}*/}
            {/*  >*/}
            {/*    <motion.img*/}
            {/*      src="https://images.pexels.com/photos/16791877/pexels-photo-16791877/free-photo-of-wood-art-texture-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"*/}
            {/*      alt="Alt"*/}
            {/*      style={{ scale: y2 }}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
            {/*<h1>space</h1>*/}
          </div>
        </div>
      </Container>
    </main>
  )
}
