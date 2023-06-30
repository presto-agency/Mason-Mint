import { NextApiResponse, NextApiRequest } from 'next'
import db from '@/utils/db'
import Product from '../../../../models/Product'
import { getError } from '@/utils/error'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'PUT') return
  try {
    const body = req.body
    await db.connect()
    const filter = { id: req.query.id }
    let product = await Product.findOneAndUpdate(filter, body)
    product = await Product.findOne(filter)
    await db.disconnect()
    res.status(200).json({ success: true, data: product })
  } catch (error) {
    res.status(500).json({ success: false, message: getError(error as Error) })
  }
}

export default handler
