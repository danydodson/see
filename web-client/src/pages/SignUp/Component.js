import React from 'react'
import Container from '@material-ui/core/Container'
import SignUpCtrl from '../../components/Auth'
import Meta from 'components/Meta'
import useStyles from './styles'

function SignUpPage() {
  const classes = useStyles()


  return (
    <>
      <Meta
        title='Page 1'
        description='Page 1'
      />

      <Container maxWidth='sm' className={classes.root}>
        <SignUpCtrl
          className={classes.root}
          values={{
            name: '',
            email: '',
            username: '',
            password: '',
            password2: ''
          }}
        />
      </Container>

    </>
  )
}


export default SignUpPage
