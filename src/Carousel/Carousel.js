import './Carousel.css';
import { useState } from 'react';
import Trainbox from './Trainbox';

function Carousel() {
    const [carouselArray, setCarouselArray] = useState([
        '../Carouselimgs/slide1.jpg',
        '../Carouselimgs/slide2.jpg',
        '../Carouselimgs/slide3.jpg',
        '../Carouselimgs/slide4.jpg',
        '../Carouselimgs/slide5.jpg',
    ]);

    return (

                <div className="wrap">
                    <ul className="train">
                        {carouselArray.map((photo) => {
                            return (
                            <Trainbox
                            key={photo}
                            img={photo}
                            />
                            );
                        })}
                    </ul>

                    <ul className="slider-dots-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

    );
}

export default Carousel;
