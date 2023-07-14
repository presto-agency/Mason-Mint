import React, { FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
import styles from './Accordion.module.scss'
import classNames from 'classnames'
import ArrowSelect from '@/ui/Icons/ArrowSelect'

type AccordionType = {
  i: number
  expanded: boolean | number
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>
  description?: string
  src?: string
  title?: string
}

const Accordion: FC<AccordionType> = ({
  i,
  expanded,
  setExpanded,
  src,
  title,
  description,
}) => {
  const isOpen = i === expanded

  return (
    <li className={styles['item']}>
      <motion.h5
        initial={false}
        animate={{
          color: isOpen ? 'var(--primary-color)' : 'var(--black)',
        }}
        className={classNames('h5', styles['item__title'])}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        {title}
        <ArrowSelect
          className={classNames(styles['item__title_arrow'], {
            [styles['active']]: isOpen,
          })}
        />
      </motion.h5>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={styles['item__dropdownMenu']}
          >
            <BackgroundImage
              className={styles['item__dropdownMenu_photoContainer']}
              src={`${src}`}
              alt="coin"
              quality={75}
            />
            <p className={styles['item__dropdownMenu_description']}>
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export default Accordion
