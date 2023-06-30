// import { NextApiRequest, NextApiResponse } from 'next'
// import { ObjectId } from 'mongodb'
// import db from '@/utils/db'
// import dataJson from '../../../../products.json'
// import ProductModel from '../../../../models/Product'
// import { getError } from '@/utils/error'
//
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     await db.connect()
//     // Clear DB
//     await ProductModel.deleteMany()
//
//     // Create new array of products with new properties "id", "slug"
//     const products = dataJson.map((data) => {
//       const _id = new ObjectId()
//       const slug = data.ProductName.toLowerCase().trim().replace(/ /g, '-')
//       return {
//         ...data,
//         _id,
//         id: _id.toString(),
//         slug,
//       }
//     })
//     // Inset new array to DB
//     await ProductModel.insertMany(products)
//     await db.disconnect()
//     res.status(200).json({
//       success: true,
//       data: products,
//     })
//   } catch (error) {
//     res.status(500).json({ success: false, message: getError(error as Error) })
//   }
// }
//
// export default handler
