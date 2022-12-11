import React,{FC,useState, useEffect} from 'react'
import Head from 'next/head'
import styles from '../../styles/login.module.scss'

import Layout from '../../components/layout/Layout'

import InputField from '../../components/form/InputField'
import SubmitButton from '../../components/form/SubmitButton'
import Toast from '../../components/Toast'
import axios from 'axios'

import { useRouter } from 'next/router'

const Recover:FC = () => {
  const router = useRouter()
  const {id} = router.query
  const [password, setPassword] = useState('')
  const [trigger, setTrigger]= useState(false)
  const [msg, setMsg] = useState('')

  useEffect(()=> {
    if(trigger){
      setTimeout(()=> {
        setTrigger(false)
      }, 5000)
    }
  },[trigger])

  const handlePassword = async (id:string | string[] | undefined, 
    password: string, 
    setShowMsg:React.Dispatch<React.SetStateAction<boolean>>,
    setMsg:React.Dispatch<React.SetStateAction<string>>
    ) => {
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
          <meta name="description" content="Renouveller mon mot de passe" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>
          <p className={styles.title}>Renouveller mon mot de passe</p>
          <form className={styles.loginForm} onSubmit={(e)=> {
            e.preventDefault()
            handlePassword(id, password, setTrigger, setMsg)
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
        {trigger ? <Toast 
          message={msg}
          click={()=> setTrigger(false)}
        /> : null }
      </Layout>
    )
  
}

export default Recover