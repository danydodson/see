import React from 'react'
import Container from '@material-ui/core/Container'
import SignInCtrl from '../../components/SignIn'
import Meta from 'components/Meta'
import useStyles from './styles'

function SignInPage() {
  const classes = useStyles()

  return (
    <>
      <Meta title='Sign Up' description='User sign in page' />
      
      <Container maxWidth="sm" className={classes.root}>
        <SignInCtrl className={classes.root} />
      </Container>
    </>
  )
}

export default SignInPage
