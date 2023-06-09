import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import TextField from '@/components/TextField/TextField'
import Container from '@/app/layouts/Container'
import { BlueDot } from '@/ui/BlueDot'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '@/modules/Contact/ui/ContactForm/validationSchema'
import { ButtonPrimary } from '@/ui/Button'
import { useModal } from '@/hooks/useModal'
import ThanksModal from '@/modals/Thanks/Thanks'

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

const ContactForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    values: defaultValues,
    resolver: yupResolver(validationSchema),
  })
  const openThanksModal = useModal(ThanksModal, { size: 'xs' })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('onSubmit ', data)
    openThanksModal()
  }

  return (
    <Container>
      <div className="row">
        <div className="col-md-4">
          <h1>
            {`Let's talk`}
            <BlueDot />
          </h1>
        </div>
        <div className="col-md-6 offset-md-1">
          <h4 className="h4">Fill in the short contact form</h4>
          <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
            <Controller
              control={control}
              name="fullName"
              render={({ field }) => {
                console.log('field ', field)
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
            <ButtonPrimary
              type="submit"
              variant="blue"
              fullWidth
              className={styles['form__action']}
            >
              Submit
            </ButtonPrimary>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default ContactForm
