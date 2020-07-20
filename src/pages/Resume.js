import React from 'react';
import Hero from '../components/Jumbotron';


function ResumePage(props){

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

        <a href='https://docs.google.com/document/d/1Y7tM9bn2w1ZsF3KmTJwY8OUsYmjjnUL0ixVnB-Mh-jg/edit?usp=sharing' target='__blank'>Download my Resume</a>
        </div>
    );
}

export default ResumePage;