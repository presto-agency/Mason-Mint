import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs/promises'

export const config = {
  api: {
    bodyParser: false,
  },
}

const readFiles = (
  req: NextApiRequest,
  productId: string
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {
    uploadDir: path.join(process.cwd(), `/public/uploads/${productId}`),
    filename: (name, ext, part) => {
      return part.originalFilename || Date.now().toString()
    },
  }
  const form = formidable(options)
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err)
      resolve({ fields, files })
    })
  })
}

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const productId = req.query.productId?.toString()

  if (typeof productId !== 'string') {
    res.status(400).json({ success: false, error: 'Invalid productId' })
    return
  }

  const uploadPath = path.join(process.cwd(), 'public/uploads', productId)

  try {
    await fs.mkdir(uploadPath, { recursive: true })
  } catch (error) {
    console.error('Error creating folder: ', error)
    res.status(500).json({ success: false, error: 'Server error' })
    return
  }

  try {
    const { files } = await readFiles(req, productId)
    const fileUrls = Object.values(files.images).map(
      (file: formidable.File) => {
        return `/uploads/${productId}/${file.originalFilename}`
      }
    )
    res.status(200).json({ success: true, files: fileUrls })
  } catch (error) {
    console.error('Error while processing files: ', error)
    res.status(500).json({ success: false, error: 'Server error' })
  }
}

export default handler
