import { NextApiResponse, NextApiRequest } from 'next'
import db from '@/utils/db'
import ProductModel from '../../../../models/Product'
import CategoryModel from '../../../../models/Category'
import { getError } from '@/utils/error'
import { ProductProps } from '@/utils/types'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') return
  try {
    const body = req.body
    const categoryId = body.category ? body.category.id : undefined
    if (categoryId) {
      const category = await CategoryModel.findOne({ id: categoryId })
      const existProjectInCategory =
        category.products.filter(
          (product: ProductProps) => product.id === req.query.id
        ) || null

      if (!existProjectInCategory.length) {
        await category.products.push({
          name: body.ProductName,
          id: req.query.id,
        })
        await category.save()
      }
    }
    await db.connect()
    const filter = { id: req.query.id }
    let product = await ProductModel.findOneAndUpdate(filter, body)
    product = await ProductModel.findOne(filter)
    await db.disconnect()
    res.status(200).json({ success: true, data: product })
  } catch (error) {
    res.status(500).json({ success: false, message: getError(error as Error) })
  }
}

export default handler
