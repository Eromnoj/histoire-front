import React,{useState} from 'react'
import Head from 'next/head'
import styles from '../../styles/login.module.scss'

import Layout from '../../components/layout/Layout'

import InputField from '../../components/form/InputField'
import SubmitButton from '../../components/form/SubmitButton'

import axios, { AxiosError } from 'axios'

import { useRouter } from 'next/router'

const Recover = () => {
  const router = useRouter()
  const {id} = router.query
  const [password, setPassword] = useState('')
  const [showMsg, setShowMsg] = useState(false)
  const [msg, setMsg] = useState('')

  const handlePassword = async (id:string | string[] | undefined, password: string) => {
    try {
      const res = await axios.post('/api/v1/auth/validchange', {id, password})
      console.log(res)
      setShowMsg(true)  
      setMsg(res.data.msg)
    } catch (error: any) {
      setShowMsg(true)  
      setMsg(error.response.data.msg)
      
    }
  }
  return (
      <Layout>
        <Head>
          <title>Histoires | Renouveller mon mot de passe</title>
          <meta name="description" content="Me connecter à mon compte" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>
          <p className={styles.title}>Renouveller mon mot de passe</p>
          {showMsg ? <p>{msg}</p> : null}
          <form className={styles.loginForm} onSubmit={(e)=> {
            e.preventDefault()
            handlePassword(id, password)
          }}>

            <InputField
              id='password'
              type='password'
              name='password'
              label='Mot de passe'
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
  
            <div className={styles.button}>
              <SubmitButton
                name="Se Connecter"
              />
            </div>
          </form>
        </div>
      </Layout>
    )
  
}

export default Recover