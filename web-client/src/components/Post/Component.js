import React from 'react';

import Box from '@material-ui/core/Box';

import useStyles from './styles';

const Posts = props => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {props.children}
    </Box>
  );
};

export default Posts;
