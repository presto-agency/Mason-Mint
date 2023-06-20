import { FC, useCallback } from 'react'
import dynamic from 'next/dynamic'
import styles from './BecomeADistributorForm.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import TextField from '@/ui/TextField/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { validationSchema } from '@/modules/Contact/ui/ContactForm/validationSchema'
import { browserSendEmail } from '@/utils/email/browserSendEmail'
import { useModal } from '@/hooks/useModal'
import ThanksModal from '@/modals/Thanks/Thanks'
import { ButtonPrimary } from '@/ui/Button'
import { OptionInterface } from '@/ui/SelectField/SelectField'

type FormValues = {
  fullName: string
  email: string
  phone: string
  website: string
  companyName: string
  city: string
  message: string
  companyAddress: string
  postalCode: string
  country: string
  state: string
}

const defaultValues = {
  fullName: '',
  email: '',
  phone: '',
  website: '',
  companyName: '',
  city: '',
  message: '',
  companyAddress: '',
  postalCode: '',
  country: '',
  state: '',
}

const CustomSelect = dynamic(() => import('@/ui/SelectField/SelectField'), {
  ssr: false,
})

const BecomeADistributorForm: FC<{ className?: string }> = ({ className }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm<FormValues>({
    values: defaultValues,
    resolver: yupResolver(validationSchema),
  })

  const openThanksModal = useModal(ThanksModal, { size: 'xs' })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await browserSendEmail({
      subject: `Become a distributor`,
      htmlMessage: 'Hello, I want to be a distributor',
      data,
    })
      .then((response) => response.json())
      .then(({ success = false }) => {
        // @TODO process all answers - success, response, error
        if (success) {
          openThanksModal()
        }
      })
      .catch((error) => console.error(`Error on send email ${error}`))
    // @TODO display error on page
  }

  const handleStateChange = useCallback((option: OptionInterface) => {
    setValue('state', option.label)
  }, [])

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
        <h4 className="h4">Contact info</h4>
        <div className={styles['form__group']}>
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
        </div>
        <h4 className="h4">Company info</h4>
        <div className={styles['form__group']}>
          <Controller
            control={control}
            name="companyName"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  placeholder="Company name"
                  label="Are you contacting on behalf of a company? "
                  error={errors['companyName']?.message}
                />
              )
            }}
          />
          <Controller
            control={control}
            name="website"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  placeholder="Website URL"
                  label="Website URL*"
                  error={errors['website']?.message}
                />
              )
            }}
          />
        </div>
        <h4 className="h4">Address</h4>
        <div className={styles['form__group']}>
          <Controller
            control={control}
            name="companyAddress"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  placeholder="Company address"
                  label="Company address*"
                  error={errors['companyAddress']?.message}
                />
              )
            }}
          />
          <div className="row">
            <div className="col-md-6">
              <Controller
                control={control}
                name="city"
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      placeholder="City"
                      label="City*"
                      error={errors['city']?.message}
                    />
                  )
                }}
              />
            </div>
            <div className="col-md-6">
              <Controller
                control={control}
                name="state"
                render={({ field }) => {
                  return (
                    <CustomSelect
                      {...field}
                      placeholder="Select State"
                      label="Select State*"
                      onChange={(option) =>
                        console.log('state change ', option)
                      }
                      error={errors['state']?.message}
                    />
                  )
                }}
              />
            </div>
            <div className="col-md-6">
              <Controller
                control={control}
                name="postalCode"
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      placeholder="Postal code"
                      label="Postal code*"
                      error={errors['postalCode']?.message}
                    />
                  )
                }}
              />
            </div>
            <div className="col-md-6">
              <Controller
                control={control}
                name="country"
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      placeholder="Country"
                      label="Country*"
                      error={errors['country']?.message}
                    />
                  )
                }}
              />
            </div>
          </div>
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
        </div>
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
  )
}

export default BecomeADistributorForm
