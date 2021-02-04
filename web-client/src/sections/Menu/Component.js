import React from 'react'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'
import MenuItem from '@material-ui/core/MenuItem'

import { Link as RouterLink } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'

import { FaHome as WelcomeIcon, FaPenFancy as SignUpIcon, FaRegHandPeace as LogoutIcon, FaRegUser as SignInIcon, FaGithub as GithubIcon, FaBug as BugIcon } from 'react-icons/fa'

import { isMobile } from 'utils'

import useStyles from './styles'

const StyledMenuItem = withStyles({ root: { width: '100%' } })(props => <MenuItem {...props} />)

const isAuthenticated = false

function Menu({ isOpen, onClose, onOpen }) {
  const classes = useStyles({
    isOpen,
    isMobile
  })

  return (
    <SwipeableDrawer anchor="left" open={isOpen} onClose={onClose} onOpen={onOpen} swipeAreaWidth={30} disableBackdropTransition={true}>
      <List className={classes.list}>
        <div className={classes.toolbar} />

        <StyledMenuItem onClick={onClose} component={RouterLink} to="/">
          <ListItemIcon>
            <WelcomeIcon />
          </ListItemIcon>
          <ListItemText primary="Welcome" />
        </StyledMenuItem>

        {isAuthenticated === false ? (
          <StyledMenuItem onClick={onClose} component={RouterLink} to="/signup">
            <ListItemIcon>
              <SignUpIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </StyledMenuItem>
        ) : null}

        {isAuthenticated === false ? (
          <StyledMenuItem onClick={onClose} component={RouterLink} to="/login">
            <ListItemIcon>
              <SignInIcon />
            </ListItemIcon>
            <ListItemText primary="Log In" />
          </StyledMenuItem>
        ) : null}

        {!isAuthenticated === false ? (
          <StyledMenuItem onClick={onClose} component={RouterLink} to="/">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </StyledMenuItem>
        ) : null}

        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-3">
          <ListItemIcon>
            <GithubIcon />
          </ListItemIcon>
          <ListItemText primary="Page 3" />
        </StyledMenuItem>

        <StyledMenuItem onClick={onClose} component={RouterLink} to="/page-4">
          <ListItemIcon>
            <BugIcon />
          </ListItemIcon>
          <ListItemText primary="Page 4" />
        </StyledMenuItem>
      </List>
    </SwipeableDrawer>
  )
}

export default Menu
