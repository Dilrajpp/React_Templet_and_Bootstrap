import React from 'react';
import backgroundImage from './Image/banner1.jpg';
import './CSS/Banner.css';

const Banner = () => {
    return (
        <>
            <div className="Digitalbanner container-fluid" style={{ backgroundImage: `url(${backgroundImage})`}}>
                <h1 className="text-light text-wrap ANew "><b className="AANew text-light-500">A New Digital Conteen <br /> Experience <br /> Awaits You</b></h1>
                <div className="register mb-2 pb-2">
                    <button class="btn btn-primary" type="submit">Register Now</button>
                    <button type="button" class="btn btn-outline-light ms-3">Food For Events</button>
                </div>
            </div>
        </>
    )
}


export default Banner;