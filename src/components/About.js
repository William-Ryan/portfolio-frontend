import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    body1: {
        fontSize: '1.5rem',
        margin: '0% 2% 2%',
        lineHeight: '4rem',
        padding: '2% 21%',
        borderBottom: '5px dotted crimson'
    },
    list: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '1% 0%',
        borderBottom: '5px dotted crimson',
        margin: '2% 0%'
    },
    ending: {
        textAlign: 'center',
        padding: '2% 0%',
        margin: '0% 7%'
    }
}))

const About = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant={"h1"} align={'center'} style={{ fontSize: '5rem', margin: '1% 0%'}}>About Me</Typography>
            <div>
                <Typography variant={"h2"} align={'center'} style={{ fontSize: '3rem', margin: '2% 0% 0%'}}>Who is William Ryan?</Typography>
                <Typography variant={"body1"} paragraph={'true'} align={'center'} className={classes.body1}>
                    I'm foremost a lover of technology and learning, who's determination allows them to tackle 
                    any problem head on towards finding a solution! My technical profession is being a 
                    Full-Stack Developer, but truthfully I feel my education and experiences have given 
                    me so much more then the average Developer. I am confident with time I can take just about 
                    any language or library and gain an aptitude for it's knowledge. I look forward to getting to 
                    know you better and perhaps even working together. Thank you for your consideration!</Typography>
            </div>
            <div>
                <Typography variant={"h2"} align={'center'} style={{ fontSize: '3rem'}}>My Developer Skills</Typography>
            </div>
            <div className={classes.list}>
                <div>
                    <Typography variant={"h4"}>Front-End</Typography>
                    <Typography>
                        <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>LESS</li>
                        <li>GreenSock</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Context API</li>
                        <li>Styled-Components</li>
                        <li>BootStrap</li>
                        <li>ReactStrap</li>
                        <li>Material-UI</li>
                    </ul>
                    </Typography>
                </div>
                <div>
                    <Typography variant={"h4"}>Back-End</Typography>
                    <Typography>
                    <ul>
                        <li>JavaScript</li>
                        <li>NODE.JS</li>
                        <li>Express</li>
                        <li>Knex</li>
                        <li>Sqlite3</li>
                        <li>Postgres</li>
                        <li>Postman</li>
                        <li>Firebase</li>
                    </ul>
                </Typography>
                </div>

                <div>
                    <Typography variant={"h4"}>Personal Ability</Typography>
                    <Typography>
                    <ul>
                        <li>Leadership</li>
                        <li>Mentoring</li>
                        <li>Organized</li>
                        <li>Team-Oriented</li>
                        <li>Remote Independent</li>
                        <li>Strives for Perfection</li>
                        <li>Innovative</li>
                    </ul>
                    </Typography>
                </div>

            </div>
            <div>
                <Typography variant={'h6'} paragraph={'true'} className={classes.ending}>
                    The technical skills I've listed above I feel confident with the ins and outs of their nature,
                    such as the use of custom hooks, parameters, and other nuances that they may be capable of.
                    This list is open and likely in this very moment is being expanded and explored so feel
                    free to inquire on any interests in fields that have not been directly stated above.
                </Typography>
            </div>
        </div>
    )
}

export default About;