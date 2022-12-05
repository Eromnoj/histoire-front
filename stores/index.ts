import { filterSlice } from "./filter"
import { createBookSlice } from "./createBook"
import { userInfoSlice } from "./userInfo"
import { userDescriptionSlice } from "./userDescription"
import { userSessionSlice } from "./userSession"

import { configureStore } from "@reduxjs/toolkit"
import { createChapterSlice } from "./createChapter"

import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
const persistConfig = {
  key: 'root',
  storage,
}

const persistedSessionReducer = persistReducer(persistConfig, userSessionSlice.reducer)

export const {chooseCategory, chooseGenre, sortBy,searchFromTitle, nextPage, prevPage, backFirstPage} = filterSlice.actions
export const {bookCategory, bookDescription,bookGenre,bookImgPath,bookTitle, bookReinit} = createBookSlice.actions
export const {chapterContent, chapterTitle, chapterOrder} = createChapterSlice.actions
export const {userInfoEmail,userInfoFacebook,userInfoName,userInfoPassword,userInfoTwitter} = userInfoSlice.actions
export const {userDescriptionImgPath, userDescriptionContent} = userDescriptionSlice.actions
export const {userSessionLogin, userSessionLogout} = userSessionSlice.actions

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    create: createBookSlice.reducer,
    chapter: createChapterSlice.reducer,
    userInfo: userInfoSlice.reducer,
    userDescription: userDescriptionSlice.reducer,
    userSession: persistedSessionReducer
  },
  middleware: [thunk]
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch