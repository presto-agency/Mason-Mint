import { FC, useCallback, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import { CategoryProps, ProductProps, SpecificationProps } from '@/utils/types'
import { Controller, useForm } from 'react-hook-form'
import TextField from '@/ui/TextField/TextField'
import { ButtonPrimary } from '@/ui/ButtonPrimary/ButtonPrimary'
import { OptionInterface } from '@/utils/types'
const SelectField = dynamic(() => import('@/ui/SelectField/SelectField'), {
  ssr: false,
})

import styles from './ProductForm.module.scss'

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

  const onSubmit = (formData: FormProps) => {
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

    onValues && onValues(formData as ProductProps)
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
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
        </form>
      </div>
      <div className="col-md-6">Photos</div>
    </div>
  )
}

export default ProductForm
