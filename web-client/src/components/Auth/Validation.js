import axios from 'axios'
import * as Yup from 'yup'

export const initialValues = { email: '', username: '', password: '', confirm: '' }

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('Email required.'),

  username: Yup.string()
    .min(4, 'C\'mon, you can think of longer name than that.')
    .max(20, 'Keep it fewer then 20 characters.')
    .required('Username required.'),

  password: Yup.string()
    .min(6, 'C\'mon, you can think of longer password than that.')
    .max(20, 'Keep it fewer then 20 characters.')
    .required('Password required.'),

  confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords don\'t match.')
    .required('Confirm password.')
})

