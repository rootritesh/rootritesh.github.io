(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},136:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),r=a(10),s=a.n(r),n=(a(121),a.p,a(122),a(90)),o=a(91),l=a(38),d=a(99),j=a(98),h=(a(123),a(186)),m=a(188),b=a(189),p=a(190),x=a(205),g=a(192),u=a(193),O=a(6),v=a(93),f=a.n(v),N=a(23),y=a(1),k=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={drawerActivate:!1,drawer:!1},c.createDrawer=c.createDrawer.bind(Object(l.a)(c)),c.destroyDrawer=c.destroyDrawer.bind(Object(l.a)(c)),c}return Object(o.a)(a,[{key:"componentWillMount",value:function(){var e=this;window.innerWidth<=600&&this.setState({drawerActivate:!0}),window.addEventListener("resize",(function(){window.innerWidth<=600?e.setState({drawerActivate:!0}):e.setState({drawerActivate:!1})}))}},{key:"createDrawer",value:function(){var e=this;return Object(y.jsxs)("div",{children:[Object(y.jsx)(h.a,{children:Object(y.jsx)(m.a,{children:Object(y.jsxs)(b.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(y.jsx)(f.a,{className:this.props.classes.sideBarIcon,onClick:function(){e.setState({drawer:!0})}}),Object(y.jsx)(p.a,{color:"inherit",variant:"h6",children:"Ritesh's Portfolio"}),Object(y.jsx)(p.a,{color:"inherit",variant:"headline"})]})})}),Object(y.jsx)(x.a,{open:this.state.drawer,onClose:function(){e.setState({drawer:!1})},onOpen:function(){e.setState({drawer:!0})},children:Object(y.jsx)("div",{tabIndex:0,role:"button",onClick:function(){e.setState({drawer:!1})},onKeyDown:function(){e.setState({drawer:!1})},children:Object(y.jsxs)(g.a,{className:this.props.classes.list,children:[Object(y.jsx)(u.a,{button:!0,divider:!0,children:Object(y.jsx)(p.a,{color:"inherit",children:Object(y.jsx)(N.Link,{to:"about",spy:!0,smooth:!0,duration:500,delay:500,children:"About"})})},1),Object(y.jsx)(u.a,{button:!0,divider:!0,children:Object(y.jsx)(p.a,{color:"inherit",children:Object(y.jsx)(N.Link,{to:"skill",spy:!0,smooth:!0,duration:500,delay:500,children:"Skills"})})},2),Object(y.jsx)(u.a,{button:!0,divider:!0,children:Object(y.jsx)(p.a,{color:"inherit",children:Object(y.jsx)(N.Link,{to:"project",spy:!0,smooth:!0,duration:500,delay:500,children:"Projects"})})},3),Object(y.jsx)(u.a,{button:!0,divider:!0,children:Object(y.jsx)(p.a,{color:"inherit",children:Object(y.jsx)(N.Link,{to:"contact",spy:!0,smooth:!0,duration:500,delay:500,children:"Contact"})})},4)]})})})]})}},{key:"destroyDrawer",value:function(){var e=this.props.classes;return Object(y.jsx)(h.a,{className:"myappbar",children:Object(y.jsxs)(m.a,{children:[Object(y.jsx)(p.a,{variant:"h6",style:{flexGrow:1},color:"inherit",children:"Ritesh' Portfolio"}),Object(y.jsx)(p.a,{className:e.padding,color:"inherit",children:Object(y.jsx)(N.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,duration:500,delay:500,children:"About"})}),Object(y.jsx)(p.a,{className:e.padding,color:"inherit",children:Object(y.jsx)(N.Link,{to:"skill",spy:!0,smooth:!0,duration:500,delay:500,children:"Skills"})}),Object(y.jsx)(p.a,{className:e.padding,color:"inherit",children:Object(y.jsx)(N.Link,{to:"project",spy:!0,smooth:!0,duration:500,delay:500,children:"Projects"})}),Object(y.jsx)(p.a,{className:e.padding,color:"inherit",children:Object(y.jsx)(N.Link,{to:"contact",spy:!0,smooth:!0,duration:500,delay:500,children:"Contact"})})]})})}},{key:"render",value:function(){return Object(y.jsx)("div",{children:this.state.drawerActivate?this.createDrawer():this.destroyDrawer()})}}]),a}(c.Component),w=Object(O.a)({list:{width:200},padding:{paddingRight:30,cursor:"pointer"},sideBarIcon:{padding:0,color:"white",cursor:"pointer"},cv:{color:"white",textDecoration:"none"}})(k),C=(a(136),a(194)),S=a(195),M=a(63),B=a(42);function W(){var e=Object(C.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(30),padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(30)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},socialicon:{margin:e.spacing()}}}))();return Object(y.jsx)("div",{className:e.heroButtons,children:Object(y.jsxs)(S.a,{maxWidth:"sm",children:[Object(y.jsx)(p.a,{component:"h1",variant:"h1",align:"left",color:"textPrimary",gutterBottom:!0,children:"Hi,"}),Object(y.jsx)(p.a,{component:"h1",variant:"h2",align:"left",color:"textPrimary",gutterBottom:!0,children:"I'm Ritesh Singh"}),Object(y.jsx)("div",{children:Object(y.jsx)(b.a,{container:!0,spacing:0,justify:"left",children:Object(y.jsxs)(b.a,{item:!0,children:[Object(y.jsx)(B.SocialIcon,{className:e.socialicon,url:"https://www.linkedin.com/in/rootritesh/"}),Object(y.jsx)(B.SocialIcon,{className:e.socialicon,url:"https://twitter.com/RiteshS07054000"}),Object(y.jsx)(B.SocialIcon,{className:e.socialicon,url:"https://github.com/rootritesh"}),Object(y.jsx)(B.SocialIcon,{className:e.socialicon,url:"https://medium.com/@rootritesh"})]})})})]})})}a(142);var A=a(196);function D(){var e=Object(C.a)((function(e){return{main:{marginTop:e.spacing(55)},heroContent:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(30),padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(30)},cardhead:{marginTop:e.spacing(8)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},carditem:{margin:e.spacing(20)},card:{display:"flex",flexDirection:"row",justifyContent:"space-around",margin:e.spacing(10)},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}))();return Object(y.jsxs)("div",{className:e.main,children:[Object(y.jsx)(A.a,{name:"about"}),Object(y.jsxs)(S.a,{maxWidth:"sm",children:[Object(y.jsx)(p.a,{className:e.cardhead,component:"h2",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0,children:"About Me"}),Object(y.jsx)(p.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0,children:"I'm DevOps/Cloud Enthusiast, I have good Knowledge of DevOps Tools. I am pursuing B.tech(CSE) from Lovely Professional University. Tech Enthusiast, zeal for learning, and explore new technologies, loves to do automation in today's Agile world."}),Object(y.jsx)(A.a,{name:"skill"})]})]})}var L=a(97),P=a(41),T=(a(80),a(100),a(148),a(197)),I=a(208),R=a(200),z=a(199),G=a(198),E=a(201),K=(a(204),a(206)),J=a(202),Q=a(94),H=a.n(Q);function _(){var e=Object(C.a)((function(e){var t;return t={root1:{flexGrow:1,width:"100%"},chip:{marginRight:e.spacing.unit,margin:e.spacing(1)},section1:{margin:"".concat(3*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")},section2:{margin:2*e.spacing.unit},section3:{margin:"".concat(6*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")},prohead:{marginTop:e.spacing(20)},icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column",margin:e.spacing(1)},cardMedia:{paddingTop:"56.25%",marginBottom:e.spacing(1)},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},cou:{justifyContent:"center"},carditems:{marginTop:e.spacing(2)},prosubhead:{display:"flex",flexGrow:1,flexDirection:"row",justifyContent:"space-around",marginTop:e.spacing(10)},divi:{Width:50},heading:{justifyContent:"center",fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},root:{width:"90%",justifyContent:"center",alignItems:"center",textAlign:"center"}},Object(P.a)(t,"root1",{maxWidth:345}),Object(P.a)(t,"media",{height:140}),t})),t=Object(O.a)({root:{flexDirection:"column"},content:{marginBottom:0},expandIcon:{marginRight:0,paddingTop:0}})(I.a),a=i.a.useState(0),c=Object(L.a)(a,2),r=(c[0],c[1],e());return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{name:"project",children:[Object(y.jsx)(p.a,{className:r.prohead,component:"h2",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0,children:"Projects"}),Object(y.jsxs)("div",{className:r.root3,children:[Object(y.jsx)(S.a,{className:r.cardGrid,maxWidth:"md",children:Object(y.jsxs)(b.a,{container:!0,spacing:4,children:[Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"./dev.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"DevOps Project"}),Object(y.jsx)(p.a,{children:"Deploy Webserver using the best Principles, Tools, Techniques of DevOps Culture."})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/devops-project-f17715ca132b",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*5C2wJWPwllSLJqvq4Ajvbg.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Jenkins Role Ansible"}),Object(y.jsx)(p.a,{children:"Create Role for installation of Jenkins"})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/ansible-jenkins-role-58088247b4bd",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*P_RzvYJlhO_EGnI8N63F9w.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"K8s Multi-Node on Multi-Cloud"}),Object(y.jsx)(p.a,{children:"Configure K8s Multi-Node Cluster on Multi-Cloud."})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/k8s-multi-node-on-multi-cloud-9529e6258103",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/2142/1*xtZU8rsNuDQpgw4KCWsUGQ.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Deploy web app on Azure App Service using Terraform"}),Object(y.jsx)(p.a,{children:"Write an Infrastructure as code using terraform, which automaticallyDeploy web app on Azure App Service"})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/deploy-web-app-on-azure-app-service-using-terraform-c8e0f57ce4d6",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://media-exp3.licdn.com/dms/image/C5612AQELp3iQbnMHYg/article-cover_image-shrink_423_752/0/1593205957202?e=1632355200&v=beta&t=F7gajrGBFy4EQLkNv8nQxhb9NJM7Kwj8w9PZXtt3Ez0",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Jenkins Cluster"}),Object(y.jsx)(p.a,{children:"Create A dynamic Jenkins cluster and deploy the Webserver on k8s."})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://www.linkedin.com/pulse/devops-task4-ritesh-singh/",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*ngscQeh1XfBTtlV8HYOSsw.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Configuring k8s Multi-Node cluster using Ansible"}),Object(y.jsx)(p.a,{children:"Ansible Roles to Configure K8S Multi-Node Cluster over AWS Cloud."})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/configuring-k8s-multi-node-cluster-using-ansible-167dcad714d8",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://media-exp3.licdn.com/dms/image/C4E12AQEAhRPrPYdNBg/article-cover_image-shrink_423_752/0/1593592277072?e=1632355200&v=beta&t=Ny9LM5VAv37QrTa2H83g1xfvYeQ9mh7hfebFRTrHb1g",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Integrate Prometheus and Grafana"}),Object(y.jsx)(p.a,{children:"Integrate Prometheus + Grafana on k8s and make there data persistent"})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://www.linkedin.com/pulse/devopstask5-ritesh-singh/",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*2KjxHk0RSK57B52B6NLS8w.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Groovy Automation"}),Object(y.jsx)(p.a,{children:"Use groovy to make CI/CD on jenkins"})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/groovy-automation-devopstask6-61cd69743c4f",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*uIhF-56fRXNtw6HIRE5AYQ.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"AWS EKS"}),Object(y.jsx)(p.a,{children:"Deploy Joomla + Mysql on AWS EKS."})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/eks-task-9bc836d11f10",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*iHjx1cYirAXZEKMZu0AVjA.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Configure Wordpress(Public Subnet) + Mysql(Private Subnet) + NAT Gateway on AWS using Terraform"}),Object(y.jsx)(p.a,{children:"Use Terraform to do following operations......."})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/configure-wordpress-public-subnet-mysql-private-subnet-nat-gateway-on-aws-using-terraform-676f9f968921",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*j0-XnsnQv2TdPw7XgkgzLg.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Ansible playbooks to launch the EC2 instance and configure minikube in it."}),Object(y.jsx)(p.a,{children:"Create  Ansible playbooks Firts playbook to launch EC2 and second playbook to configure minikube in it."})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/create-an-ansible-playbook-to-launch-the-ec2-instance-and-configure-minikube-in-it-894dfde577dd",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*IRxZZOeetdgTl9s5ub9qkg.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Netflix-Originals Clone using React js for beginners"}),Object(y.jsx)(p.a,{})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/netflix-originals-clone-using-react-js-for-beginners-b2970c4532d",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})})]})}),Object(y.jsxs)(K.a,{children:[Object(y.jsx)(t,{expandIcon:Object(y.jsx)(H.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(y.jsx)(p.a,{className:r.heading,children:"Show More(Mini Projects)"})}),Object(y.jsx)(J.a,{children:Object(y.jsx)(S.a,{className:r.cardGrid,maxWidth:"md",children:Object(y.jsxs)(b.a,{container:!0,spacing:4,children:[Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*5KB0vBOGYYqxXd6qmGhuBQ.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Create an Ansible playbook that will retrieve container IP and update the inventory"}),Object(y.jsx)(p.a,{children:"Create an Ansible playbook that will retrieve container IP and update the inventory. So that further Configuration of the Webserver could be done inside that Container."})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/create-an-ansible-playbook-that-will-retrieve-container-ip-and-update-the-inventory-ac586f0e612",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*kF52JMuELR2C6Mfy_0c4og.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Configure LB(haproxy) using Ansible-Roles on AWS."}),Object(y.jsx)(p.a,{children:"Create Roles one role for LB(haproxy) and second role for launching ec2 instance."})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/configure-lb-haproxy-using-ansible-roles-on-aws-bb1350d0b30a",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/1000/1*bwrCGzwCqygS3WedW9CukA.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Deploy RDS(AWS) +Wordpress(Minikube) using Terraform"}),Object(y.jsx)(p.a,{children:"Write an Infrastructure as code using terraform, which automatically deploy the Wordpress(k8s) + RDS      "})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/deploy-rds-wordpress-on-minikube-using-terraform-c5592995fdbf",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*oRqmZtr0kzcqj00D7MxZPQ.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Hadoop hdfs cluster using Ansible Roles"}),Object(y.jsx)(p.a,{children:"Create roles for Hadoop, first role for Hadoop master and second role for Hadoop slave."})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/configure-the-hadoop-hdfs-cluster-using-ansible-roles-b059265b2390",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/3840/1*2K7WZCWjbyUHOBwzX2aAdQ.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Deploy Web Server on AWS through ANSIBLE!"}),Object(y.jsx)(p.a,{children:"Deploy webserver on AWS using Ansible Dynamic inventory"})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/deploy-webserver-on-aws-using-ansible-dynamic-inventory-19b5aeca87f4",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})}),Object(y.jsx)(b.a,{xs:12,sm:6,md:4,className:r.carditems,children:Object(y.jsxs)(T.a,{className:r.card,children:[Object(y.jsx)(G.a,{className:r.cardMedia,image:"https://miro.medium.com/max/700/1*ycW38mC7KaPwP1SQufDe4w.png",title:""}),Object(y.jsxs)(z.a,{className:r.cardContent,children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Building Chat Application using Socket Programming in Python"}),Object(y.jsx)(p.a,{children:"Build chat app use socket programming , UDP protocol and multi threading concept"})]}),Object(y.jsx)(R.a,{children:Object(y.jsx)(E.a,{href:"https://rootritesh.medium.com/building-chat-application-using-socket-programming-in-python-3b4dfeea6426",variant:"contained",color:"primary",fullWidth:!0,children:"Learn More"})})]})})]})})})]})]})]})})}a(149);var q=a(207),F=a(101);function Y(){var e=Object(C.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(0,5),justifyContent:"center",justifyItems:"center",alignItems:"center"},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,height:"100px",width:"100px"},skillhead:{margin:e.spacing(10,0)},butmain:{margin:e.spacing(2)},lastdiv:{marginTop:e.spacing(10)},skillhover:{"&:hover":{}},centeritem:{justifyContent:"center",justifyItems:"center",alignItems:"center"}}}))();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(p.a,{className:e.skillhead,component:"h2",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0,children:"Skills"}),Object(y.jsx)("div",{className:e.root,children:Object(y.jsxs)(b.a,{container:!0,spacing:3,className:e.centeritem,children:[Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Docker",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Docker",className:(e.butmain,e.skillhover),height:"100px",src:"https://www.vectorlogo.zone/logos/docker/docker-icon.svg"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Kubernetes",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Kubernetes",className:(e.butmain,e.skillhover),height:"100px",src:"https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Amazon Web Services",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"AWS",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/color/144/000000/amazon-web-services.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Microsoft Azure",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Azure",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/color/144/000000/azure-1.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"OpenStack",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"OpenStack",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/color/144/000000/openstack.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"OpenShift",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"OpenShift",className:(e.butmain,e.skillhover),height:"100px",src:"https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Terraform",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Terraform",className:(e.butmain,e.skillhover),height:"100px",src:"https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Ansible",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Ansible",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/color/144/000000/ansible.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Jenkins",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Jenkins",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/color/144/000000/jenkins.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"CircleCi",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Jenkins",className:(e.butmain,e.skillhover),height:"100px",src:"https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Git",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Git",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/color/144/000000/git.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Github",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Github",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/material-outlined/144/000000/github.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Prometheus",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Prometheus",className:(e.butmain,e.skillhover),height:"100px",src:"https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Grafana",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Prometheus",className:(e.butmain,e.skillhover),height:"100px",src:"https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Linux",interactive:!0,children:Object(y.jsx)(F.a,{LclassName:e.paper,children:Object(y.jsx)("img",{alt:"Docker",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/color/144/000000/linux--v1.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Shell Script",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Docker",className:(e.butmain,e.skillhover),height:"100px",src:"https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"Python",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Docker",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/color/144/000000/python--v1.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"HTML5",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Docker",className:(e.butmain,e.skillhover),height:"100px",src:"https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"CSS3",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Docker",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/color/144/000000/css3.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"JavaScript",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Docker",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/color/144/000000/javascript--v1.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"BootStrap",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Docker",className:(e.butmain,e.skillhover),height:"100px",src:"https://img.icons8.com/color/144/000000/bootstrap.png"})})})}),Object(y.jsx)(b.a,{item:!0,children:Object(y.jsx)(q.a,{title:"React.js",interactive:!0,children:Object(y.jsx)(F.a,{className:e.paper,children:Object(y.jsx)("img",{alt:"Docker",className:(e.butmain,e.skillhover),height:"100px",src:"https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"})})})})]})}),Object(y.jsx)(A.a,{name:"project",className:e.lastdiv})]})}a(150);var Z=a(203),X=a(96),U=a.n(X),V=Object(C.a)((function(e){return{root:{maxWidth:345,justifyContent:"center",margin:e.spacing(5,5)},heroButtons:{marginTop:e.spacing(10),justifyContent:"center",alignItems:"center"},carditem:{margin:e.spacing(0,10)}}}));function $(){var e=V();return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:e.heroButtons,children:Object(y.jsxs)(S.a,{name:"contact",maxWidth:"xs",className:e.heroButtons,children:[Object(y.jsx)(p.a,{component:"h1",variant:"h1",align:"center",color:"textPrimary",gutterBottom:!0,children:"Contact"}),Object(y.jsx)(p.a,{component:"h1",variant:"h6",align:"center",color:"textPrimary",gutterBottom:!0,children:Object(y.jsxs)(T.a,{className:e.root,children:[Object(y.jsx)(Z.a,{children:Object(y.jsxs)(z.a,{children:[Object(y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"h2",children:Object(y.jsx)(U.a,{fontSize:"large",color:"primary"})}),Object(y.jsx)(p.a,{component:"h6",children:Object(y.jsx)("a",{className:"gmailtext",href:"mailto:rootritesh64@gmail.com",children:"rootritesh64@gmail.com"})})]})}),Object(y.jsx)(R.a,{})]})})]})})})}var ee=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(w,{}),",",Object(y.jsx)(W,{}),Object(y.jsx)(D,{}),Object(y.jsx)(Y,{}),Object(y.jsx)(_,{}),Object(y.jsx)($,{})]})};s.a.render(Object(y.jsxs)(i.a.StrictMode,{children:[Object(y.jsx)(M.a,{num:1,type:"color",bg:!0}),Object(y.jsx)(ee,{})]}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.7b562da3.chunk.js.map