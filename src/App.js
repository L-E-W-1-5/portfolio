import './App.css';
import {Navbar} from './components/Navbar/navbar.js'
import {Header} from './components/Header/header.js'
import {AboutMe} from './components/AboutMe/aboutme.js'
import {PortfolioList} from './components/PortfolioList/portfoliolist.js'
import {CV} from './components/CV/cv.js'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main-container">
      <Header></Header>
      <AboutMe></AboutMe>
      <PortfolioList></PortfolioList>
      <CV></CV>
      </div>
    </div>
  );
}

export default App;
