
import { configureStore } from '@reduxjs/toolkit'
import {UserSliceReducer} from '../slice/userSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, UserSliceReducer);

const store = configureStore({
  reducer: {
    userSlice:persistedReducer,
  },
})

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export  {store,persistor}