import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Badge from "@mui/material/Badge";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store.ts";
import { cartActions } from "../store/slices/cart.slice.ts";

interface IDrugCardProps {
    price: number;
    genericName: string;
    pharmacy: string;
    id: string;
    img?: string;
}

export const DrugShopCard: React.FC<IDrugCardProps> = ({price, genericName, pharmacy, id, img}) => {
    const dispatch = useDispatch<AppDispatch>();

    const handlerAddToCart = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(cartActions.setAlignment(id));
    };

    return (
        <Card variant="outlined" sx={{
            minWidth: 260,
            p: 1,
            boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)"
        }}>
            <CardContent sx={{pb: 0}}>
                <Badge badgeContent={`$${price}`} color="primary" sx={{float: "right"}}/>

                {img ? (
                    <img src={img} alt={genericName} style={{
                        width: "100%",
                        height: 90,
                        objectFit: "cover",
                        marginBottom: "16px",
                        borderRadius: "4px"
                    }}/>
                ) : (
                    <Skeleton variant="rounded" width="100%" height={90} sx={{mb: 2}}/>
                )}

                <Typography sx={{fontSize: 11}} color="text.secondary">
                    {genericName}
                </Typography>
            </CardContent>

            <CardActions sx={{justifyContent: "end"}}>
                <Typography sx={{fontSize: 11, mr: 3}} color="text.secondary">
                    {pharmacy}
                </Typography>

                <Button variant="outlined" size="small" sx={{float: "right", textTransform: "none"}}
                        onClick={handlerAddToCart}>
                    add to Cart
                </Button>
            </CardActions>
        </Card>
    );
};
