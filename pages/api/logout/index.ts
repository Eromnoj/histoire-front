import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteCookie } from 'cookies-next'

export default (req:NextApiRequest,res: NextApiResponse) => {
  deleteCookie('token', { path: '/', domain: process.env.API_URL})
  res.status(200).json({msg :'test'})
}