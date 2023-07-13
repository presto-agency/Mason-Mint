import { FC, Fragment, useCallback, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import { CategoryProps, ProductProps, SpecificationProps } from '@/utils/types'
import { Controller, useForm } from 'react-hook-form'
import RCUploader from 'rc-upload'
import TextField from '@/ui/TextField/TextField'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import { OptionInterface } from '@/utils/types'
import { BackgroundImage } from '@/ui/BackgroundImage/BackgroundImage'
const SelectField = dynamic(() => import('@/ui/SelectField/SelectField'), {
  ssr: false,
})

import styles from './ProductForm.module.scss'
import axios from 'axios'

type FormProps = {
  ProductName: string
  Metal?: string
  ActualMetalWeight?: string
  CoinWeight?: string
  Diameter?: string
  EdgeDesign?: string
  Fineness?: string
  IraApproved?: string
  Series?: string
  Thickness?: string
  category?: CategoryProps
  specification?: SpecificationProps[]
  Images?: { ImageUrl: string }[]
}

const ProductForm: FC<{
  product: ProductProps
  categories: CategoryProps[]
  onValues: (formData: ProductProps) => void
  loading: boolean
}> = ({ product, categories, onValues, loading = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<OptionInterface>({
    label: product.category?.name || '',
    value: product.category?.id || '',
  })
  const [uploadedImages, setUploadedImages] = useState<File[]>([])
  const [uploadedImagesUrl, setUploadedImagesUrl] = useState<string[]>([])

  const defaultValues: FormProps = useMemo(
    () => ({
      ProductName: product.ProductName,
      Metal: product.Metal,
      ActualMetalWeight: product.specification[0].ActualMetalWeight,
      CoinWeight: product.specification[0].CoinWeight,
      Diameter: product.specification[0].Diameter,
      EdgeDesign: product.specification[0].EdgeDesign,
      Fineness: product.specification[0].Fineness,
      IraApproved: product.specification[0].IraApproved,
      Series: product.specification[0].Series,
      Thickness: product.specification[0].Thickness,
      category: product.category,
      Images: [],
    }),
    [product]
  )

  const {
    handleSubmit,
    getValues,
    formState: { errors },
    control,
    setValue,
  } = useForm<FormProps>({
    defaultValues,
  })

  const categoriesOptions = useMemo(() => {
    return categories.map((category: CategoryProps) => {
      return {
        label: category.name || '',
        value: category.id || '',
      }
    })
  }, [categories])

  const handleCategoryChange = useCallback(
    (category: OptionInterface | null) => {
      setValue('category', { name: category?.label, id: category?.value })
      setSelectedCategory(category as OptionInterface)
    },
    [setValue, setSelectedCategory]
  )

  const uploadProps = {
    beforeUpload: async (file: File) => {
      setUploadedImages((prevState: File[]) => [...prevState, file])
      setUploadedImagesUrl((prevState: string[]) => [
        ...prevState,
        URL.createObjectURL(file),
      ])
    },
    onError: (error: Error) => {
      console.error(error)
    },
    multiple: true,
    action: '',
    accept: 'image/jpeg, image/png',
  }

  const onSubmit = async (formData: FormProps) => {
    formData.specification = [
      {
        ActualMetalWeight: formData.ActualMetalWeight || '',
        CoinWeight: formData.CoinWeight || '',
        Diameter: formData.Diameter || '',
        Thickness: formData.Thickness || '',
        EdgeDesign: formData.EdgeDesign || '',
        Series: formData.Series || '',
        Fineness: formData.Fineness || '',
        IraApproved: formData.IraApproved || '',
      },
    ]

    delete formData.ActualMetalWeight
    delete formData.CoinWeight
    delete formData.Diameter
    delete formData.Thickness
    delete formData.EdgeDesign
    delete formData.Series
    delete formData.Fineness
    delete formData.IraApproved

    const fd = new FormData()
    for (const image of uploadedImages) {
      fd.append('images', image)
    }

    await axios
      .post(`/api/files/${product.id}/upload`, fd)
      .then(({ data: { files = [], success = false, error = null } }) => {
        if (error) {
          console.error(error)
        }

        if (success) {
          const images: { ImageUrl: string }[] = []
          Object.values(files).map((file) => {
            images.push({ ImageUrl: file as string })
          })
          formData.Images = images
        }
      })
      .catch((error) => console.error(error))
    ;(await onValues) && onValues(formData as ProductProps)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
      <div className="row">
        <div className="col-md-6">
          <Controller
            control={control}
            name="ProductName"
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  value={getValues().ProductName}
                  placeholder="Product name"
                  label="Product should have a name*"
                  error={errors['ProductName']?.message}
                />
              )
            }}
          />
          <div className="row">
            <div className="col-md-6">
              <Controller
                control={control}
                name="ActualMetalWeight"
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      value={getValues()['ActualMetalWeight']}
                      placeholder=""
                      label="Actual Metal Weight"
                      error={errors['ActualMetalWeight']?.message}
                    />
                  )
                }}
              />
            </div>
            <div className="col-md-6">
              <Controller
                control={control}
                name="Fineness"
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      value={getValues()['Fineness']}
                      placeholder=""
                      label="Fineness"
                      error={errors['Fineness']?.message}
                    />
                  )
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Controller
                control={control}
                name="CoinWeight"
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      value={getValues()['CoinWeight']}
                      placeholder=""
                      label="Weight"
                      error={errors['CoinWeight']?.message}
                    />
                  )
                }}
              />
            </div>
            <div className="col-md-6">
              <Controller
                control={control}
                name="Diameter"
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      value={getValues()['Diameter']}
                      placeholder=""
                      label="Diameter"
                      error={errors['Diameter']?.message}
                    />
                  )
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Controller
                control={control}
                name="Thickness"
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      value={getValues()['Thickness']}
                      placeholder=""
                      label="Thickness"
                      error={errors['Thickness']?.message}
                    />
                  )
                }}
              />
            </div>
            <div className="col-md-6">
              <Controller
                control={control}
                name="EdgeDesign"
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      value={getValues()['EdgeDesign']}
                      placeholder=""
                      label="Edge Design"
                      error={errors['EdgeDesign']?.message}
                    />
                  )
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Controller
                control={control}
                name="Series"
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      value={getValues()['Series']}
                      placeholder=""
                      label="Series"
                      error={errors['Series']?.message}
                    />
                  )
                }}
              />
            </div>
            <div className="col-md-6">
              <Controller
                control={control}
                name="IraApproved"
                render={({ field }) => {
                  return (
                    <TextField
                      {...field}
                      value={getValues()['IraApproved']}
                      placeholder=""
                      label="IRA Approved"
                      error={errors['IraApproved']?.message}
                    />
                  )
                }}
              />
            </div>
          </div>
          <Controller
            control={control}
            name="category"
            render={({ field }) => {
              return (
                <SelectField
                  {...field}
                  placeholder="Select Categories"
                  label="Category*"
                  error={errors['category']?.message}
                  options={categoriesOptions}
                  onChange={handleCategoryChange}
                  selectedOption={selectedCategory}
                />
              )
            }}
          />
          <ButtonPrimary type="submit" isLoading={loading}>
            Save product
          </ButtonPrimary>
        </div>
        <div className="col-md-6">
          {product?.Images?.length ? (
            <div className={styles['form__thumbs']}>
              {product.Images.map((image, key) => (
                <Fragment key={key}>
                  <BackgroundImage
                    src={image.ImageUrl || ''}
                    alt="Alt"
                    className={styles['form__thumbs_item']}
                  />
                </Fragment>
              ))}
            </div>
          ) : null}
          {uploadedImagesUrl.length ? (
            <div className={styles['form__thumbs']}>
              {uploadedImagesUrl.map((image, key) => (
                <Fragment key={key}>
                  <BackgroundImage
                    src={image}
                    alt="Alt"
                    className={styles['form__thumbs_item']}
                  />
                </Fragment>
              ))}
            </div>
          ) : null}
          <RCUploader {...uploadProps}>
            <div className={styles['form__uploader']}>
              <p className={styles['form__uploader_title']}>
                Choose, or drag the files
              </p>
            </div>
          </RCUploader>
        </div>
      </div>
    </form>
  )
}

export default ProductForm
