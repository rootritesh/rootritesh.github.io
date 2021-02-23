import './skill.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
  
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';



export default function Skill() {

    const useStyles = makeStyles((theme) => ({

        skillhead:{
            // marginTop: theme.spacing(),
            margin: theme.spacing(10,0),
        },
        butmain:{
            margin: theme.spacing(1),
            // padding: theme.spacing(1),
        },
        lastdiv:{
            marginTop: theme.spacing(10),
        },
        
      }));

    const classes = useStyles();


    return(
        <>
        <Typography className={classes.skillhead} component="h2" variant="h1" align="center" color="textPrimary" gutterBottom>
              Skills
            </Typography>

        <div className={classes.butmain}>
        
        <Button className={classes.butmain} variant="outlined" color="primary">
        DevOpsAL
        </Button>
        <Button className={classes.butmain} variant="outlined" color="secondary">
        Hybrid-Mult-Cloud
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        kubernetes
        </Button>
        <Button className={classes.butmain} variant="outlined" color="">
        Terraform
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        Jenkins
        </Button>
        <Button className={classes.butmain} variant="outlined" color="secondary">
        Ansible
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        Red hat linux
        </Button>
        <Button className={classes.butmain} variant="outlined" color="">
        Grafana
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        prometheus
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        Docker
        </Button>
        <Button className={classes.butmain} variant="outlined" color="">
        Git/github
        </Button>
        <Button className={classes.butmain} variant="outlined" color="secondary">
        Elastic Stack(ELK)
        </Button>
        <Button className={classes.butmain} variant="outlined" color="">
        Amazon web services(AWS)
        </Button>
        <Button className={classes.butmain} variant="outlined" color="">
        python
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        Google Cloud Platform(GCP)
        </Button>
        <Button className={classes.butmain} variant="outlined" color="secondary">
        Hadoop
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        OpenStack
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        Openshift(DO101)
        </Button>
        <Button className={classes.butmain} variant="outlined" color="">
        HTML5
        </Button>
        <Button className={classes.butmain} variant="outlined" color="secondary">
        CSS
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        JavaScript
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        BootStrap
        </Button>
        <Button className={classes.butmain} variant="outlined" color="secondary">
        React.js
        </Button>
        
        <Divider name="project" className={classes.lastdiv}></Divider>

        </div>        
</>
    );
}