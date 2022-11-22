import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface createBookState {
  category: string,
  genre: string[],
  title: string,
  description: string,
  imgPath: string
}

const initialState: createBookState = {
  category: '',
  genre:[],
  title: '',
  description: '',
  imgPath: ''
}

export const createBookSlice = createSlice({
  name:'createBook',
  initialState,
  reducers: {
    bookCategory: (state, action: PayloadAction<{category:string}>) => {
      state.category = action.payload.category
    },
    bookGenre: (state, action: PayloadAction<{genre:string}>) => {
      if (state.genre.includes(action.payload.genre)){
         state.genre = state.genre.filter(gen => gen !== action.payload.genre)
          
      } else {
        state.genre.push(action.payload.genre)
      }
    },
    bookTitle: (state, action:PayloadAction<{title:string}>)=>{
        state.title = action.payload.title
    },
    bookDescription: (state, action:PayloadAction<{description:string}>)=>{
      state.description = action.payload.description
  },
  bookImgPath: (state, action:PayloadAction<{imgPath:string}>)=>{
    state.imgPath = action.payload.imgPath
},
  }

})

