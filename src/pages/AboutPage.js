import React from 'react';
import Hero from '../components/Jumbotron';

function AboutPage(props) {

    return (
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );
}

export default AboutPage;