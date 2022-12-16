import type { NextApiResponse } from 'next'
import type { NextRequest } from "next/server";


export default (req:NextRequest,res: NextApiResponse) => {
  req.cookies.delete('token')
}