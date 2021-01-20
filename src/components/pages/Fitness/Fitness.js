import React from 'react';
import './fitness.scss';

import fit1 from '../../../assets/images/fitness/image-1.jpg';
import fit2 from '../../../assets/images/fitness/image-2.jpg';
import fit3 from '../../../assets/images/fitness/image-3.jpg';
import fit4 from '../../../assets/images/fitness/image-4.jpg';
import fit5 from '../../../assets/images/fitness/image-5.jpg';
import fit6 from '../../../assets/images/fitness/image-6.jpg';
import fit7 from '../../../assets/images/fitness/image-7.jpg';
import fit8 from '../../../assets/images/fitness/image-8.jpg';

function Fitness() {
    return (
        <div className="fitness">
            <div className="container fit-1">
                <img src={fit1} alt="fitness" />
            </div>
            <div className="container fit-2">
                <img src={fit2} alt="fitness" />
            </div>
            <div className="container fit-3">
                <img src={fit3} alt="fitness" />
            </div>
            <div className="container fit-4">
                <img src={fit4} alt="fitness" />
            </div>
            <div className="container fit-5">
                <img src={fit5} alt="fitness" />
            </div>
            <div className="container fit-6">
                <img src={fit6} alt="fitness" />
            </div>
            <div className="container fit-7">
                <img src={fit7} alt="fitness" />
            </div>
            <div className="container fit-8">
                <img src={fit8} alt="fitness" />
            </div>

        </div>
    )
}

export default Fitness;
