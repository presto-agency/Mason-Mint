import { NextApiResponse, NextApiRequest } from 'next'
import db from '@/utils/db'
import Product from '../../../models/Product'
import { getError } from '@/utils/error'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.body
  if (req.method !== 'POST') return
  try {
    if (query === '') {
      res.status(200).json({ message: 'Search query is empty' })
    }
    await db.connect()
    const products = await Product.find({
      ProductName: { $regex: query, $options: 'i' },
    })
    await db.disconnect()
    res.status(200).json({
      success: true,
      method: req.method,
      total: products.length,
      data: products,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: getError(error as Error) })
  }
}

export default handler
