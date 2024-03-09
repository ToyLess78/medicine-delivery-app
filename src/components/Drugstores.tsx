import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import {StyledToggleButtonGroup} from './StyledToggleButtonGroup.tsx';
import {useGetPharmaciesQuery} from '../store/pharmacies.api.ts';

interface IDrugstoreProps {
    onChange: (event: React.MouseEvent<HTMLElement>, newAlignment: string) => void;
    alignment: string;
}

export const Drugstores: React.FC<IDrugstoreProps> = ({onChange, alignment}) => {

    const { data: pharmacies, error, isLoading } = useGetPharmaciesQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) console.log(error);


    return (

        <StyledToggleButtonGroup
            size='large'
            value={alignment}
            exclusive
            onChange={onChange}
            aria-label='text alignment'
            orientation='vertical'
            fullWidth={true}
            id='group'
        >
            <ToggleButton value={''} key={'1'} color={'primary'} sx={{textTransform: 'none'}}>{'See All'}</ToggleButton>
            {pharmacies?.map((pharmacy) => (
                <ToggleButton value={pharmacy.pharmacy} key={pharmacy.id} sx={{textTransform: 'none'}}>{pharmacy.pharmacy}</ToggleButton>
            ))}

        </StyledToggleButtonGroup>
    );
}