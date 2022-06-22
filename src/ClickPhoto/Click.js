import { useState } from 'react';
import ClickPhoto from './ClickPhoto';

function Click() {
    const [bigBG, setBigBG] = useState('./imgs/product1.jpg');
    const [photoArray, setPhotoArray] = useState([
        './imgs/product1.jpg',
        './imgs/product2.jpg',
        './imgs/product3.jpg',
        './imgs/product4.jpg',
        './imgs/product5.jpg',
    ]);

    function handleClick(e) {
        setBigBG(e.target.src)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="product-demo d-flex justify-content-center">
                        <img src={bigBG} alt="" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="img-wrap d-flex">
                    {photoArray.map((photo) => {
                            return (
                                <ClickPhoto
                                    key={photo}
                                    Photo={photo}
                                    handleClick={handleClick}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Click;