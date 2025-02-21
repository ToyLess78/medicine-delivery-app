import React, { useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { StyledToggleButtonGroup } from "./StyledToggleButtonGroup.tsx";
import { useGetPharmaciesQuery } from "../store/api/pharmacies.api.ts";
import { mainActions } from "../store/slices/main.slice.ts";
import { useDispatch } from "react-redux";

interface IDrugstoreProps {
    onChange: (event: React.MouseEvent<HTMLElement>, newAlignment: string) => void;
    alignment: string;
}

export const Drugstores: React.FC<IDrugstoreProps> = ({onChange, alignment}) => {

    const {data: pharmacies, error, isLoading} = useGetPharmaciesQuery();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mainActions.setIsLoading({isLoading: isLoading}));
    }, [dispatch, isLoading]);


    if (error) console.log(error);


    return (

        <StyledToggleButtonGroup
            size="large"
            value={alignment}
            exclusive
            onChange={onChange}
            aria-label="text alignment"
            orientation="vertical"
            fullWidth={true}
            id="group"
        >
            <ToggleButton value="" key="1" color="primary" sx={{textTransform: "none"}}>See All</ToggleButton>
            {pharmacies?.map((pharmacy) => (
                <ToggleButton value={pharmacy.pharmacy} key={pharmacy.id}
                              sx={{textTransform: "none"}}>{pharmacy.pharmacy}</ToggleButton>
            ))}

        </StyledToggleButtonGroup>
    );
}
