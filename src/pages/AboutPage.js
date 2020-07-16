import React from 'react';
import Hero from '../components/Jumbotron';
import Container from 'react-bootstrap/Container';

function AboutPage(props) {

    return (
        <Container>

        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        
        <div>

        </div>
        </div>
        </Container>
    );
}

export default AboutPage;