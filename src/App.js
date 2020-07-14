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
        subTitle: 'Full-Stack Developer'
      },
      about: {
        title: 'About Me'
      },
      portfolio: {
        title: 'My Portfolio'
      },
      resume: {
        title: 'Resume'
      },
      contact: {
        title: 'Contact Me'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>

          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Richard Kessler</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/' >Home</Link>
                <Link className='nav-link' to='/about' >About</Link>
                <Link className='nav-link' to='/portfolio' >Portfolio</Link>
                <Link className='nav-link' to='/resume' >Resume</Link>
                <Link className='nav-link' to='/contact' >Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
          <Route path='/about' exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} />} />
          <Route path='/portfolio' exact render={() => <PortfolioPage title={this.state.portfolio.title}  />} />
          <Route path='/resume' exact render={() => <HomePage title={this.state.resume.title} />} />
          <Route path='/contact' exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} />} />

          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App;
