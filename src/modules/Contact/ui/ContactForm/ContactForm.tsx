import { FC, useRef } from 'react'
import classNames from 'classnames'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import dynamic from 'next/dynamic'
import TextField from '@/ui/TextField/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '@/modules/Contact/ui/ContactForm/validationSchema'
import { ButtonPrimary } from '@/ui/Button'
import { useModal } from '@/hooks/useModal'
import { browserSendEmail } from '@/utils/email/browserSendEmail'
import ContactInfo from '@/ui/ContactInfo/ContactInfo'
import { useInView, motion } from 'framer-motion'
const ThanksModal = dynamic(() => import('@/modals/Thanks/Thanks'))
const AnimatedText = dynamic(() => import('@/ui/AnimatedText/AnimatedText'))

import styles from './ContactForm.module.scss'

type FormValues = {
  fullName: string
  email: string
  phone: string
  location: string
  message: string
}

const defaultValues = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  message: '',
}

const ContactForm: FC<{ className?: string }> = ({ className }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    values: defaultValues,
    resolver: yupResolver(validationSchema),
  })
  const openThanksModal = useModal(ThanksModal, { size: 'xs' })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const container = {
    visible: () => ({
      transition: { staggerChildren: 0.05 },
    }),
  }

  const boxFrame = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'anticipate',
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await browserSendEmail({
      subject: `Let's talk!`,
      htmlMessage: 'Hello, I want to test this mail',
      data,
    })
      .then((response) => response.json())
      .then(({ success = false }) => {
        // @TODO process all answers - success, response, error
        // @TODO reset fields after success
        if (success) {
          openThanksModal()
        }
      })
      .catch((error) => console.error(`Error on send email ${error}`))
    // @TODO display error on page
  }

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : ''}
    >
      <div className={classNames(styles['form__contacts'], 'd-md-none')}>
        <p className={classNames('h1', styles['form__title'])}>
          <AnimatedText title withBlueDot>{`Let's talk`}</AnimatedText>
        </p>
        <p className={styles['form__subtitle']}>
          <AnimatedText>Stay in touch with us:</AnimatedText>
        </p>
        <ContactInfo className={styles['form__contacts_box']} />
      </div>
      <h4 className="h4">
        <AnimatedText>Fill in the short contact form</AnimatedText>
      </h4>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
        <motion.div variants={boxFrame}>
          <Controller
            control={control}
            name="fullName"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  placeholder="your Full name"
                  label="You should have a name end last name*"
                  error={errors['fullName']?.message}
                />
              )
            }}
          />
        </motion.div>
        <motion.div variants={boxFrame}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  placeholder="Your Email"
                  label="And a-mail*"
                  error={errors['email']?.message}
                />
              )
            }}
          />
        </motion.div>
        <motion.div variants={boxFrame}>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  placeholder="Your Phone"
                  label="How about a phone number?*"
                  error={errors['phone']?.message}
                />
              )
            }}
          />
        </motion.div>
        <motion.div variants={boxFrame}>
          <Controller
            control={control}
            name="location"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  placeholder="Location (City/state)"
                  label="City*"
                  error={errors['location']?.message}
                />
              )
            }}
          />
        </motion.div>
        <motion.div variants={boxFrame}>
          <Controller
            control={control}
            name="message"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  placeholder="Your message"
                  label="Now write down your message *"
                  error={errors['message']?.message}
                  element="textarea"
                />
              )
            }}
          />
        </motion.div>
        <motion.div variants={boxFrame}>
          <ButtonPrimary
            type="submit"
            variant="blue"
            fullWidth
            className={styles['form__action']}
          >
            Submit
          </ButtonPrimary>
        </motion.div>
      </form>
    </motion.div>
  )
}

export default ContactForm
