import React from 'react'
import { TextField } from '@material-ui/core'

// import useStyles from './styles'

function FormTextField({ name, register, errors, ...props }) {
  // const classes = useStyles()

  const errorMessage = errors && errors[name] && errors[name].message

  const fieldProps = {
    fullWidth: true,
    type: 'text',
    error: !!errorMessage,
    helperText: errorMessage || props.helperText,
    name
  }

  return <TextField {...fieldProps} />

}

export default FormTextField