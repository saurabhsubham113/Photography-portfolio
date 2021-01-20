import React from 'react';

import img1 from '../../../assets/images/fashion/image-2.jpg';
import img2 from '../../../assets/images/fashion/image-6.jpg';
import img3 from '../../../assets/images/fashion/image-7.jpg';
import './home.scss';

function Home() {


    return (
        <div className="home">
            <img src={img1} alt="slideshow" />
        </div>
    )
}

export default Home;
