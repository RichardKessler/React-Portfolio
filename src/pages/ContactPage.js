import React from 'react';
import Hero from '../components/Jumbotron';

function ContactPage(props) {

    return (
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );
}

export default ContactPage;