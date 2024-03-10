import {Grid, Stack, Typography} from '@mui/material';
import React, {ReactNode} from 'react';

interface IHistoryCardProps {
    cardList: ReactNode;
    totalPrise: number;
}

const HistoryCard: React.FC<IHistoryCardProps> = ({cardList, totalPrise}) => {
    return (
        <>
            <Grid item xs={9}>
                <Stack spacing={1} direction='row' useFlexGap flexWrap='wrap'
                       justifyContent='space-around' sx={{
                    flexGrow: 1, border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 1.5, p: 3
                }}>
                    {cardList}
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Stack spacing={2} direction='row' sx={{justifyContent: 'center'}}>
                    <Typography variant='subtitle1' sx={{pt: 2, pr: 4}}>
                        Total prise: ${totalPrise}
                    </Typography>
                </Stack>
            </Grid>
        </>
    )
}

export default HistoryCard;