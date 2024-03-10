import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {pharmaciesApi} from './pharmacies.api.ts';
import {drugsApi} from './drugs.api.ts';
import {cartSlice, ICartState} from './cart.slice.ts';
import {orderApi} from './order.api.ts';
import {customerSlice, ICustomerState} from './customer.slice.ts';
import {alignmentSlice} from "./alignment.slice.ts";

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

const loadCustomerState = () => {
    try {
        const serializedState = localStorage.getItem('customerState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveCustomerState = (state: ICustomerState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('customerState', serializedState);
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
        customer: customerSlice.reducer,
        alignment: alignmentSlice.reducer,
    }),
    preloadedState: {
        cart: loadCartState(),
        customer: loadCustomerState(),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pharmaciesApi.middleware, drugsApi.middleware, orderApi.middleware),
})

store.subscribe(() => {
    saveCartState(store.getState().cart);
});

store.subscribe(() => {
    saveCustomerState(store.getState().customer);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
