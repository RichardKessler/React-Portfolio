import React from 'react';
import Hero from '../components/Jumbotron';


function ResumePage(props){

    return(
        <div>
        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

        <a href='https://drive.google.com/file/d/1VYwXMpEVSVMF5B8v221JakSffSF6S_20/view?usp=sharing' target='__blank'>Download my Resume</a>
        </div>
    );
}

export default ResumePage;