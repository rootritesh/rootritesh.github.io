import React from 'react';
import './pro.css';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";

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

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
//   };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
export default function MediaCard() {
    
    const useStyles = makeStyles((theme) => ({

      

        root1: {
            // justifyContent: 
            flexGrow: 1,
            // justifyItems: 'center',
            // justifyContent: 'center',
            // alignItems: 'center',
            // marginLeft: theme.spa
            width: '100%',
            // backgroundColor: theme.palette.background.paper,
          },

        // root: {
        //     width: '100%',
        //     maxWidth: 360,
        //     backgroundColor: theme.palette.background.paper,
        //   },
          chip: {
            marginRight: theme.spacing.unit,
            margin: theme.spacing(1),
          },
          section1: {
            margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
          },
          section2: {
            margin: theme.spacing.unit * 2,
          },
          section3: {
            margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
          },


        
        prohead:{
            marginTop: theme.spacing(20),
        },
        icon: {
            marginRight: theme.spacing(2),
          },
          heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 0, 6),
          },
          heroButtons: {
            marginTop: theme.spacing(4),
          },
          cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
          },
          card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            margin: theme.spacing(1),
            // padding: theme.spacing(1),
          },
          cardMedia: {
            paddingTop: '56.25%', // 16:9
            marginBottom: theme.spacing(1),
          },
          cardContent: {
            flexGrow: 1,
          },
        footer: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(6),
        },
        cou:{
            // margin: theme.spacing(0,50),
            justifyContent: 'center',
        //     justifyItems: 'center',
        //     alignItems: 'center',
        },
        carditems:{
          marginTop: theme.spacing(2),  
        },
        prosubhead:{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: theme.spacing(10),
        },
        divi:{
          Width: 50,

        },
        heading: {
          justifyContent: 'center',
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
        root:{
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          // margin: theme.spacing(0,10),
        },
        root1: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
      }));


      const AccordionSummary = withStyles({
        root: {
          flexDirection: "column"
        },
        content: {
          marginBottom: 0
        },
        expandIcon: {
          marginRight: 0,
          paddingTop: 0
        }
      })(MuiAccordionSummary);

      const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

      
    const classes = useStyles();

  return (
      <>

    

      <div name="project">
          <Typography className={classes.prohead} component="h2" variant="h1" align="center" color="textPrimary" gutterBottom>
              Projects
            </Typography>
            {/* <Typography className={classes.prosubhead} component="h4" variant="h4"  color="textPrimary">
              DevOps
            </Typography>
              <Divider></Divider> */}



<div className={classes.root3}>

<Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

              <Grid  xs={12} sm={6} md={4}  className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="./dev.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      DevOps Project
                    </Typography>
                    <Typography>
                    Deploy Webserver using the best Principles, Tools, Techniques of DevOps Culture.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  
                  <Button href ="https://rootritesh.medium.com/devops-project-f17715ca132b" variant="contained" color="primary" fullWidth>
                      

                    Learn More
                    </Button>
                      
                      {/* <Link href="https://rootritesh.medium.com/devops-project-f17715ca132b" color="inherit" centered> 
                    <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button>
                    </Link> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
                

               
              </Grid>
              
              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*5C2wJWPwllSLJqvq4Ajvbg.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Jenkins Role Ansible
                    </Typography>
                    <Typography>
                    
                      Create Role for installation of Jenkins                

                   </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/ansible-jenkins-role-58088247b4bd" variant="contained" color="primary" fullWidth>
                    Learn More
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card> 
              </Grid>
              
              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*P_RzvYJlhO_EGnI8N63F9w.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    K8s Multi-Node on Multi-Cloud
                    </Typography>
                    <Typography>
                    Configure K8s Multi-Node Cluster on Multi-Cloud.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/k8s-multi-node-on-multi-cloud-9529e6258103" variant="contained" color="primary" fullWidth>
                      
                    Learn More
                     
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
              

              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*uIhF-56fRXNtw6HIRE5AYQ.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    AWS EKS
                    </Typography>
                    <Typography>
                    Deploy Joomla + Mysql on AWS EKS.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/eks-task-9bc836d11f10" variant="contained" color="primary" fullWidth> 
                     Learn More
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>

              
              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://media-exp1.licdn.com/dms/image/C5612AQELp3iQbnMHYg/article-cover_image-shrink_600_2000/0/1593205957201?e=1626307200&v=beta&t=FZFizGCkMpUBsB89H7FnCwW3WJedHuSa-3t2za6Ojss"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Jenkins Cluster
                    </Typography>
                    <Typography>
                    Create A dynamic Jenkins cluster and deploy the Webserver on k8s.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://www.linkedin.com/pulse/devops-task4-ritesh-singh/" variant="contained" color="primary" fullWidth>
                      
                    Learn More
                     
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
              
               <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*ngscQeh1XfBTtlV8HYOSsw.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Configuring k8s Multi-Node cluster using Ansible
                    </Typography>
                    <Typography>
                    Ansible Roles to Configure K8S Multi-Node Cluster over AWS Cloud.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/configuring-k8s-multi-node-cluster-using-ansible-167dcad714d8" variant="contained" color="primary" fullWidth>
                      
                    Learn More
                     
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
              

              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://media-exp1.licdn.com/dms/image/C4E12AQEAhRPrPYdNBg/article-cover_image-shrink_423_752/0/1593592277072?e=1626307200&v=beta&t=j-S7ldrf7OjKO9QD-kArntuEq1ROz0bnl16T3vai75k"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Integrate Prometheus and Grafana
                    </Typography>
                    <Typography>
                    Integrate Prometheus + Grafana on k8s and make there data persistent 
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://www.linkedin.com/pulse/devopstask5-ritesh-singh/" variant="contained" color="primary" fullWidth>
                      

                    Learn More
                    
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>

              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*2KjxHk0RSK57B52B6NLS8w.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Groovy Automation
                    </Typography>
                    <Typography>
                    Use groovy to make CI/CD on jenkins 
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/groovy-automation-devopstask6-61cd69743c4f" variant="contained" color="primary" fullWidth>
                      

                    Learn More
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
     
          

              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/1000/1*bwrCGzwCqygS3WedW9CukA.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Deploy RDS(AWS) +Wordpress(Minikube) using Terraform
                    </Typography>
                    <Typography>
                    Write an Infrastructure as code using terraform, which automatically deploy the Wordpress(k8s) + RDS 
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/deploy-rds-wordpress-on-minikube-using-terraform-c5592995fdbf" variant="contained" color="primary" fullWidth>
                      

                    Learn More
                     
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
              
              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*iHjx1cYirAXZEKMZu0AVjA.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Configure Wordpress(Public Subnet) + Mysql(Private Subnet) + NAT Gateway on AWS using Terraform
                    </Typography>
                    <Typography>
                    Use Terraform to do following operations.......
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/configure-wordpress-public-subnet-mysql-private-subnet-nat-gateway-on-aws-using-terraform-676f9f968921" variant="contained" color="primary" fullWidth>
                      

                    Learn More
                      
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>

              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*j0-XnsnQv2TdPw7XgkgzLg.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Ansible playbooks to launch the EC2 instance and configure minikube in it.
                    </Typography>
                    <Typography>
                    Create  Ansible playbooks Firts playbook to launch EC2 and second playbook to configure minikube in it. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/create-an-ansible-playbook-to-launch-the-ec2-instance-and-configure-minikube-in-it-894dfde577dd" variant="contained" color="primary" fullWidth>
                      

                    Learn More
                      
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>

<Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*IRxZZOeetdgTl9s5ub9qkg.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Netflix-Originals Clone using React js for beginners
                    </Typography>
                    <Typography>
                      
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/netflix-originals-clone-using-react-js-for-beginners-b2970c4532d" variant="contained" color="primary" fullWidth>
                      

                    Learn More
                      
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>


              </Grid>
        </Container>          

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Show More(Mini Projects)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography> */}
          <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

              <Grid  xs={12} sm={6} md={4}  className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*5KB0vBOGYYqxXd6qmGhuBQ.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Create an Ansible playbook that will retrieve container IP and update the inventory
                    </Typography>
                    <Typography>
                    Create an Ansible playbook that will retrieve container IP and update the inventory. So that further Configuration of the Webserver could be done inside that Container.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  
                  <Button href ="https://rootritesh.medium.com/create-an-ansible-playbook-that-will-retrieve-container-ip-and-update-the-inventory-ac586f0e612" variant="contained" color="primary" fullWidth>
                      

                    Learn More
                    </Button>
                      
                      {/* <Link href="https://rootritesh.medium.com/devops-project-f17715ca132b" color="inherit" centered> 
                    <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button>
                    </Link> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
                

               
              </Grid>
              
              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*kF52JMuELR2C6Mfy_0c4og.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Configure LB(haproxy) using Ansible-Roles on AWS.
                    </Typography>
                    <Typography>
                    Create Roles one role for LB(haproxy) and second role for launching ec2 instance.
                                      

                   </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/configure-lb-haproxy-using-ansible-roles-on-aws-bb1350d0b30a" variant="contained" color="primary" fullWidth>
                    Learn More
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
                

               
              </Grid><Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*65pAzrccK6TrULaPgOQ4Tw.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Ansible config docker-ce in Redhat8
                    </Typography>
                    <Typography>
                    Write an Ansible PlayBook that does the following operations in the managed nodes......
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/ansible-config-docker-ce-in-redhat8-96e6bc198890" variant="contained" color="primary" fullWidth> 
                     Learn More
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*oRqmZtr0kzcqj00D7MxZPQ.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Hadoop hdfs cluster using Ansible Roles
                    </Typography>
                    <Typography>
                    Create roles for Hadoop, first role for Hadoop master and second role for Hadoop slave.
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/configure-the-hadoop-hdfs-cluster-using-ansible-roles-b059265b2390" variant="contained" color="primary" fullWidth>
                      
                    Learn More
                     
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>

              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/1000/1*2K7WZCWjbyUHOBwzX2aAdQ.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Deploy Web Server on AWS through ANSIBLE!
                    </Typography>
                    <Typography>
                    Deploy webserver on AWS using Ansible Dynamic inventory
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/deploy-webserver-on-aws-using-ansible-dynamic-inventory-19b5aeca87f4" variant="contained" color="primary" fullWidth>
                      

                    Learn More
                    
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>

              <Grid  xs={12} sm={6} md={4} className={classes.carditems}>
                
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://miro.medium.com/max/700/1*ycW38mC7KaPwP1SQufDe4w.png"
                    title=""
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Building Chat Application using Socket Programming in Python
                    </Typography>
                    <Typography>
                    Build chat app use socket programming , UDP protocol and multi threading concept 
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button href="https://rootritesh.medium.com/building-chat-application-using-socket-programming-in-python-3b4dfeea6426" variant="contained" color="primary" fullWidth>
                      

                    Learn More
                    </Button>
                    {/* <Button size="small" color="primary" justify="center">
                      Learn more
                    </Button> */}
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
     
          

              





              </Grid>
        </Container> 
          
          
        </AccordionDetails>
      </Accordion>
      
    </div>

          </div>
    </>
  );
}
