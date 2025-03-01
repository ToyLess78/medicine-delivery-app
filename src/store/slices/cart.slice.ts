import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

export interface ICartItem {
    id: string;
    count: number;
}

export interface ICartState {
    items: ICartItem[];
}

const initialState: ICartState = {
    items: []
};

export const cartSlice = createSlice({
    name: "cart",
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
        setAlignment: (state, action: PayloadAction<string>) => {
            const existed = state.items.find(i => i.id === action.payload);
            if (!existed) {
                state.items.push({id: action.payload, count: 1});
                return;
            }
            state.items.map(i => {
                if (i.id === action.payload) {
                    i.count += 1;
                }
                return i;
            });
        },
        reset: (state) => {
            state.items = initialState.items;
        }
    }
});

export const selectItems = (state: RootState) => state.cart.items;
export const cartActions = cartSlice.actions;
