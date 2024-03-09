import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {RootState} from './store.ts';

export interface CartItem {
    id: string;
    count: number;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        delete: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        remove: (state, action: PayloadAction<string>) => {
            const existed = state.items.find(i => i.id === action.payload);
            if (!existed) {
                return;
            }
            if (existed.count === 1) {
                state.items = state.items.filter(i => i.id !== action.payload);
            } else {
                state.items.map(i => {
                    if (i.id === action.payload) {
                        i.count -= 1;
                    }
                    return i;
                });
                return;
            }

        },
        add: (state, action: PayloadAction<string>) => {
            const existed = state.items.find(i => i.id === action.payload);
            if (!existed) {
                state.items.push({ id: action.payload, count: 1 });
                return;
            }
            state.items.map(i => {
                if (i.id === action.payload) {
                    i.count += 1;
                }
                return i;
            });
        }
    }
});

export const selectItems = (state: RootState) => state.cart.items;
export default cartSlice.reducer;
export const cartActions = cartSlice.actions;