import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <Footer className='mt-5'>
            <Container>
                <Row>
                    <Col className='p-0' md={3} sm={12}>
                        Richard Kessler
                    </Col>
                </Row>
            </Container>
        </Footer>
    );
}

export default Footer;