import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface createChapterState {
  title: string,
  content: string,
  chapterOrder: number
}

const initialState: createChapterState = {
  title: '',
  content: '',
  chapterOrder: 0
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
    chapterOrder: (state, action: PayloadAction<{ chapterOrder: number }>) => {
      state.chapterOrder = action.payload.chapterOrder
    },
  }

})

