import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage
import authReducer from "./slices/authSlice";
import eventReducer from "./slices/eventSlice"
// Define the persist configuration
const persistConfig = {
  key: "root", // key to use for persistence
  storage, // storage engine (localStorage for web)
  whitelist: ["auth"], // only persist the auth slice
};

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  event:eventReducer
  // add other reducers here
});

// Create a persisted reducer using persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist compatibility
    }),
});

// Create a persistor for handling the persist state
export const persistor = persistStore(store);
