import { NextApiResponse, NextApiRequest } from 'next'
import db from '@/utils/db'
import { getError } from '@/utils/error'
import ProductTest from '../../../../models/ProductTest'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await db.connect()
    const product = await ProductTest.findOne({ id: req.query.id })
    await db.disconnect()
    res.status(200).json({ success: true, data: product })
  } catch (error) {
    res.status(500).json({ success: false, message: getError(error as Error) })
  }
}

export default handler
