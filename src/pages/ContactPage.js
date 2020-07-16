import React from 'react';
import Hero from '../components/Jumbotron';
import Contact from '../components/Contact'

function ContactPage(props) {

    return (
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

        <Contact />
        </div>
    );
}

export default ContactPage;