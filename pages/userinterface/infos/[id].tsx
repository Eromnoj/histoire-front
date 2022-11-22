import Head from 'next/head'
import styles from '../../../styles/UserInfo.module.scss'

import Layout from '../../../components/layout/Layout'

import React from 'react'
import { useRouter } from 'next/router'

import UserNav from '../../../components/UserNav'
import InputField from '../../../components/form/InputField'
import SubmitButton from '../../../components/form/SubmitButton'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, userInfoEmail, userInfoFacebook, userInfoName, userInfoPassword, userInfoTwitter } from '../../../stores'


const UserInfo = () => {
  const router = useRouter()
  const { id } = router.query

  const userInfo = useSelector((state:RootState)=> state.userInfo)
  const dispatch = useDispatch()
  console.log(userInfo);
  
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
              value={userInfo.name}
              onChange={(e) => dispatch(userInfoName({name: e.currentTarget.value}))}
            />
            <InputField
              id='email'
              type='email'
              name='email'
              label='Email'
              value={userInfo.email}
              onChange={(e) => dispatch(userInfoEmail({email: e.currentTarget.value}))}
            />
            <InputField
              id='facebook'
              type='url'
              name='facebook'
              label='Facebook'
              value={userInfo.facebook}
              onChange={(e) => dispatch(userInfoFacebook({facebook: e.currentTarget.value}))}
            />
            <InputField
              id='twitter'
              type='url'
              name='twitter'
              label='Twitter'
              value={userInfo.twitter}
              onChange={(e) => dispatch(userInfoTwitter({twitter: e.currentTarget.value}))}
            />
            <InputField
              id='password'
              type='password'
              name='password'
              label='Mot de passe'
              value={userInfo.password}
              onChange={(e) => dispatch(userInfoPassword({password: e.currentTarget.value}))}
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