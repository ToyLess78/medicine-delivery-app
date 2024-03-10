import {Box, Grid} from '@mui/material';
import {DrugCartCard} from '../components/DrugCartCard.tsx';
import {useGetPharmaciesQuery} from '../store/api/drugs.api.ts';
import {useSelector} from 'react-redux';
import {selectCustomer} from '../store/slices/customer.slice.ts';
import {useGetOrderQuery} from '../store/api/order.api.ts';
import HistoryCard from '../components/HistoryCard.tsx';
import Spinner from '../components/Spinner.tsx';

const History = () => {
    const {data: drugs, error, isLoading} = useGetPharmaciesQuery('');

    const customer = useSelector(selectCustomer);
    const {data: orders, error: ordersError, isLoading: ordersIsLoading} = useGetOrderQuery({...customer}, { refetchOnMountOrArgChange: true });


    if (error || ordersError) console.log(error || ordersError);


    return (
        <>
            {(ordersIsLoading || isLoading) && <Spinner />}
            {(!ordersIsLoading || !isLoading) &&
                <Box sx={{
                flexGrow: 1,
                height: '82vh',
                display: 'flex',
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderRadius: 1.5,
                flexWrap: 'wrap',
                justifyContent: 'center',
                p: 3,
                overflow: 'auto'
            }}>
                <Grid container spacing={3}>
                    {orders?.map(i => {
                        const order = i.order;
                        const uId = i?.id;
                        const totalPrice = i.totalPrice;
                        if (!order?.length || !totalPrice) {
                            return;
                        }
                        return <HistoryCard
                            key={uId}
                            totalPrise={totalPrice}
                            cardList={
                                order?.map(i => {
                                    const drug = drugs?.find(d => d.id === i.id);
                                    if (!drug) {
                                        return;
                                    }
                                    return <DrugCartCard
                                        price={drug.price}
                                        genericName={drug.genericName}
                                        isAction={false}
                                        width={47}
                                        id={drug.id}
                                        key={drug.id}
                                    />;
                                })
                            }
                        />
                    })}
                </Grid>
            </Box>}
        </>

    );
}

export default History;