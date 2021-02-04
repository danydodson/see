import React from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Meta from 'components/Meta'

import useStyles from './styles'

function LogInPage() {
  const classes = useStyles()

  return (
    <>
      <Meta title="Log In Pagen" description="User login page" />
      <Container maxWidth="sm" className={classes.root}>
        <Typography variant="h3">Log In</Typography>
      </Container>
    </>
  )
}

export default LogInPage
