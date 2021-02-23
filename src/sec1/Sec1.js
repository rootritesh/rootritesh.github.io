// import React from 'react';
import './sec1.css';
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

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { SocialIcon } from 'react-social-icons';




export default function Sec1() {

    const useStyles = makeStyles((theme) => ({
        icon: {
          marginRight: theme.spacing(2),
        },
        heroContent: {
          backgroundColor: theme.palette.background.paper,
          marginTop: theme.spacing(30),
          padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
          marginTop: theme.spacing(30),
        },
        cardGrid: {
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8),
        },
        card: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
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
        socialicon:{
          margin: theme.spacing(1),
          // padding: theme.spacing(1),
        },
      }));
      

      const classes = useStyles();




    return(

        
        // <div className="sec1main">
        //     <h1 className="sec1head">Hi,</h1>
        //     <h1 className="sec1head">I'm Ritesh Singh</h1>
        // </div>
        <div className ={classes.heroButtons}>
            
          <Container maxWidth="sm">
          {/* <TravelerEffect /> */}

          {/* <ParticlesBg type="circle" bg={true} /> */}
            <Typography component="h1" variant="h1" align="left" color="textPrimary" gutterBottom>
              Hi,
            </Typography>
            <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              I'm Ritesh Singh
            </Typography>
            
            {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography> */}
            <div className>
              <Grid container spacing={2} justify="left">
                <Grid item>
                <SocialIcon className={classes.socialicon} url="https://www.linkedin.com/in/rootritesh/" />
                <SocialIcon className={classes.socialicon} url="https://twitter.com/RiteshS07054000" />
                <SocialIcon className={classes.socialicon} url="https://www.instagram.com/rootritesh/" />
                <SocialIcon className={classes.socialicon} url="https://www.facebook.com/profile.php?id=100012287743272" />
                <SocialIcon className={classes.socialicon} url="https://medium.com/@rootritesh" />
                <SocialIcon className={classes.socialicon} url="https://github.com/rootritesh" />
                
                 
                </Grid>
                
              </Grid>
            </div>
          </Container>
          
        </div>
    )
}