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
import Tooltip from '@material-ui/core/Tooltip';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { ZoomIn } from '@material-ui/icons';



export default function Skill() {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            padding: theme.spacing(0,5),
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',

          },
          paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height: '100px',
            width: '100px',
          },
        skillhead:{
            // marginTop: theme.spacing(),
            margin: theme.spacing(10,0),
        },
        butmain:{
            margin: theme.spacing(2),
            // padding: theme.spacing(1),
        },
        lastdiv:{
            marginTop: theme.spacing(10),
        },
        skillhover:{
            '&:hover': {
                // height: '120px',
                // transition: 'all 0.5s',
                // height: '120px',

                
                // width: '120px',
                // Animation: ZoomIn,
            }, 

        },
        centeritem:{
          justifyContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
        },
        
      }));

    const classes = useStyles();


    return(
        <>
        <Typography className={classes.skillhead} component="h2" variant="h1" align="center" color="textPrimary" gutterBottom>
              Skills
            </Typography>

        <div className={classes.root}>
        <Grid container spacing={3} className={classes.centeritem}>
        <Grid item>
          <Tooltip title="Docker" interactive><Paper className={classes.paper}><img alt="Docker" className={classes.butmain,classes.skillhover} height="100px" src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"/></Paper></Tooltip>
        </Grid>
        <Grid item>
        <Tooltip title="Kubernetes" interactive><Paper className={classes.paper}><img alt="Kubernetes" className={classes.butmain,classes.skillhover} height="100px" src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"/></Paper></Tooltip>
        </Grid>
        <Grid item >
          <Tooltip title="Amazon Web Services" interactive><Paper className={classes.paper}><img alt="AWS" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/color/144/000000/amazon-web-services.png"/></Paper></Tooltip>
        </Grid>
        <Grid item >
          <Tooltip title="Microsoft Azure" interactive><Paper className={classes.paper}><img alt="Azure" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/color/144/000000/azure-1.png"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="OpenStack" interactive><Paper className={classes.paper}><img alt="OpenStack" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/color/144/000000/openstack.png"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="OpenShift" interactive><Paper className={classes.paper}><img alt="OpenShift" className={classes.butmain,classes.skillhover} height="100px" src="https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Terraform" interactive><Paper className={classes.paper}><img alt="Terraform" className={classes.butmain,classes.skillhover} height="100px" src="https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg"/></Paper></Tooltip>
        </Grid>
        <Grid item >
          <Tooltip title="Ansible" interactive><Paper className={classes.paper}><img alt="Ansible" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/color/144/000000/ansible.png"/></Paper></Tooltip>
        </Grid>
        <Grid item >
          <Tooltip title="Jenkins" interactive><Paper className={classes.paper}><img alt="Jenkins" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/color/144/000000/jenkins.png"/></Paper></Tooltip>
        </Grid>
        <Grid item >
          <Tooltip title="CircleCi" interactive><Paper className={classes.paper}><img alt="Jenkins" className={classes.butmain,classes.skillhover} height="100px" src="https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg"/></Paper></Tooltip>
        </Grid>
        
        <Grid item >
          <Tooltip title="Git" interactive><Paper className={classes.paper}><img alt="Git" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/color/144/000000/git.png"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Github" interactive><Paper className={classes.paper}><img alt="Github" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/material-outlined/144/000000/github.png"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Prometheus" interactive><Paper className={classes.paper}><img alt="Prometheus" className={classes.butmain,classes.skillhover} height="100px" src="https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Grafana" interactive><Paper className={classes.paper}><img alt="Prometheus" className={classes.butmain,classes.skillhover} height="100px" src="https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg"/></Paper></Tooltip>
        </Grid>
        
        <Grid item>
          <Tooltip title="Linux" interactive><Paper LclassName={classes.paper}><img alt="Docker" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/color/144/000000/linux--v1.png"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Shell Script" interactive><Paper className={classes.paper}><img alt="Docker" className={classes.butmain,classes.skillhover} height="100px" src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Python" interactive><Paper className={classes.paper}><img alt="Docker" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/color/144/000000/python--v1.png"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="HTML5" interactive><Paper className={classes.paper}><img alt="Docker" className={classes.butmain,classes.skillhover} height="100px" src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="CSS3" interactive><Paper className={classes.paper}><img alt="Docker" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/color/144/000000/css3.png"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="JavaScript" interactive><Paper className={classes.paper}><img alt="Docker" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/color/144/000000/javascript--v1.png"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="BootStrap" interactive><Paper className={classes.paper}><img alt="Docker" className={classes.butmain,classes.skillhover} height="100px" src="https://img.icons8.com/color/144/000000/bootstrap.png"/></Paper></Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="React.js" interactive><Paper className={classes.paper}><img alt="Docker" className={classes.butmain,classes.skillhover} height="100px" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"/></Paper></Tooltip>
        </Grid>
         
      </Grid>

      
      

      
        </div>


        {/* <div className={classes.butmain}> */}

        
        


        

        {/* Skills on Buttons */}
        {/* <Button className={classes.butmain} variant="outlined" color="primary">
        DevOps
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        Kubernetes
        </Button>
        <Button className={classes.butmain} variant="outlined" color="">
        Terraform
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        Jenkins
        </Button>
        <Button className={classes.butmain} variant="outlined" color="primary">
        Circleci
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
        Prometheus
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
        <Button className={classes.butmain} variant="outlined" color="secondary">
        Microsoft Azure
        </Button>
        <Button className={classes.butmain} variant="outlined" color="">
        python
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
        </Button> */}
        
        <Divider name="project" className={classes.lastdiv}></Divider>

        {/* </div>         */}
</>
    );
}