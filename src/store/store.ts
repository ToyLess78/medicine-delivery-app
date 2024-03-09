import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {pharmaciesApi} from './pharmacies.api.ts';
import {drugsApi} from './drugs.api.ts';
import {cartSlice, ICartState} from './cart.slice.ts';
import {orderApi} from "./order.api.ts";

const loadCartState = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveCartState = (state: ICartState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState);
    } catch (err) {
        return undefined;
    }
};

export const store = configureStore({
    reducer: combineReducers({
        [pharmaciesApi.reducerPath]: pharmaciesApi.reducer,
        [drugsApi.reducerPath]: drugsApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        cart: cartSlice.reducer,
    }),
    preloadedState: {
        cart: loadCartState(),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pharmaciesApi.middleware, drugsApi.middleware, orderApi.middleware),
})

store.subscribe(() => {
    saveCartState(store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
