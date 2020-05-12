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
        borderBottom: '5px dotted black',
        width: '100%',
        margin: '0%'
    },
    container2: {
        margin: '0% auto',
        width: '50%'
    },
    list: {
        display: 'flex',
        width: '100%',
        wordWrap: 'break-word',
        flexWrap: 'wrap',
        justifyContent: 'center',
        fontStyle: 'italic'
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
    },[])

    return (
        <div>
            <h1 className={classes.title}>Projects Showcase</h1>
            <div className={classes.container1}>
                <h2 className={classes.title2}>Back-End Projects</h2>
                <Grid className={classes.container2}>
                {props.projects.map((project, index) => (
                  <div>
                    <Card key={index} className={classes.root}>
                        <CardContent>
                            <Typography className={classes.cardTitle}>{project.Title}</Typography>
                            <Typography className={classes.body2}>{project.Description}</Typography>
                            <Typography className={classes.subtitle}>Project Tech</Typography>
                            <div className={classes.list}>
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
                                        <a href={project.GitHub}/>
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
            <div>
                    <h2>Front-End Projects</h2>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps, {fetchData})(ProjectList);

