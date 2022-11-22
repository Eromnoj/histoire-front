import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface FilterState {
  category: string[],
  genre: string[],
  search: string,
  sorted: string
}

const initialState: FilterState = {
  category: [],
  genre:[],
  search: '',
  sorted: ''
}

export const filterSlice = createSlice({
  name:'filter',
  initialState,
  reducers: {
    chooseCategory: (state, action: PayloadAction<{category:string}>) => {
      if (state.category.includes(action.payload.category)){
         state.category = state.category.filter(cat => cat !== action.payload.category)
          
      } else {
        state.category.push(action.payload.category)
      }
    },
    chooseGenre: (state, action: PayloadAction<{genre:string}>) => {
      if (state.genre.includes(action.payload.genre)){
         state.genre = state.genre.filter(gen => gen !== action.payload.genre)
          
      } else {
        state.genre.push(action.payload.genre)
      }
    },
    sortBy: (state, action:PayloadAction<{sorted:string}>)=>{
      if(state.sorted !== action.payload.sorted){
        state.sorted = action.payload.sorted
      } else {
        state.sorted = ''
      }
    },
    searchFromTitle: (state, action:PayloadAction<{search:string}>)=>{
        state.search = action.payload.search
    },
  }

})

