import Head from 'next/head'
import styles from '../styles/login.module.scss'

import Layout from '../components/layout/Layout'

import InputField from '../components/form/InputField'
import SubmitButton from '../components/form/SubmitButton'
import Toast from '../components/Toast'
import React, { useState, useEffect } from 'react'

import { handleSendEmail} from '../utils/AuthenticationFunction'

const Forgot = () => {

  const [email, setEmail] = useState('')
  const [trigger, setTrigger]= useState(false)
  const [msg, setMsg] = useState('')

  useEffect(()=> {
    if(trigger){
      setTimeout(()=> {
        setTrigger(false)
      }, 5000)
    }
  },[trigger])
  return (
    <Layout>
      <Head>
        <title>Histoires | Mot de passe oublié</title>
        <meta name="description" content="Récupérer mon mot de passe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <p className={styles.title}>Mot de passe oublié</p>
        <p className={styles.subtitle}> Entrez votre adresse afin de recevoir l&apos;email pour renouveller votre mot de passe</p>
        <form className={styles.loginForm} onSubmit={(e) =>{
          e.preventDefault()
          handleSendEmail(email, setMsg, setTrigger)
        }}>
          <InputField
            id='email'
            name='email'
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <div className={styles.button}>
            <p></p>
            <SubmitButton
              name="Envoyer"
              
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

export default Forgot
