import { filterSlice } from "./filter"
import { createBookSlice } from "./createBook"
import { userInfoSlice } from "./userInfo"
import { userDescriptionSlice } from "./userDescription"

import { configureStore } from "@reduxjs/toolkit"
import { createChapterSlice } from "./createChapter"

export const {chooseCategory, chooseGenre, sortBy,searchFromTitle} = filterSlice.actions
export const {bookCategory, bookDescription,bookGenre,bookImgPath,bookTitle} = createBookSlice.actions
export const {chapterContent, chapterTitle} = createChapterSlice.actions
export const {userInfoEmail,userInfoFacebook,userInfoName,userInfoPassword,userInfoTwitter} = userInfoSlice.actions
export const {userDescriptionImgPath, userDescriptionContent} = userDescriptionSlice.actions

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    create: createBookSlice.reducer,
    chapter: createChapterSlice.reducer,
    userInfo: userInfoSlice.reducer,
    userDescription: userDescriptionSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch