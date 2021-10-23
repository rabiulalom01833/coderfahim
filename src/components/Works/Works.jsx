import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
 
import WorkImg from '../../assets/img/about-bg.png';

import './worksStyle.css';

const Work = () => {
    return (
        <div className="work-area section-bgc position-relative">
            <div className="work-img">
                <Image src={WorkImg}  />
            </div>
            
            <Container>
                <Row>
                    <Col lg={{ span: 6  }}>
                        <div className="work-content pp-100">
                            <h2 className="title pb-2">How We Works</h2>
                            <h6 className="title-description">Natus error sit voluptatem accusantium doloremque laudanti um, totam eaque ipsa quae ab illo inventore veritatis.</h6>
                            <p>Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volupt atum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                             
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Work
