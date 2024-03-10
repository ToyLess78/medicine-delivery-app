import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from '../store.ts';


export interface IMainState {
    alignment: string;
    isLoading: boolean;
}

const initialState: IMainState = {
    alignment: '',
    isLoading: false,
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setAlignment: (state, action: PayloadAction<{ alignment: string}>) => {
            state.alignment = action.payload.alignment;
        },
        setIsLoading: (state, action: PayloadAction<{ isLoading: boolean}>) => {
            state.isLoading = action.payload.isLoading;
        },
    },
});

export const selectAlignment = (state: RootState) => state.alignment;
export const selectIsLoading = (state: RootState) => state.isLoading;
export const mainActions = mainSlice.actions;

