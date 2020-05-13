import React from "react";


import styled from "styled-components";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';

import Particles from 'react-particles-js';

import { connect } from "react-redux";
import { fetchData } from '../actions' 

const Part = styled.div`
  width: 100%;
  z-index: 2;
`;

const Big = styled.div`
  position: absolute;
  top: 2%
`;

const CardParticle = () => {
    return <Particles params= {{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#020000"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 9,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.49717086105258135,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 11.83740145363289,
            random: true,
            anim: {
              enable: true,
              speed: 79.1158207667042,
              size_min: 0,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#eb2424",
            opacity: 0.4419296542689612,
            width: 3.4723044263989813
          },
          move: {
            enable: true,
            speed: 3.333805622463184,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "repulse"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 215.37162162162147,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 304.05405405405384,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }} />
}

const useStyles = makeStyles({
    root: {
      width: '94%',
      height: '27rem',
      margin: '0% auto'
    },
    title: {
        textAlign: 'center',
        fontSize: '4rem'
    },
    title2: {
        textAlign: 'center',
        fontSize: '2.5rem',
        margin: '5% 0% 3%'
    },
    cardTitle: {
      fontSize: '1.5rem',
      margin: '0% 0% 2%',
      textAlign: 'center'
    },
    subtitle: {
        textAlign: 'center',
        fontSize: '1.5rem',
        margin: '2% 0% 0%'
    },
    body2: {
        lineHeight: '2rem',
        fontWeight: 'bold',
        margin: '0% 9%'
    },
    container1:{
        width: '100%',
        margin: '0%'
    },
    container2: {
        margin: '0% auto',
        width: '50%'
    },
    list1: {
        display: 'flex',
        width: '100%',
        wordWrap: 'break-word',
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontStyle: 'italic'
    },
    list2: {
      textAlign: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
    },
    listItem: {
      width: '18%',
      margin: '1% 3% 0% 0%'
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        margin: '2% 0% 0%'
    },
    media: {
      height: '63vh',
      margin: '0% -9% 5%'
    },
});

const ProjectList = (props) => {
    const classes = useStyles();

    React.useEffect(() => {
      props.fetchData()
    }, [])

    return (
        <div>
            <h1 className={classes.title}>Projects Showcase</h1>
            <div className={classes.container1} style={{ borderBottom: '5px dotted black' }}>
                <h2 className={classes.title2}>Back-End Projects</h2>
                <Grid className={classes.container2}>
                {props.projects.map((project, index) => (
                  <div>
                    <Card key={index} className={classes.root}>
                        <CardContent>
                            <Typography className={classes.cardTitle}>{project.Title}</Typography>
                            <Typography className={classes.body2}>{project.Description}</Typography>
                            <Typography className={classes.subtitle}>Project Tech</Typography>
                            <div className={classes.list1}>
                            {project.Tech.map((tech, index) => 
                                <Typography>
                                    <ul key={index}>
                                        <li>{tech}</li>
                                    </ul>
                                </Typography>
                            )}
                            </div>
                            
                            <div className={classes.button}>
                                <h6>GitHub Link</h6>
                                <Button>
                                    <GitHubIcon fontSize={'large'}>
                                        <a href={project.GitHub}>GitHub Link</a>
                                    </GitHubIcon>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <div>
                      <img src={project.Picture} alt="Screenshot example of code" className={classes.media}/>
                    </div>
                  </div>
                ))}
                </Grid>
            </div>
          
            <div className={classes.container1}>
                <h2 className={classes.title2}>Front-End Projects</h2>
                <Grid className={classes.container2}>
                  <div>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.cardTitle}>Replate</Typography>
                            <Typography className={classes.body2}>In this project I was the Senior Front-End React Developer. I was tasked with the state management(Full CRUD), architecture, 
                            and guiding the Junior Front-End Developers. There was many hiccups but in the end I was able to construct most of the front end myself in the given
                            time frame of about 3-4 days.</Typography>
                            <Typography className={classes.subtitle}>Project Tech</Typography>
                            <div>
                                <Typography>
                                    <ul className={classes.list2}>
                                      <li className={classes.listItem}>React</li>
                                      <li className={classes.listItem}>React-Dom</li>
                                      <li className={classes.listItem}>React-Router-Dom</li>
                                      <li className={classes.listItem}>React-Scripts</li>
                                      <li className={classes.listItem}>Redux</li>
                                      <li className={classes.listItem}>Redux-Thunk</li>
                                      <li className={classes.listItem}>Styled-Components</li>
                                      <li className={classes.listItem}>Axios</li>
                                    </ul>
                                </Typography>
                            </div>
                            <div className={classes.button}>
                                <h6>GitHub Link</h6>
                                <Button>
                                    <GitHubIcon fontSize={'large'}>
                                        <a href="https://github.com/replate-2/FE">GitHub Link</a>
                                    </GitHubIcon>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <div>
                      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-backend-e57d4.appspot.com/o/Frontend%2Findex.js%20-%20FE%20-%20Visual%20Studio%20Code%205_12_2020%2011_39_51%20AM.png?alt=media&token=2102825d-ab45-42d9-83cd-fb0e755af55f" alt="Screenshot example of code" className={classes.media}/>
                    </div>
                  </div>
                </Grid>
            </div>

                <Grid className={classes.container2}>
                  <div>
                    <Card className={classes.root} style={{ height: '30rem' }}>
                        <CardContent>
                            <Typography className={classes.cardTitle}>Ride-For-Life</Typography>
                            <Typography className={classes.body2}>In this project I was the Junior Front-End React Developer working under my Senior. My objectives this project was 
                            creating responsive forms, designing the layout, and fulfilling the tasks my Senior requested of me. I had more freedom this project so I took the 
                            opportunity to learn React-Hook-Forms and React-Alert hooks all while assisting my Senior as much I could.</Typography>
                            <Typography className={classes.subtitle}>Project Tech</Typography>
                            <div>
                                <Typography>
                                    <ul className={classes.list2}>
                                      <li className={classes.listItem}>React</li>
                                      <li className={classes.listItem}>React-Dom</li>
                                      <li className={classes.listItem}>React-Router-Dom</li>
                                      <li className={classes.listItem}>React-Scripts</li>
                                      <li className={classes.listItem}>React-Hook-Form</li>
                                      <li className={classes.listItem}>React-Alert</li>
                                      <li className={classes.listItem} style={{ width: '20%'}}>React-Loader-Spinner</li>
                                      <li className={classes.listItem}>Styled-Components</li>
                                      <li className={classes.listItem}>Axios</li>
                                    </ul>
                                </Typography>
                            </div>
                            <div className={classes.button}>
                                <h6>GitHub Link</h6>
                                <Button>
                                    <GitHubIcon fontSize={'large'}>
                                        <a href="https://github.com/Build-Ride-For-Life/Front-End">GitHub Link</a>
                                    </GitHubIcon>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <div>
                      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-backend-e57d4.appspot.com/o/Frontend%2FDriverLogin.js%20-%20Front-End%20-%20Visual%20Studio%20Code%205_12_2020%2012_43_55%20PM.png?alt=media&token=c05f17c6-56a4-4e8e-9957-99f23b5a5c07" alt="Screenshot example of code" className={classes.media}/>
                    </div>
                  </div>
                </Grid>

                <Grid className={classes.container2}>
                  <div>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.cardTitle}>React-Bubbles</Typography>
                            <Typography className={classes.body2}>This was a fun project that happen to also be my last Sprint Challenge for the Front-End. I was tasked with creating
                            axios calls with authentication to apply to the login/sign in, creating multiple axios calls to meet the project objectives, and I also completed a stretch goal 
                            all within 3 hours.</Typography>
                            <Typography className={classes.subtitle}>Project Tech</Typography>
                            <div>
                                <Typography>
                                    <ul className={classes.list2}>
                                      <li className={classes.listItem}>React</li>
                                      <li className={classes.listItem}>React-Dom</li>
                                      <li className={classes.listItem}>React-Router-Dom</li>
                                      <li className={classes.listItem}>React-Scripts</li>
                                      <li className={classes.listItem}>Axios</li>
                                    </ul>
                                </Typography>
                            </div>
                            <div className={classes.button}>
                                <h6>GitHub Link</h6>
                                <Button>
                                    <GitHubIcon fontSize={'large'}>
                                        <a href="https://github.com/William-Ryan/react-bubbles">GitHub Link</a>
                                    </GitHubIcon>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <div>
                      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-backend-e57d4.appspot.com/o/Frontend%2FColorList.js%20-%20react-bubbles%20-%20Visual%20Studio%20Code%205_12_2020%201_26_42%20PM.png?alt=media&token=c2e4335b-496d-4052-9912-1e2632e8d6dc" alt="Screenshot example of code" className={classes.media}/>
                    </div>
                  </div>
                </Grid>

                <Grid className={classes.container2}>
                  <div>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.cardTitle}>JavaScript-Sprint-Challenge</Typography>
                            <Typography className={classes.body2}>This was my first sprint challenge after being introduced to JavaScript for a week. This entire project is pure
                            Vanilla JavaScript in which I was tested on my understanding of all the basic and advanced fundamentals. I completed all my objectives for the test and
                            also managed to complete the stretch goals as well, as per usual in the timeframe of about 3 hours.</Typography>
                            <Typography className={classes.subtitle}>Project Tech</Typography>
                            <div>
                                <Typography>
                                    <ul className={classes.list2}>
                                      <li className={classes.listItem}>JavaScript</li>
                                    </ul>
                                </Typography>
                            </div>
                            <div className={classes.button}>
                                <h6>GitHub Link</h6>
                                <Button>
                                    <GitHubIcon fontSize={'large'}>
                                        <a href="https://github.com/William-Ryan/Sprint-Challenge--JavaScript">GitHub Link</a>
                                    </GitHubIcon>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <div>
                      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-backend-e57d4.appspot.com/o/Frontend%2Fobjects-arrays.js%20-%20Sprint-Challenge--JavaScript%20-%20Visual%20Studio%20Code%205_13_2020%2012_15_43%20PM.png?alt=media&token=75f86b9e-b006-41c6-b8d2-2da8d654b498" alt="Screenshot example of code" className={classes.media}/>
                    </div>
                  </div>
                </Grid>

                <Grid className={classes.container2}>
                  <div>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.cardTitle}>Gigapet</Typography>
                            <Typography className={classes.body2}>This project was my first build week. My partner and I were tasked with creating the landing page and an about us 
                            page for the build team. We created everything using semantic HTML, CSS, and LESS. I was in charge of the landing page while my partner was in charge of
                            the about us page, but we would cross back and forth to help with different sections.</Typography>
                            <Typography className={classes.subtitle}>Project Tech</Typography>
                            <div>
                                <Typography>
                                    <ul className={classes.list2}>
                                      <li className={classes.listItem}>Semantic HTML</li>
                                      <li className={classes.listItem}>CSS</li>
                                      <li className={classes.listItem}>LESS</li>
                                    </ul>
                                </Typography>
                            </div>
                            <div className={classes.button}>
                                <h6>GitHub Link</h6>
                                <Button>
                                    <GitHubIcon fontSize={'large'}>
                                        <a href="https://github.com/Build-Week-Gigapet1/Marketing-Page">GitHub Link</a>
                                    </GitHubIcon>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <div>
                      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-backend-e57d4.appspot.com/o/Frontend%2Findex.html%20-%20Marketing-Page%20-%20Visual%20Studio%20Code%205_13_2020%2012_48_38%20PM.png?alt=media&token=92bb1098-3474-4075-bc94-a69753a7a341" alt="Screenshot example of code" className={classes.media}/>
                    </div>
                  </div>
                </Grid>
        </div>
    )
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps, {fetchData})(ProjectList);

