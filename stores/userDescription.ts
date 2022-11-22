import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface userDescriptionState {
  imgPath: string,
  content: string
}

const initialState: userDescriptionState = {
  imgPath: '',
  content: ''
}

export const userDescriptionSlice = createSlice({
  name:'userDescription',
  initialState,
  reducers: {
    userDescriptionImgPath: (state, action: PayloadAction<{imgPath:string}>) => {
      state.imgPath = action.payload.imgPath
    },
    userDescriptionContent: (state, action: PayloadAction<{content:string}>) => {
      state.content = action.payload.content
    }
  }

})

