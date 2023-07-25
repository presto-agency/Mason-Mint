import { NextApiResponse, NextApiRequest } from 'next'
import db from '@/utils/db'
import Product from '../../../../models/Product'
import { getError } from '@/utils/error'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await db.connect()
    const product = await Product.findOne({ id: req.query.id })
    // await db.disconnect()
    res.status(200).json({ success: true, data: product })
  } catch (error) {
    res.status(500).json({ success: false, message: getError(error as Error) })
  }
}

export default handler
