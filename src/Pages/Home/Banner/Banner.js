import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner_img_1 from '../../../images/banner/banner1.jpg'
import banner_img_2 from '../../../images/banner/banner2.jpg'
import banner_img_3 from '../../../images/banner/banner3.jpg'
const Banner = () => {
    return (
        <div>
            <>
                <Carousel className=''>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src={banner_img_1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src={banner_img_2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src={banner_img_3}
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
            </>
        </div>
    );
};

export default Banner;