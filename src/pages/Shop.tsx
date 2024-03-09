import {Box, Grid, Stack} from '@mui/material';
import {Drugstores} from '../components/Drugstores.tsx';
import {DrugShopCard} from '../components/DrugShopCard.tsx';
import React from 'react';
import {useGetPharmaciesQuery} from '../store/drugs.api.ts';
import Spinner from '../components/Spinner.tsx';

const Shop = () => {
    const [alignment, setAlignment] = React.useState('')

    const handleAlignment = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    const {data: drugs, error, isLoading} = useGetPharmaciesQuery(alignment);

    if (error) console.log(error);

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Box
                        sx={{
                            height: '82vh',
                            display: 'flex',
                            border: (theme) => `1px solid ${theme.palette.divider}`,
                            borderRadius: 1.5,
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            p: 3,
                            overflow: 'auto'
                        }}>
                        <Drugstores
                            onChange={handleAlignment}
                            alignment={alignment}
                        />
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <Box sx={{
                        height: '82vh',
                        borderRadius: 1.5,
                        border: (theme) => `1px solid ${theme.palette.divider}`,
                        p: 3,
                        overflow: 'auto',
                        position: 'relative',
                    }}>
                        {!isLoading ?
                            <Stack spacing={3} direction='row' useFlexGap flexWrap='wrap'
                                   justifyContent='space-around'>
                                {drugs?.map((drug) => (
                                    <DrugShopCard
                                        key={drug.id}
                                        price={drug.price}
                                        genericName={drug.genericName}
                                        pharmacy={drug.pharmacy}
                                        id={drug.id}/>
                                ))}
                            </Stack> : <Spinner />}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Shop;