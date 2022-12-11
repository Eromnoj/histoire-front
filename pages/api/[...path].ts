import httpProxy from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

const API_URL = process.env.API_URL

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false
  }
}

export default (req:NextApiRequest,res: NextApiResponse) => {
  return new Promise<void>((resolve, reject) => {
    proxy.web(req, res, {target: API_URL, changeOrigin: true, xfwd: true, cookieDomainRewrite: "https://effervescent-marzipan-3cf65f.netlify.app/"}, (err) => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}