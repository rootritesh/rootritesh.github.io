(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},133:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(9),i=t.n(r),s=(t(117),t.p,t(118),t(88)),o=t(89),l=t(36),d=t(96),m=t(95),j=(t(119),t(180)),h=t(182),b=t(183),p=t(184),u=t(198),x=t(185),g=t(186),O=t(6),f=t(91),v=t.n(f),y=t(21),N=t(1),k=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var c;return Object(s.a)(this,t),(c=a.call(this,e)).state={drawerActivate:!1,drawer:!1},c.createDrawer=c.createDrawer.bind(Object(l.a)(c)),c.destroyDrawer=c.destroyDrawer.bind(Object(l.a)(c)),c}return Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;window.innerWidth<=600&&this.setState({drawerActivate:!0}),window.addEventListener("resize",(function(){window.innerWidth<=600?e.setState({drawerActivate:!0}):e.setState({drawerActivate:!1})}))}},{key:"createDrawer",value:function(){var e=this;return Object(N.jsxs)("div",{children:[Object(N.jsx)(j.a,{children:Object(N.jsx)(h.a,{children:Object(N.jsxs)(b.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(N.jsx)(v.a,{className:this.props.classes.sideBarIcon,onClick:function(){e.setState({drawer:!0})}}),Object(N.jsx)(p.a,{color:"inherit",variant:"h6",children:"Ritesh's Portfolio"}),Object(N.jsx)(p.a,{color:"inherit",variant:"headline"})]})})}),Object(N.jsx)(u.a,{open:this.state.drawer,onClose:function(){e.setState({drawer:!1})},onOpen:function(){e.setState({drawer:!0})},children:Object(N.jsx)("div",{tabIndex:0,role:"button",onClick:function(){e.setState({drawer:!1})},onKeyDown:function(){e.setState({drawer:!1})},children:Object(N.jsxs)(x.a,{className:this.props.classes.list,children:[Object(N.jsx)(g.a,{button:!0,divider:!0,children:Object(N.jsx)(p.a,{color:"inherit",children:Object(N.jsx)(y.Link,{to:"about",spy:!0,smooth:!0,duration:500,delay:500,children:"About"})})},1),Object(N.jsx)(g.a,{button:!0,divider:!0,children:Object(N.jsx)(p.a,{color:"inherit",children:Object(N.jsx)(y.Link,{to:"skill",spy:!0,smooth:!0,duration:500,delay:500,children:"Skills"})})},2),Object(N.jsx)(g.a,{button:!0,divider:!0,children:Object(N.jsx)(p.a,{color:"inherit",children:Object(N.jsx)(y.Link,{to:"project",spy:!0,smooth:!0,duration:500,delay:500,children:"Projects"})})},3),Object(N.jsx)(g.a,{button:!0,divider:!0,children:Object(N.jsx)(p.a,{color:"inherit",children:Object(N.jsx)(y.Link,{to:"contact",spy:!0,smooth:!0,duration:500,delay:500,children:"Contact"})})},4)]})})})]})}},{key:"destroyDrawer",value:function(){var e=this.props.classes;return Object(N.jsx)(j.a,{className:"myappbar",children:Object(N.jsxs)(h.a,{children:[Object(N.jsx)(p.a,{variant:"h6",style:{flexGrow:1},color:"inherit",children:"Ritesh' Portfolio"}),Object(N.jsx)(p.a,{className:e.padding,color:"inherit",children:Object(N.jsx)(y.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,duration:500,delay:500,children:"About"})}),Object(N.jsx)(p.a,{className:e.padding,color:"inherit",children:Object(N.jsx)(y.Link,{to:"skill",spy:!0,smooth:!0,duration:500,delay:500,children:"Skills"})}),Object(N.jsx)(p.a,{className:e.padding,color:"inherit",children:Object(N.jsx)(y.Link,{to:"project",spy:!0,smooth:!0,duration:500,delay:500,children:"Projects"})}),Object(N.jsx)(p.a,{className:e.padding,color:"inherit",children:Object(N.jsx)(y.Link,{to:"contact",spy:!0,smooth:!0,duration:500,delay:500,children:"Contact"})})]})})}},{key:"render",value:function(){return Object(N.jsx)("div",{children:this.state.drawerActivate?this.createDrawer():this.destroyDrawer()})}}]),t}(c.Component),w=Object(O.a)({list:{width:200},padding:{paddingRight:30,cursor:"pointer"},sideBarIcon:{padding:0,color:"white",cursor:"pointer"},cv:{color:"white",textDecoration:"none"}})(k),C=(t(133),t(187)),M=t(188),S=t(61),B=t(40);function W(){var e=Object(C.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(30),padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(30)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},socialicon:{margin:e.spacing()}}}))();return Object(N.jsx)("div",{className:e.heroButtons,children:Object(N.jsxs)(M.a,{maxWidth:"sm",children:[Object(N.jsx)(p.a,{component:"h1",variant:"h1",align:"left",color:"textPrimary",gutterBottom:!0,children:"Hi,"}),Object(N.jsx)(p.a,{component:"h1",variant:"h2",align:"left",color:"textPrimary",gutterBottom:!0,children:"I'm Ritesh Singh"}),Object(N.jsx)("div",{children:Object(N.jsx)(b.a,{container:!0,spacing:0,justify:"left",children:Object(N.jsxs)(b.a,{item:!0,children:[Object(N.jsx)(B.SocialIcon,{className:e.socialicon,url:"https://www.linkedin.com/in/rootritesh/"}),Object(N.jsx)(B.SocialIcon,{className:e.socialicon,url:"https://twitter.com/RiteshS07054000"}),Object(N.jsx)(B.SocialIcon,{className:e.socialicon,url:"https://github.com/rootritesh"}),Object(N.jsx)(B.SocialIcon,{className:e.socialicon,url:"https://medium.com/@rootritesh"})]})})})]})})}t(139);var A=t(189);function L(){var e=Object(C.a)((function(e){return{main:{marginTop:e.spacing(55)},heroContent:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(30),padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(30)},cardhead:{marginTop:e.spacing(8)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},carditem:{margin:e.spacing(20)},card:{display:"flex",flexDirection:"row",justifyContent:"space-around",margin:e.spacing(10)},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}))();return Object(N.jsxs)("div",{className:e.main,children:[Object(N.jsx)(A.a,{name:"about"}),Object(N.jsxs)(M.a,{maxWidth:"sm",children:[Object(N.jsx)(p.a,{className:e.cardhead,component:"h2",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0,children:"About Me"}),Object(N.jsx)(p.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0,children:"My name is Ritesh Singh. I am pursuing B.tech(CSE) from Lovely Professional University. Tech Enthusiast, zeal for learning, and explore the new technologies, loves to do automation in today's Agile world."}),Object(N.jsx)(A.a,{name:"skill"})]})]})}var P=t(94),T=t(39),D=(t(79),t(97),t(145),t(190)),R=t(200),G=t(193),I=t(192),E=t(191),J=t(194),H=(t(197),t(199)),K=t(195),z=t(92),Q=t.n(z);function q(){var e=Object(C.a)((function(e){var a;return a={root1:{flexGrow:1,width:"100%"},chip:{marginRight:e.spacing.unit,margin:e.spacing(1)},section1:{margin:"".concat(3*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")},section2:{margin:2*e.spacing.unit},section3:{margin:"".concat(6*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")},prohead:{marginTop:e.spacing(20)},icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column",margin:e.spacing(1)},cardMedia:{paddingTop:"56.25%",marginBottom:e.spacing(1)},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},cou:{justifyContent:"center"},carditems:{marginTop:e.spacing(2)},prosubhead:{display:"flex",flexGrow:1,flexDirection:"row",justifyContent:"space-around",marginTop:e.spacing(10)},divi:{Width:50},heading:{justifyContent:"center",fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},root:{width:"90%",justifyContent:"center",alignItems:"center",textAlign:"center"}},Object(T.a)(a,"root1",{maxWidth:345}),Object(T.a)(a,"media",{height:140}),a})),a=Object(O.a)({root:{flexDirection:"column"},content:{marginBottom:0},expandIcon:{marginRight:0,paddingTop:0}})(R.a),t=n.a.useState(0),c=Object(P.a)(t,2),r=(c[0],c[1],e());return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{name:"project",children:[Object(N.jsx)(p.a,{className:r.prohead,component:"h2",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0,children:"Projects"}),Object(N.jsxs)("div",{className:r.root3,children:[Object(N.jsx)(M.a,{className:r.cardGrid,maxWidth:"md",children:Object(N.jsxs)(b.a,{container:!0,spacing:4,children:[Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*mzm4oPoNXarjoEUZ0ApUxg.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"DevOps Project"}),Object(N.jsx)(p.a,{children:"Deploy Webserver using the best Principles, Tools, Techniques of DevOps Culture."})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/devops-project-f17715ca132b",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*5C2wJWPwllSLJqvq4Ajvbg.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Jenkins Role Ansible"}),Object(N.jsx)(p.a,{children:"Create Role for installation of Jenkins"})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/ansible-jenkins-role-58088247b4bd",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*uIhF-56fRXNtw6HIRE5AYQ.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"AWS EKS"}),Object(N.jsx)(p.a,{children:"Deploy Joomla + Mysql on AWS EKS."})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/eks-task-9bc836d11f10",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://media-exp1.licdn.com/dms/image/C5612AQELp3iQbnMHYg/article-cover_image-shrink_423_752/0/1593205957202?e=1619654400&v=beta&t=OuAFf0J6bnW0mMk_zOKLD1JBF5VhMOp1QoKyuHZ-MbQ",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Jenkins Cluster"}),Object(N.jsx)(p.a,{children:"Create A dynamic Jenkins cluster and deploy the Webserver on k8s."})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://www.linkedin.com/pulse/devops-task4-ritesh-singh/",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*ngscQeh1XfBTtlV8HYOSsw.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Configuring k8s Multi-Node cluster using Ansible"}),Object(N.jsx)(p.a,{children:"Ansible Roles to Configure K8S Multi-Node Cluster over AWS Cloud."})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/configuring-k8s-multi-node-cluster-using-ansible-167dcad714d8",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://media-exp1.licdn.com/dms/image/C4E12AQEAhRPrPYdNBg/article-cover_image-shrink_423_752/0/1593592277072?e=1619654400&v=beta&t=GlmmRNGJc2k-NdwUYwzSiJSWF8piN5reGiuGuFVTVGM",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Integrate Prometheus and Grafana"}),Object(N.jsx)(p.a,{children:"Integrate Prometheus + Grafana on k8s and make there data persistent"})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://www.linkedin.com/pulse/devopstask5-ritesh-singh/",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*2KjxHk0RSK57B52B6NLS8w.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Groovy Automation"}),Object(N.jsx)(p.a,{children:"Use groovy to make CI/CD on jenkins"})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/groovy-automation-devopstask6-61cd69743c4f",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/1000/1*bwrCGzwCqygS3WedW9CukA.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Deploy RDS(AWS) +Wordpress(Minikube) using Terraform"}),Object(N.jsx)(p.a,{children:"Write an Infrastructure as code using terraform, which automatically deploy the Wordpress(k8s) + RDS"})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/deploy-rds-wordpress-on-minikube-using-terraform-c5592995fdbf",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*iHjx1cYirAXZEKMZu0AVjA.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Configure Wordpress(Public Subnet) + Mysql(Private Subnet) + NAT Gateway on AWS using Terraform"}),Object(N.jsx)(p.a,{children:"Use Terraform to do following operations......."})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/configure-wordpress-public-subnet-mysql-private-subnet-nat-gateway-on-aws-using-terraform-676f9f968921",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*j0-XnsnQv2TdPw7XgkgzLg.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Ansible playbooks to launch the EC2 instance and configure minikube in it."}),Object(N.jsx)(p.a,{children:"Create  Ansible playbooks Firts playbook to launch EC2 and second playbook to configure minikube in it."})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/create-an-ansible-playbook-to-launch-the-ec2-instance-and-configure-minikube-in-it-894dfde577dd",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*IRxZZOeetdgTl9s5ub9qkg.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Netflix-Originals Clone using React js for beginners"}),Object(N.jsx)(p.a,{})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/netflix-originals-clone-using-react-js-for-beginners-b2970c4532d",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})})]})}),Object(N.jsxs)(H.a,{children:[Object(N.jsx)(a,{expandIcon:Object(N.jsx)(Q.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(N.jsx)(p.a,{className:r.heading,children:"Show More(Mini Projects)"})}),Object(N.jsx)(K.a,{children:Object(N.jsx)(M.a,{className:r.cardGrid,maxWidth:"md",children:Object(N.jsxs)(b.a,{container:!0,spacing:4,children:[Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*5KB0vBOGYYqxXd6qmGhuBQ.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Create an Ansible playbook that will retrieve container IP and update the inventory"}),Object(N.jsx)(p.a,{children:"Create an Ansible playbook that will retrieve container IP and update the inventory. So that further Configuration of the Webserver could be done inside that Container."})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/create-an-ansible-playbook-that-will-retrieve-container-ip-and-update-the-inventory-ac586f0e612",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*kF52JMuELR2C6Mfy_0c4og.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Configure LB(haproxy) using Ansible-Roles on AWS."}),Object(N.jsx)(p.a,{children:"Create Roles one role for LB(haproxy) and second role for launching ec2 instance."})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/configure-lb-haproxy-using-ansible-roles-on-aws-bb1350d0b30a",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*65pAzrccK6TrULaPgOQ4Tw.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Ansible config docker-ce in Redhat8"}),Object(N.jsx)(p.a,{children:"Write an Ansible PlayBook that does the following operations in the managed nodes......"})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/ansible-config-docker-ce-in-redhat8-96e6bc198890",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*oRqmZtr0kzcqj00D7MxZPQ.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Hadoop hdfs cluster using Ansible Roles"}),Object(N.jsx)(p.a,{children:"Create roles for Hadoop, first role for Hadoop master and second role for Hadoop slave."})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/configure-the-hadoop-hdfs-cluster-using-ansible-roles-b059265b2390",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/1000/1*2K7WZCWjbyUHOBwzX2aAdQ.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Deploy Web Server on AWS through ANSIBLE!"}),Object(N.jsx)(p.a,{children:"Deploy webserver on AWS using Ansible Dynamic inventory"})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/deploy-webserver-on-aws-using-ansible-dynamic-inventory-19b5aeca87f4",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(N.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(N.jsxs)(D.a,{className:r.card,children:[Object(N.jsx)(E.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*ycW38mC7KaPwP1SQufDe4w.png",title:""}),Object(N.jsxs)(I.a,{className:r.cardContent,children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Building Chat Application using Socket Programming in Python"}),Object(N.jsx)(p.a,{children:"Build chat app use socket programming , UDP protocol and multi threading concept"})]}),Object(N.jsx)(G.a,{children:Object(N.jsx)(J.a,{href:"https://rootritesh.medium.com/building-chat-application-using-socket-programming-in-python-3b4dfeea6426",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})})]})})})]})]})]})})}t(146);function F(){var e=Object(C.a)((function(e){return{skillhead:{margin:e.spacing(10,0)},butmain:{margin:e.spacing(1)},lastdiv:{marginTop:e.spacing(10)}}}))();return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(p.a,{className:e.skillhead,component:"h2",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0,children:"Skills"}),Object(N.jsxs)("div",{className:e.butmain,children:[Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"primary",children:"DevOpsAL"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"secondary",children:"Hybrid-Mult-Cloud"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"primary",children:"kubernetes"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"",children:"Terraform"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"primary",children:"Jenkins"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"secondary",children:"Ansible"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"primary",children:"Red hat linux"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"",children:"Grafana"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"primary",children:"prometheus"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"primary",children:"Docker"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"",children:"Git/github"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"secondary",children:"Elastic Stack(ELK)"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"",children:"Amazon web services(AWS)"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"",children:"python"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"primary",children:"Google Cloud Platform(GCP)"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"secondary",children:"Hadoop"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"primary",children:"OpenStack"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"primary",children:"Openshift(DO101)"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"",children:"HTML5"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"secondary",children:"CSS"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"primary",children:"JavaScript"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"primary",children:"BootStrap"}),Object(N.jsx)(J.a,{className:e.butmain,variant:"outlined",color:"secondary",children:"React.js"}),Object(N.jsx)(A.a,{name:"project",className:e.lastdiv})]})]})}t(147);var U=t(196),Z=t(93),X=t.n(Z),Y=Object(C.a)((function(e){return{root:{maxWidth:345,justifyContent:"center",margin:e.spacing(5,5)},heroButtons:{marginTop:e.spacing(10),justifyContent:"center",alignItems:"center"},carditem:{margin:e.spacing(0,10)}}}));function _(){var e=Y();return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:e.heroButtons,children:Object(N.jsxs)(M.a,{name:"contact",maxWidth:"xs",className:e.heroButtons,children:[Object(N.jsx)(p.a,{component:"h1",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0,children:"Contact"}),Object(N.jsx)(p.a,{component:"h1",variant:"h6",align:"center",color:"textPrimary",gutterBottom:!0,children:Object(N.jsxs)(D.a,{className:e.root,children:[Object(N.jsx)(U.a,{children:Object(N.jsxs)(I.a,{children:[Object(N.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:Object(N.jsx)(X.a,{fontSize:"large",color:"primary"})}),Object(N.jsx)(p.a,{component:"h6",children:Object(N.jsx)("a",{className:"gmailtext",href:"mailto:rootritesh64@gmail.com",children:"rootritesh64@gmail.com"})})]})}),Object(N.jsx)(G.a,{})]})})]})})})}var V=function(){return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(w,{}),",",Object(N.jsx)(W,{}),Object(N.jsx)(L,{}),Object(N.jsx)(F,{}),Object(N.jsx)(q,{}),Object(N.jsx)(_,{})]})};i.a.render(Object(N.jsxs)(n.a.StrictMode,{children:[Object(N.jsx)(S.a,{num:1,type:"color",bg:!0}),Object(N.jsx)(V,{})]}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.ec8f0de1.chunk.js.map