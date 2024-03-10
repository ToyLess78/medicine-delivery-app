import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from './store.ts';


export interface IAlignmentState {
    alignment: string;
}

const initialState: IAlignmentState = {
    alignment: '',
};

export const alignmentSlice = createSlice({
    name: 'alignment',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{ alignment: string}>) => {
            state.alignment = action.payload.alignment;
        },
        reset: (state) => {
            state.alignment = '';
        },
    },
});

export const selectAlignment = (state: RootState) => state.alignment;

export default alignmentSlice.reducer;
export const alignmentActions = alignmentSlice.actions;

