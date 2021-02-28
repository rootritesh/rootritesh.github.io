import React from 'react';
import './contact.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    justifyContent: 'center',
    margin: theme.spacing(5,5),
  },
  heroButtons:{
    marginTop: theme.spacing(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  carditem:{
    margin: theme.spacing(0,10),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
<>
    <div className ={classes.heroButtons}>
            
          <Container  name="contact" maxWidth="xs" className={classes.heroButtons}>
          {/* <TravelerEffect /> */}

          {/* <ParticlesBg type="circle" bg={true} /> */}
            <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>
              Contact
            </Typography>
            <Typography component="h1" variant="h6" align="center" color="textPrimary" gutterBottom>
            <Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <MailOutlineIcon fontSize="large" color="primary"></MailOutlineIcon>
          </Typography>
          <Typography component="h6">
            
          <a className="gmailtext" href="mailto:rootritesh64@gmail.com">rootritesh64@gmail.com</a>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
            </Typography>
            


           </Container>
           </div> 



    


    </>
  );
}
