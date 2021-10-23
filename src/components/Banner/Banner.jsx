import React from 'react';
import {Col, Container, Row, Image } from 'react-bootstrap';

import '../Banner/banner.css';

import Typical from 'react-typical';
import { FiFacebook, FiLinkedin, FiInstagram, FiDownloadCloud} from "react-icons/fi";
import { DiHtml5, DiCss3, DiSass, DiNodejsSmall} from "react-icons/di";

import BannerImg from '../../assets/img/banner.png';

function Banner() {
    return (
        <div className="banner-area">
            <Container>
                <Row>
                    <Col lg={6} className="banner-col">
                        <div className="banner-content">
                            <div className="banner-text-top">
                                <div className="subtitle">WELCOME TO MY WORLD</div>
                                <h1 className="title">
                                    Hi, I’m <strong>Fahim</strong> <br/>
                                    <i>a</i>  
                                    <Typical
                                        steps={['Web Designer.', 1000, 'Front-end Developer.', 1000, 'Professional Coder.', 1500]}
                                        loop={Infinity}
                                        wrapper="span" 
                                    />
                                </h1> 
                                <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                                <a href="#" className="theme-btn btn-md">Download CV <FiDownloadCloud/></a>  
                            </div>

                            <div className="banner-text-footer">
                                <div class="social-share-inner">
                                    <div class="title">find with me</div>
                                    <ul>
                                        <li><a href="#"><FiFacebook/></a></li>
                                        <li><a href="#"><FiLinkedin/></a></li>
                                        <li><a href="#"><FiInstagram/></a></li>
                                    </ul>
                                </div>
                                <div class="social-share-inner">
                                    <div class="title">BEST SKILL ON</div>
                                    <ul>
                                        <li><a href="#"><DiHtml5/></a></li>
                                        <li><a href="#"><DiCss3/></a></li>
                                        <li><a href="#"><DiSass/></a></li>
                                        <li><a href="#"><DiNodejsSmall/></a></li>
                                    </ul>
                                </div> 
                            </div>
                            
                        </div>
                    </Col>
                    <Col lg={{span: 4, offset: 2}} className="banner-col">
                        <div className="banner-profile-img">
                            <Image src={BannerImg} className="profile images" width="100%" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div> 
    )
}

export default Banner
