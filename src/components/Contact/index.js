import React, { Component } from 'react';
import ContactCard from '../ContactCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import GitHub from '../../assets/GitHub-Mark-Light-120px-plus.png';
import LinkIn from '../../assets/LI-In-Bug.png'

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub',
                    imgSrc: GitHub,
                    link: 'https://github.com/RichardKessler',
                    selected: false
                },
                {
                    id: 1,
                    title: 'LinkedIn',
                    imgSrc: LinkIn,
                    link: 'https://www.linkedin.com/in/richard-kessler-9149a247/',
                    selected: false
                }
            ]
        }
    }

    
    handleCardClick = (id) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return this.state.items.map(item => {
            return <ContactCard item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container className='RK' fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.itmes)}
                </Row>
            </Container>
        )
    }
}

export default Contact;