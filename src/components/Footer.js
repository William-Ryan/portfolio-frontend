import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontStyle: 'italic'
  },
});

const Footer = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Typography variant="caption" display="block" align='center'>
                William Ryan © {(new Date().getFullYear())}
            </Typography>
        </div> 
    )
}

export default Footer;