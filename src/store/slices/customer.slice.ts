import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from '../store.ts';


export interface ICustomerState {
    email: string;
    phone: string;
}

const initialState: ICustomerState = {
    email: '',
    phone: '',
};

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setAlignment: (state, action: PayloadAction<{ email: string, phone: string }>) => {
            state.email = action.payload.email;
            state.phone = action.payload.phone;
        },
        reset: (state) => {
            state.email = '';
            state.phone = '';
        },
    },
});

export const selectCustomer = (state: RootState) => state.customer;
export const customerActions = customerSlice.actions;

