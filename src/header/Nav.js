

import './nav.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from '@material-ui/core/ListItemText';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Popover from '@material-ui/core/Popover';
// import Link from '@material-ui/core/Link';

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const styleSheet = {
  list : {
    width : 200,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
    // color: 'white',
  },

  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  },
  cv:{
    color: "white",
    textDecoration: 'none',
  },
}

class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar >
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {this.props.classes.sideBarIcon}
                onClick={()=>{this.setState({drawer:true})}} />

              <Typography color="inherit" variant = "h6">Ritesh's Portfolio</Typography>
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

            <List className = {this.props.classes.list}>
               <ListItem key = {1} button divider><Typography  color="inherit" >
            <Link to="about" spy={true} smooth={true} duration={500} delay={500}>
              About
              </Link></Typography></ListItem>
               <ListItem key = {2} button divider><Typography  color="inherit" >
            <Link to="skill" spy={true} smooth={true} duration={500} delay={500}>
              Skills
              </Link></Typography></ListItem>
               <ListItem key = {3} button divider><Typography color="inherit" >
            <Link to="project" spy={true} smooth={true} duration={500} delay={500}>
              Projects
              </Link></Typography></ListItem>
               <ListItem key = {4} button divider><Typography color="inherit" >
            <Link to="contact" spy={true} smooth={true} duration={500} delay={500}>
              Contact
              </Link></Typography></ListItem>
             </List>
             <ListItem key = {6} button divider><Typography  color="inherit" >
             <a className="smallnav" href="https://drive.google.com/file/d/1pQr1ZSfsZHNl-w7SJXM05wm2NL7v8Nlz/view?usp=sharing" color="white">Resume
            </a></Typography></ListItem>
             {/* <List>
          {['About', 'Projects', 'Contact', 'Download CV'].map((text, index) => (
            <ListItem button key={text}>
             
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        
         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
      <AppBar className="myappbar">
        <Toolbar>
          
          <Typography variant = "h6" style={{flexGrow:1}} color="inherit" >Ritesh' Portfolio</Typography>
          <Typography className = {classes.padding} color="inherit" >

          <Link activeClass="active" to="about" spy={true} smooth={true} duration={500} delay={500}>
          About
        </Link>

          </Typography>
          
          <Typography className = {classes.padding} color="inherit" >
            <Link to="skill" spy={true} smooth={true} duration={500} delay={500}>
              Skills
              </Link></Typography>
          <Typography className = {classes.padding} color="inherit" >
            <Link to="project" spy={true} smooth={true} duration={500} delay={500}>Projects
            </Link></Typography>
          <Typography className = {classes.padding} color="inherit" ><Link to="contact" spy={true} smooth={true} duration={500} delay={500}>Contact
            </Link></Typography>
          <Typography className = {classes.padding} color="white" ><a className={classes.cv} href="https://drive.google.com/file/d/1pQr1ZSfsZHNl-w7SJXM05wm2NL7v8Nlz/view?usp=sharing" color="white">Resume
            </a></Typography>
        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);