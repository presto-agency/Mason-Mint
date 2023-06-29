import { NextApiResponse, NextApiRequest } from 'next'
import db from '@/utils/db'
import Product from '../../../models/Product'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect()
  const products = await Product.find()
  await db.disconnect()
  res.status(200).json({ success: true, method: req.method, products })
}

export default handler
