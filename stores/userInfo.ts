import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface userInfoState {
  name: string,
  email: string,
  facebook:string,
  twitter:string,
  password:string
}

const initialState: userInfoState = {
  name: '',
  email: '',
  facebook:'',
  twitter:'',
  password:''
}

export const userInfoSlice = createSlice({
  name:'userInfo',
  initialState,
  reducers: {
    userInfoName: (state, action: PayloadAction<{name:string}>) => {
      state.name = action.payload.name
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
      state.password = action.payload.password
    },
  }

})

