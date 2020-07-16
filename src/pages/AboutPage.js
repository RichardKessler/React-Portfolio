import React from 'react';
import Hero from '../components/Jumbotron';
import AboutText from '../components/AboutText'


function AboutPage(props) {

    return (
        
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        <div>
        <AboutText>
            <p>Hello my name is Richard Kessler.  I needed a career change after an accident in 2018.  I was finally able to invest into myself and learn to become a developer.  I am a sutdent attending UNC's Coding Bootcamp in 2020.  After graduation I look forward to making the most out of every opportunity that I get.  I am very determined to learn and apply myself to becomeing the best developer that I can be.</p>
            <br></br>

            <h2 className='border-bottom bb'>My Skills Include:</h2>

            <br></br>
            <p>Specialities:  HTML5, CSS3, JavaScript, ES6, VS Code, React.JS, Node.JS</p>
            <p>Framework/Libraries: Bootstrap, Materialize, Bulma,Sequelize, Mongoose, Node.JS, jQuery, Express.JS, React.JS</p>
            <p>Database: MySQL, MongoDB </p>
            <p>Technologies: Heroku, Netlify</p>
            <p>Version Control: Git, GitHub, GitLab</p>
        </AboutText>
        </div>
        </div>
    );
}

export default AboutPage;