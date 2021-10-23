import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


const Portfolio = () => {
    return (
        <div className="portfolio pt-100" id="portfolio">
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="section-title">
                            <h6 className="subtitle">PORTFOLIO</h6>
                            <h2 className="title">Our Recent Web Design & Some Past Projects.</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
