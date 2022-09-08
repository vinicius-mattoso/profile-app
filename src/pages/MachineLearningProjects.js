import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// Import Profile foto 
import foto_perfil from '../static/images/foto_perfil.png';


function MachineLearningProjects() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='MachineLearningProjects'>
            <h1>This is the MachineLearningProjects</h1>
            <br />
            <br />
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="rounded w-25 h-25 center-block"
                        src={foto_perfil}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <br />
                        <br />
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="rounded w-25 h-25 center-block"
                        src={foto_perfil}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="rounded w-25 h-25 center-block"
                        src={foto_perfil}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default MachineLearningProjects;