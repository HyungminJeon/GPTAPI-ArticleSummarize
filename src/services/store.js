import { configureStore } from "@reduxjs/toolkit";

import { summarizeApi } from "./summarize";

export const store = configureStore({
    reducer: {
        [summarizeApi.reducerPath]: summarizeApi.reducer,
    },
    // We can add additional middleware to the store by passing it as an array to the middleware option
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(summarizeApi.middleware)
})
