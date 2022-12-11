import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteCookie} from 'cookies-next'

export default (req:NextApiRequest,res: NextApiResponse) => {
  deleteCookie('token')
}