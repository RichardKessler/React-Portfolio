import React from 'react';
import Hero from '../components/Jumbotron';
import AboutText from '../components/AboutText'


function AboutPage(props) {

    return (
        
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        <div>
        <AboutText>
            <p>Hello my name is Richard Kessler.  I am a gradutate from UNC Chapel Hill's Full-Stack Developer Bootcamp.  This intensive 24-week bootcamp gave me the skills and knowledge to succeed.  I have a great grasp on the MERN stack (MongoDB, Express.js, React.js, Node.js), strong front-end knowledge including working with multiple frameworks, and an ever expanding library of different packages for back-end developement.  I am upbeat and always accept whatever challenges come my way.</p>
            <br></br>

            <h2 className='border-bottom bb'>My Skills Include:</h2>

            <br></br>
            <p>Specialities:  HTML5, CSS3, JavaScript, ES6, VS Code, React.JS, Node.JS, MERN Stack</p>
            <p>Framework/Libraries: Bootstrap, Materialize, Bulma,Sequelize, Mongoose, Node.JS, jQuery, Express.JS, React.JS</p>
            <p>Database: MySQL, MongoDB </p>
            <p>Technologies: GitPages, Heroku, Netlify</p>
            <p>Version Control: Git, GitHub, GitLab</p>
        </AboutText>
        </div>
        </div>
    );
}

export default AboutPage;