
import axios, { AxiosError } from 'axios'

import { NextRouter } from 'next/router'
import { userSessionLogin } from '../stores'
import { Dispatch } from '@reduxjs/toolkit'

import { RegisterData } from '../reducers/register'
import { LoginData } from '../reducers/login'

export const handleRegister = async (data: RegisterData,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>,
  dispatchSession: Dispatch,
  router: NextRouter) => {

  try {
    const res = await axios.post('/api/v1/auth/register', data)
    const userData = await res.data
    dispatchSession(userSessionLogin(userData.user))
    router.push(`/userinterface/infos/`)

  } catch (error: any | AxiosError) {
    msgSetter(error.response.data.msg)
    showSetter(true)
  }

}


export const handleLogin = async (data: LoginData,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>,
  dispatchSession: Dispatch,
  router: NextRouter) => {

  try {
    const res = await axios.post('/api/v1/auth/login', data)
    const userData = await res.data
    dispatchSession(userSessionLogin(userData.user))
    const { userId } = userData.user
    router.push(`/userinterface/infos/`)

  } catch (error: any | AxiosError) {
    // console.log(error)
    msgSetter(error.response.data.msg)
    showSetter(true)
  }

}

export const handleSendEmail = async (email:string,
  msgSetter: React.Dispatch<React.SetStateAction<string>>,
  showSetter: React.Dispatch<React.SetStateAction<boolean>>,) => {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''
      
  try {
    const res = await axios.post('/api/v1/auth/recover', {email, origin})
    const {data} = res
    msgSetter(data.msg)
    showSetter(true)
  } catch (error:any) {
    console.log(error);
    msgSetter(error.response.data.msg)
    showSetter(true)
  }
}