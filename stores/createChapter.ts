import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface createChapterState {
  title: string,
  content: string
}

const initialState: createChapterState = {
  title: '',
  content: ''
}

export const createChapterSlice = createSlice({
  name: 'createBook',
  initialState,
  reducers: {
    chapterTitle: (state, action: PayloadAction<{ title: string }>) => {
      state.title = action.payload.title
    },
    chapterContent: (state, action: PayloadAction<{ content: string }>) => {
      state.content = action.payload.content
    },
  }

})

