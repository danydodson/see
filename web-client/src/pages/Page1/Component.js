import React from 'react'

import Container from '@material-ui/core/Container'

import SignupForm from '../../components/SignUpForm'
import Meta from 'components/Meta'

import useStyles from './styles'

function Page1() {
  const classes = useStyles()

  return (
    <>
      <Meta
        title="Page 1"
        description="Page 1"
      />
      <Container maxWidth="sm" className={classes.root}>
        <SignupForm className={classes.root}/>
      </Container>
    </>
  )
}

export default Page1
