import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface userSessionState {
  userId: string,
  role:string
}

const initialState: userSessionState = {
  
  userId:'',
  role:''
}

export const userSessionSlice = createSlice({
  name:'userSession',
  initialState,
  reducers: {
    userSessionLogin: (state, action: PayloadAction<userSessionState>) => {
      state = action.payload
      return state
    },
    userSessionLogout: (state) => {
      state = initialState
      return state
    },

  }
})

