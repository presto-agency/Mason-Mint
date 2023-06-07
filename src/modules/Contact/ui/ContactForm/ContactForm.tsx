import { useCallback } from 'react'
import { useForm, SubmitHandler, Resolver } from 'react-hook-form'
import InputField from '@/ui/InputField/InputField'
import { Container } from '@/app/layouts/Container'

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

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.fullName ? values : {},
    errors: !values.fullName
      ? {
          fullName: {
            type: 'required',
            message: 'This is required',
          },
        }
      : {},
  }
}

const ContactForm = () => {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm<FormValues>({
    values: defaultValues,
    resolver,
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('onSubmit ', data)
  }

  const handleChange = useCallback(
    (fieldName: keyof FormValues, value: string) => {
      setValue(fieldName, value)
    },
    [setValue]
  )

  console.log('errors ', errors)
  console.log('values ', getValues())

  return (
    <Container>
      <div className="row">
        <div className="col-md-4">
          <h3>Fill in the short contact form</h3>
        </div>
        <div className="col-md-7 offset-md-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              name="fullName"
              onChange={(value) => handleChange('fullName', value)}
              placeholder="your Full name"
              label="You should have a name end last name*"
              error={errors['fullName']?.message}
            />
          </form>
        </div>
      </div>
    </Container>
  )
}

export default ContactForm
