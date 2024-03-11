import {FormHelperText, TextField} from "@mui/material";
import React from "react";
import {FieldErrors, UseFormRegister} from "react-hook-form";

interface IFormInputProps {
    label: string;
    name?: string;
    type?: string;
    errors: FieldErrors<IFormData> | string;
    register: UseFormRegister<IFormData>;
    regExp: RegExp;
}
export interface IFormData {
    name: string
    email: string;
    phone: string;
    address: string;
}

const FormInput: React.FC<IFormInputProps> = ({ label, name = label.toLowerCase(), type, errors, register, regExp }) => {
    return(
        <>
        <TextField
            type={type}
            variant='outlined'
            label={label}
            fullWidth
            required
            {...register(name as 'email' | 'phone' | 'name' | 'address', {
                required: `${label} is required.`,
                pattern: {
                    value: regExp,
                    message: `${label} is not valid.`
                }
            })}
            error={typeof errors === 'object' && errors[name as keyof IFormData] && !!errors[name as keyof IFormData]}
        />

    {typeof errors === 'object' && errors[name as keyof IFormData] && <FormHelperText error sx={{my: -3.7}}>{errors[name as keyof IFormData]?.message}</FormHelperText>}
        </>
    )
}

export default FormInput;