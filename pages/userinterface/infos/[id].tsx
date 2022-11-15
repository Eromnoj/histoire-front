import Head from 'next/head'
import styles from '../../../styles/UserInfo.module.scss'

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../../_app'
import Layout from '../../../components/layout/Layout'

import React from 'react'
import { useRouter } from 'next/router'

import UserNav from '../../../components/UserNav'
import InputField from '../../../components/form/InputField'
import SubmitButton from '../../../components/form/SubmitButton'

const UserInfo: NextPageWithLayout = () => {
  return <p>Infos</p>
}

UserInfo.getLayout = function getLayout(page: ReactElement) {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <Head>
        <title>Histoires | Parcourir</title>
        <meta name="description" content="Partagez vos histoires" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div className={styles.sideBar}>
          <UserNav />
        </div>

        <div className={styles.content}>
          <form className={styles.infoForm}>
            <InputField
              id='name'
              name='name'
              label='Nom'
              onChange={() => null}
            />
            <InputField
              id='email'
              type='email'
              name='email'
              label='Email'
              onChange={() => null}
            />
            <InputField
              id='facebook'
              type='url'
              name='facebook'
              label='Facebook'
              onChange={() => null}
            />
            <InputField
              id='twitter'
              type='url'
              name='twitter'
              label='Twitter'
              onChange={() => null}
            />
            <InputField
              id='password'
              type='password'
              name='password'
              label='Mot de passe'
              onChange={() => null}
            />

            <div className={styles.button}>

              <SubmitButton
                name='Enregistrer'
              />
            </div>
          </form>

        </div>
      </div>
    </Layout>
  )
}

export default UserInfo