import { NextApiResponse, NextApiRequest } from 'next'
import db from '@/utils/db'
import Product from '../../../models/Product'
import { getError } from '@/utils/error'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') {
    res.status(400).json({ success: false, message: 'Invalid request method' })
    return
  }

  const { query } = req.body

  try {
    if (query === '') {
      res.status(400).json({ success: false, message: 'Search query is empty' })
      return
    }

    await db.connect()
    const products = await Product.find({
      ProductName: { $regex: query, $options: 'i' },
    })
    await db.disconnect()

    res.status(200).json({
      success: true,
      total: products.length,
      data: products,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: getError(error as Error) })
  }
}

export default handler
