import Head from 'next/head'
import styles from '../styles/login.module.scss'

import Layout from '../components/layout/Layout'

import InputField from '../components/form/InputField'
import SubmitButton from '../components/form/SubmitButton'

import React, { useState } from 'react'
import axios from 'axios'

const Forgot = () => {

  const [email, setEmail] = useState('')

  return (
    <Layout>
      <Head>
        <title>Histoires | Mot de passe oublié</title>
        <meta name="description" content="Récupérer mon mot de passe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <p className={styles.title}>Mot de passe oublié</p>
        <p className={styles.subtitle}> Entrez votre adresse afin de recevoir l'email pour renouveller votre mot de passe</p>
        <form className={styles.loginForm} onSubmit={(e) =>{
          e.preventDefault()
          handleSendEmail(email)
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
    </Layout>
  )
}

export default Forgot

//functions
const handleSendEmail = async (email:string) => {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
      
  try {
    const res = await axios.post('/api/v1/auth/recover', {email, origin})
    const {data} = res
    
    console.log(data)
  } catch (error) {
    console.log(error);
    
  }
}
