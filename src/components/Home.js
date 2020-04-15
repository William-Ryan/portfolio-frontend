import React from 'react';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Image from '../images/LightBulb.jpg';

const useStyles = makeStyles(() => ({
    body1: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    },
    body2: {
        margin: '15% 41% 13% 5%',
    },
    profile: {
        height: '20rem'
    }
}))



const Home = () => {
    const classes = useStyles();
    const theme = createMuiTheme({
        typography: {
            fontFamily: 'sans-serif',
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.body1} theme={theme}>
                <div>
                <Typography variant={"h1"}>
                    Hello!
                </Typography>
                <Typography variant={"h3"}>
                    I'm William a Web Developer.
                </Typography>
                </div>
                <div className={classes.body2}>
                    <img className={classes.profile} src={require('../images/Professional.jpg')} alt="site owner William"></img>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Home;