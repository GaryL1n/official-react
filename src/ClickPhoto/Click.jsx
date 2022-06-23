import { useState } from 'react';
import ClickPhoto from './ClickPhoto';

function Click() {
    const [bigBG, setBigBG] = useState('../Clickimgs/product1.jpg');
    const [photoArray, setPhotoArray] = useState([
        '../Clickimgs/product1.jpg',
        '../Clickimgs/product2.jpg',
        '../Clickimgs/product3.jpg',
        '../Clickimgs/product4.jpg',
        '../Clickimgs/product5.jpg',
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