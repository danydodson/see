import React from 'react';
import Container from '@material-ui/core/Container';
import SignUpCtrl from '../../components/Auth';
import Meta from 'components/Meta';
import useStyles from './styles';

function SignUpPage() {
  const classes = useStyles();

  return (
    <>
      <Meta title="Sign Up" description="User sign up page" />

      <Container maxWidth="sm" className={classes.root}>
        <SignUpCtrl
          className={classes.root}
          values={{
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            password: '',
            password2: '',
          }}
        />
      </Container>
    </>
  );
}

export default SignUpPage;
