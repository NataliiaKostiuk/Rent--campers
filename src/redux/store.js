import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

import { campersReducer } from './campers/CampersSlice';
import { modalReducer } from './modal/ModalSlice';
import { favouriteReduser } from './Favourite/FavouriteSlice';


const persistConfig = {
	key: 'campers',
	storage,
	whitelist: ['favourite']
}

const persistedReducer = persistReducer(persistConfig, favouriteReduser);
 
export const store = configureStore({
	reducer: {
	campers: campersReducer,
	modal: modalReducer,
	favourite : persistedReducer,
	},
	 middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
