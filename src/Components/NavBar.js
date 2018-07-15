import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      textAlign: "center"
    },
  };

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
                Brittany Greaner
            </Typography>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="/about">About</Button>
            <Button color="inherit" href="/portfolio">Portfolio</Button>
            </Toolbar>
        </AppBar>
        </div>
        );
    }
      
NavBar.propTypes = {
classes: PropTypes.object.isRequired,
};
      
export default withStyles(styles)(NavBar);