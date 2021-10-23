import React, {useState} from 'react';

import { Image } from 'react-bootstrap';
 
import ReactJS from '../../assets/img/atomic.png';
import Wordpress from '../../assets/img/wordpress.png';
import Shopify from '../../assets/img/shopify.png'; 
import Coding from '../../assets/img/coding.png';

const experienceList = [
    {
        id: 1,
        images: Coding,
        titles: "2018-2021",
        description: 'HTML, CSS & SCSS, JS, BOOTSTRAP'
    },
    {
        id: 2,
        images: ReactJS,
        titles: "2020-2021",
        description: 'ReactJS Website Design'
    },
    {
        id: 3,
        images: Wordpress,
        titles: "2019-2021",
        description: 'Wordpress Website Design'
    },
    {
        id: 4,
        images: Shopify,
        titles: "2021",
        description: 'Wordpress Website Design'
    } 

]

const Experience = () => {
    const [items , setItem] = useState(experienceList);
    
    return ( 
        <div className="experience pt-4"> 
            <div className="experience-text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis quis nulla error eos officia, provident, hic voluptas quam maxime repudiandae quidem dicta a doloribus omnis cupiditate perferendis. Natus debitis, eius ipsa expedita hic possimus nulla repellendus nemo cumque aliquid!</p>
            </div> 
            {
                items.map((experienceEleme) => {
                    const {id, images, titles, description} = experienceEleme;
                    return (
                        <div className="experience-item d-flex gap-3" id={id}>
                            <div className="experience-img">
                                <Image src={images}/>
                            </div>
                            <div className="experience-text align-self-center">
                                <p className="text">{titles}</p>
                                <h6 className="title">{description}</h6>
                            </div>
                        </div>
                    )
                })
            }

  
            {/* <div className="experience-item d-flex gap-3">
                <div className="experience-img">
                    <Image src={WebDesign}/>
                </div>
                <div className="experience-text align-self-center">
                    <p className="text">2017 - 2021 (Web Design)</p>
                    <h5 className="title">Web Design</h5>
                </div>
            </div>  */}


        </div>
    )
}

export default Experience
