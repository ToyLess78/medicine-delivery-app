import React from 'react';
import {Card, CardActions, CardContent, Grid, IconButton, Skeleton, Typography} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {useDispatch} from 'react-redux';
import {cartActions} from '../store/slices/cart.slice.ts';
import {AppDispatch} from '../store/store.ts';

interface IDrugCartProps {
    price: number;
    genericName: string;
    isAction: boolean;
    count?: number;
    width: number;
    id: string;
}
export const DrugCartCard: React.FC<IDrugCartProps> = ({price, genericName, isAction, count, width, id}) => {

    const dispatch = useDispatch<AppDispatch>();

    const increase = () => {
        dispatch(cartActions.setAlignment(id));
    };

    const decrease = () => {
        dispatch(cartActions.remove(id));
    };

    const remove = () => {
        dispatch(cartActions.delete(id));
    };
    
    return (
        <Card variant='outlined' sx={{minWidth: `${width}%`, p: 1, boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)', position: 'relative'}}>
            <CardContent sx={{pb: 0}}>
                {isAction &&
                <IconButton aria-label='delete' sx={{right: 0, top: 0, position: 'absolute'}} onClick={remove}>
                    <ClearIcon />
                </IconButton>}
                <Grid container spacing={3}>
                    <Grid item xs={7}>
                        <Skeleton variant='rounded' width={'100%'} height={'100%'}/>
                    </Grid>
                    <Grid item xs={5} sx={{textAlign: 'center'}}>
                        <Typography sx={{fontWeight: 'bold', mt: 1}} color='text.secondary' gutterBottom>
                            {genericName}
                        </Typography>
                        <Typography color='text.secondary'>
                            Price: ${price}
                        </Typography>
                        {isAction &&
                            <CardActions sx={{justifyContent: 'end'}}>
                                <IconButton aria-label='add' color={'primary'} onClick={increase}>
                                    <AddCircleOutlineIcon />
                                </IconButton>

                                <Typography sx={{fontWeight: 'bold'}} color='text.secondary'>
                                    {count}
                                </Typography>
                                <IconButton aria-label='remove' color={'primary'} onClick={decrease}>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                        </CardActions>}

                    </Grid>
                </Grid>

            </CardContent>

        </Card>
    );
}
