import { NextApiResponse, NextApiRequest } from 'next'
import { sendEmail } from '@/utils/email'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { subject, htmlMessage } = req.body

  await sendEmail({
    subject,
    htmlMessage,
  })

  res.status(200).json({ success: true })
}

export default handler
