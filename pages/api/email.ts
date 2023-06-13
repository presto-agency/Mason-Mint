import { NextApiResponse, NextApiRequest } from 'next'
import { sendEmail } from '@/utils/email'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { subject, htmlMessage } = req.body

  await sendEmail({
    subject,
    htmlMessage,
  })
    .then((response) => {
      res.status(200).json({ success: true, response, error: null })
    })
    .catch((error) => {
      res.status(500).json({ success: false, response: null, error })
    })
}

export default handler
