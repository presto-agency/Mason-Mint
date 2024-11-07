/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiResponse, NextApiRequest } from 'next'
import db from '@/utils/db'
import { getError } from '@/utils/error'
import Product from '../../../models/Product'
import { FilterQuery } from 'mongoose'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { page = 1, limit = 10, search = '', category = '' } = req.query
  const _page = Number(page)
  const _limit = Number(limit)

  try {
    await db.connect()

    const filters: FilterQuery<any> = {}

    if (search) {
      filters.ProductName = { $regex: search, $options: 'i' }
    }

    if (category) {
      filters['category.id'] = category
    }

    //@ts-ignore for some reason doesn't see paginate method
    const data = await Product.paginate(filters, {
      page: _page,
      limit: _limit,
      sort: { 'category.name': 1, _id: 1 },
      lean: true,
    })

    res.status(200).json({
      success: true,
      data: data,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: getError(error as Error) })
  }
}

export default handler
