import React from 'react';
import Hero from '../components/Jumbotron';
import Carousel from '../components/Carousel';

function ResumePage(props){

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );
}

export default ResumePage;