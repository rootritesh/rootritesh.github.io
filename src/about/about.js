// import React from 'react';
// import './sec1.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import ParticlesBg from 'particles-bg';

import Image from "material-ui-image";

import Divider from '@material-ui/core/Divider';

export default function About() {

    const useStyles = makeStyles((theme) => ({
        main: {
          marginTop: theme.spacing(55),
          
        },
        heroContent: {
          backgroundColor: theme.palette.background.paper,
          marginTop: theme.spacing(30),
          padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
          marginTop: theme.spacing(30),
        },
        cardhead:{
            marginTop: theme.spacing(8),
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
        carditem:{
            margin: theme.spacing(20),
            
        },
        card: {
            //   height: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: theme.spacing(10),
        },
        cardMedia: {
          paddingTop: '56.25%', // 16:9
        },
        cardContent: {
          flexGrow: 1,
        },
        footer: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(6),
        },
      }));
      

      const classes = useStyles();




    return(

        
       
        <div className={classes.main} >
            
            <Divider name="about" ></Divider>
          <Container maxWidth="sm">
         
            <Typography className={classes.cardhead} component="h2" variant="h1" align="center" color="textPrimary" gutterBottom>
              About ME
            </Typography>

            <Typography variant="h6" align="center" color="textSecondary" paragraph>

            My name is Ritesh Singh. I am pursuing B.tech(CSE) from Lovely Professional University.
            Tech Enthusiast, zeal for learning, and explore the new technologies,
            loves to do automation in today's Agile world.
            </Typography>

            
            <Divider name="skill"></Divider>
          </Container>
          
        </div>
    )
}