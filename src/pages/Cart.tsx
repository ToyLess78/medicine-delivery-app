import {Box, Button, Grid, Typography, Stack} from "@mui/material";
import FormInput, {IFormData} from "../components/FormInput.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {addressRegEx, emailRegEx, nameRegEx, phoneRegEx} from "../utils/validation.utils.ts";
import {DrugCartCard} from "../components/DrugCartCard.tsx";
import {useSelector} from "react-redux";
import {selectItems} from "../store/cart.slice.ts";
import {useGetPharmaciesQuery} from "../store/drugs.api.ts";

const Cart = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormData>();

    const onSubmit: SubmitHandler<IFormData> = (data) => {
        console.log(data);
    };

    const cartItems = useSelector(selectItems);
    const {data: drugs, error, isLoading} = useGetPharmaciesQuery('');

    if (error) console.error(error);
    if (isLoading) console.log('Loading...')

    const setTotalPrice = Number(cartItems
        .map(i => {
            const drug = drugs?.find(d => d.id === i.id);
            if (!drug) {
                return 0;
            }
            return i.count * drug.price;
        })
        .reduce((acc, i) => acc + i, 0)
        .toFixed(2));

    return (
        <Box component={'section'}  sx={{flexGrow: 1}}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Box
                            sx={{
                                height: '72vh',
                                display: 'flex',
                                border: (theme) => `1px solid ${theme.palette.divider}`,
                                borderRadius: 1.5,
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                p: 3,
                                gap: 5,
                                overflow: 'auto'
                            }}>
                            <FormInput
                                label={'Name'}
                                type={'text'}
                                errors={errors}
                                register={register}
                                regExp={nameRegEx}
                            />
                            <FormInput
                                label={'Email'}
                                type={'email'}
                                errors={errors}
                                register={register}
                                regExp={emailRegEx}
                            />
                            <FormInput
                                label={'Phone'}
                                type={'tel'}
                                errors={errors}
                                register={register}
                                regExp={phoneRegEx}
                            />
                            <FormInput
                                label={'Address'}
                                type={'text'}
                                errors={errors}
                                register={register}
                                regExp={addressRegEx}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{
                            height: '72vh',
                            display: 'flex',
                            border: (theme) => `1px solid ${theme.palette.divider}`,
                            borderRadius: 1.5,
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 3,
                            gap: 5,
                            overflow: 'auto'
                        }}>
                            {cartItems.map(i => {
                                const drug = drugs?.find(p => p.id === i.id);
                                if (!drug) {
                                    return;
                                }
                                return <DrugCartCard
                                    price={drug.price}
                                    genericName={drug.genericName}
                                    isAction={true}
                                    count={i.count}
                                    width={100}
                                    id={drug.id}
                                    key={drug.id}
                                />;
                            })}


                        </Box>
                    </Grid>

                </Grid>
                <Stack spacing={2} direction='row' sx={{mt: 3, justifyContent: 'flex-end'}}>
                    <Typography variant="subtitle1" sx={{pt: 2, pr: 4}}>
                        Total prise: ${setTotalPrice}
                    </Typography>
                    <Button variant='outlined' size='large' type='submit' sx={{textTransform: 'none'}}>Submit</Button>
                </Stack>
            </form>
        </Box>

    )
}
export default Cart;