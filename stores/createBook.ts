import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface createBookState {
  category: string,
  tags: string[],
  title: string,
  description: string,
  coverPath: string
}

const initialState: createBookState = {
  category: '',
  tags: [],
  title: '',
  description: '',
  coverPath: '/uploads/bookcover.jpg'
}

export const createBookSlice = createSlice({
  name: 'createBook',
  initialState,
  reducers: {
    bookCategory: (state, action: PayloadAction<{ category: string }>) => {
      state.category = action.payload.category
    },
    bookGenre: (state, action: PayloadAction<{ tags: string }>) => {
      if (state.tags.includes(action.payload.tags)) {
        state.tags = state.tags.filter(tag => tag !== action.payload.tags)

      } else {
        state.tags.push(action.payload.tags)
      }
    },
    bookTitle: (state, action: PayloadAction<{ title: string }>) => {
      state.title = action.payload.title
    },
    bookDescription: (state, action: PayloadAction<{ description: string }>) => {
      state.description = action.payload.description
    },
    bookImgPath: (state, action: PayloadAction<{ coverPath: string }>) => {
      state.coverPath = action.payload.coverPath
    },
    bookReinit:(state) => {
      state = initialState
      return state
    }
  }

})

