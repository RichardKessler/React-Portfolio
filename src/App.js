import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/Resume';

const styles = {
  brand: {
    color: 'darkorange'
  },
  navLinks: {
    color: 'snow'
  }
}
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Richard Kessler",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Resume', path: '/resume' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Richard Kessler',
        subTitle: 'Full-Stack Developer',
        text: 'Always learning, Always determined, Never stopping'
      },
      about: {
        title: 'About Me'
      },
      portfolio: {
        title: 'My Portfolio',
        subTitle: 'Some of the projects that I have done so far',
        text: 'Click on a card to see more info and get a link to that application'
      },
      resume: {
        title: 'Resume'
      },
      contact: {
        title: 'Contact Me',
        subTitle: 'Gmail: KesslerRichardJ@gmail.com',
        text: 'For my Github and LinkedIn profiles please click the view link below'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>

          <Navbar className='border-bottom' expand='lg'>
            <Navbar.Brand style={styles.brand}>Richard Kessler</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' style={styles.navLinks} to='/' >Home</Link>
                <Link className='nav-link' style={styles.navLinks} to='/about' >About</Link>
                <Link className='nav-link' style={styles.navLinks} to='/portfolio' >Portfolio</Link>
                <Link className='nav-link' style={styles.navLinks} to='/resume' >Resume</Link>
                <Link className='nav-link' style={styles.navLinks} to='/contact' >Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path='/about' exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} />} />
          <Route path='/portfolio' exact render={() => <PortfolioPage title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} text={this.state.portfolio.text} />} />
          <Route path='/resume' exact render={() => <ResumePage title={this.state.resume.title} />} />
          <Route path='/contact' exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />}  />

          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App;
