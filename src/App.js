import logo from './logo.svg';
import './App.css';
// import ButtonAppBar from './header/Nav';
import ResAppBar from './header/Nav';
import Sec1 from './sec1/Sec1';
import About from './about/about';
import MediaCard from './projects/pro';
import Skill from './skills/Skill';
import Contact from './contact/contact';
function App() {
  return (
    <div className="App">
     {/* <ButtonAppBar/> */}
     <ResAppBar/>,
     <Sec1/>
     <About/>
     <Skill/>
     <MediaCard/>
    <Contact/>
    </div>
  );
}

export default App;
