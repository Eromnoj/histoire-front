import Head from 'next/head'
import styles from '../styles/login.module.scss'

import Layout from '../components/layout/Layout'

import InputField from '../components/form/InputField'
import SubmitButton from '../components/form/SubmitButton'

import React, { useState } from 'react'

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
        <form className={styles.loginForm}>
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
              onClick={() => null}
            />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Forgot


