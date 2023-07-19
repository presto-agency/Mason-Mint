import { ObjectId } from 'mongoose'

export type ProductProps = {
  _id: ObjectId
  id: string
  ProductName: string
  Metal?: string
  Images?: ImagesProps[]
  specification: SpecificationProps[]
  slug: string
  category?: CategoryProps
}

export type SpecificationProps = {
  ActualMetalWeight: string
  CoinWeight: string
  Diameter: string
  Thickness: string
  EdgeDesign: string
  Series: string
  Fineness: string
  IraApproved: string
}

type ImagesProps = {
  ImageUrl?: string
}

export type CategoryProps = {
  name?: string
  id?: string
  _id: ObjectId
  products?: { id: string; name: string }[]
}

export interface OptionInterface {
  value: string | undefined
  label: string
  states?:
    | { name: string; state_code: string }[]
    | { name: string; state_code: null }[]
  disabled?: boolean | undefined
}
