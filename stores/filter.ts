import { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface FilterState {
  category: string[],
  tags: string[],
  search: string,
  sorted: string
}

const initialState: FilterState = {
  category: [],
  tags:[],
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
    chooseGenre: (state, action: PayloadAction<{tags:string}>) => {
      if (state.tags.includes(action.payload.tags)){
         state.tags = state.tags.filter(gen => gen !== action.payload.tags)
          
      } else {
        state.tags.push(action.payload.tags)
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

