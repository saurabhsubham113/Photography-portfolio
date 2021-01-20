import React from 'react';
import fb from "../../assets/images/social/icon-facebook.svg";
import insta from "../../assets/images/social/icon-instagram.svg";
import './profileColumn.scss';

function ProfileColumn() {
    return (
        <div className="column">
            <div className="name">
                <h1 className="heading">ANKIT RAJ</h1>
                <h3 className="sub-heading">PHOTOGRAPHY</h3>
            </div>
            <div className="social">
                <p className="social-heading">Connect with me</p>
                <a className="fb" target='_blank' rel="noreferrer" href="https://www.facebook.com/ankitrajphotographyindia/">
                    <img src={fb} alt="facebook" />
                </a>
                <a className="insta" target='_blank' rel="noreferrer" href="https://www.instagram.com/ankitraj.photography/">
                    <img src={insta} alt="instagram" />
                </a>
                
            </div>
        </div>
    )
}
export default ProfileColumn;
