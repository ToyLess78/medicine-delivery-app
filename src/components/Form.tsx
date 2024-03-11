import React from 'react';
import {Button, FormHelperText, TextField} from '@mui/material';
import {SubmitHandler, useForm} from 'react-hook-form';

interface IFormData {
    name: string
    email: string;
    phone: string;
    address: string;
}


const Form: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormData>();

    const onSubmit: SubmitHandler<IFormData> = (data) => {
        console.log(data);
    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*<Stack spacing={2} direction='row' sx={{marginBottom: 4}}>*/}
                {/*</Stack>*/}
                <TextField
                    type='text'
                    variant='outlined'
                    label='Name'
                    fullWidth
                    required
                    sx={{mb: 4}}
                    {...register('name', {
                        required: 'Name is required.',
                        pattern: {
                            value: /^(?=.{4,19}$)[A-Za-z]+(?:\s[A-Za-z]+)?$/,
                            message: 'Name is not valid.'
                        }
                    })}
                    error={!!errors.name}
                />

                {errors.name && <FormHelperText error sx={{position: 'absolute', mt: -3.5}}>{errors.name.message}</FormHelperText>}

                <TextField
                    aria-describedby='component-error-text'
                    type='email'
                    variant='outlined'
                    label='Email'
                    fullWidth
                    required
                    sx={{mb: 4}}
                    {...register('email', {
                        required: 'Email is required.',
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: 'Email is not valid.'
                        }
                    })}
                    error={!!errors.email}
                />

                {errors.email && <FormHelperText error sx={{position: 'absolute', mt: -3.5}}>{errors.email.message}</FormHelperText>}

                <TextField
                    type='tel'
                    variant='outlined'
                    label='Phone'
                    fullWidth
                    required
                    sx={{mb: 4}}
                    {...register('phone', {
                        required: 'Phone is required.',
                        pattern: {
                            value: /^(\+?38)?\d{10}$/,
                            message: 'Phone is not valid.'
                        }
                    })}
                    error={!!errors.phone}
                />

                {errors.phone && <FormHelperText error sx={{position: 'absolute', mt: -3.5}}>{errors.phone.message}</FormHelperText>}

                <TextField
                    type='text'
                    variant='outlined'
                    label='Address'
                    fullWidth
                    required
                    sx={{mb: 4}}
                    {...register('address', {
                        required: 'Address is required.',
                        pattern: {
                            value: /^[a-zA-Z0-9\s,'-]*$/,
                            message: 'Address is not valid.'
                        }
                    })}
                    error={!!errors.address}
                />

                {errors.address && <FormHelperText error sx={{position: 'absolute', mt: -3.5}}>{errors.address.message}</FormHelperText>}

                <Button variant='outlined' type='submit' sx={{float: 'right'}}>Register</Button>
            </form>
        </>
    )
}

export default Form;