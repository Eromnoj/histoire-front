import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface userInfoState {
  username: string,
  email: string,
  facebook:string,
  twitter:string,
  newPassword:string
}

const initialState: userInfoState = {
  username: '',
  email: '',
  facebook:'',
  twitter:'',
  newPassword:''
}

export const userInfoSlice = createSlice({
  name:'userInfo',
  initialState,
  reducers: {
    userInfoName: (state, action: PayloadAction<{username:string}>) => {
      state.username = action.payload.username
    },
    userInfoEmail: (state, action: PayloadAction<{email:string}>) => {
      state.email = action.payload.email
    },
    userInfoFacebook: (state, action: PayloadAction<{facebook:string}>) => {
      state.facebook = action.payload.facebook
    },
    userInfoTwitter: (state, action: PayloadAction<{twitter:string}>) => {
      state.twitter = action.payload.twitter
    },
    userInfoPassword: (state, action: PayloadAction<{password:string}>) => {
      state.newPassword = action.payload.password
    },
  }

})

