import Head from 'next/head'
import styles from '../styles/login.module.scss'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

import Layout from '../components/layout/Layout'

import TextField from '../components/form/TextField'
import SubmitButton from '../components/form/SubmitButton'

const Forgot: NextPageWithLayout = () => {
  return <p>Forgot</p>
}

Forgot.getLayout = function getLayout(page: ReactElement) {
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
          <TextField
            id='email'
            name='email'
            label='Email'
            onChange={() => null}
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

