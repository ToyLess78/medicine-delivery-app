import {Box, Divider, Badge} from '@mui/material';
import Stack from '@mui/material/Stack';
import {NavLink, Outlet} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';
import {useSelector} from 'react-redux';
import {selectItems} from '../store/slices/cart.slice.ts';
import {selectCustomer} from '../store/slices/customer.slice.ts';

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: '#1976d2',
    textDecoration: isActive ? 'underline #1976d2' : 'none'
});

export const Layout = () => {

    const items = useSelector(selectItems);
    const customer = useSelector(selectCustomer);

    const cartItemsCount = items.reduce((acc, item) => acc + item.count, 0);

    return (
        <>
            <Box component={'section'} sx={{p: 2}}>
                <Stack
                    direction={'row'}
                    spacing={2}
                    fontFamily={'Roboto'}
                    fontSize={'1.1rem'}
                    sx={{justifyContent: 'space-between'}}
                >
                    <Stack
                        spacing={2}
                        direction={'row'}
                        divider={<Divider orientation='vertical' flexItem/>}>
                        <img
                            src="/logo.svg"
                            alt="Logo"
                            loading="lazy"
                        />
                        <NavLink to={'/'} style={navLinkStyle}>
                            Shop
                        </NavLink>

                        <NavLink to={'/cart'} style={navLinkStyle}>
                            Shopping Cart
                        </NavLink>

                        {customer.email && customer.phone && <NavLink to={'/history'} style={navLinkStyle}>
                            History
                        </NavLink>}
                    </Stack>

                    <Stack spacing={2}>
                        <NavLink to={'/cart'}>

                        <Badge badgeContent={cartItemsCount} color='primary'>
                            <ShoppingCartIcon sx={{color: grey[600]}}/>
                        </Badge>
                        </NavLink>
                    </Stack>
                </Stack>

            </Box>
            <Outlet/>
        </>
    )
};
