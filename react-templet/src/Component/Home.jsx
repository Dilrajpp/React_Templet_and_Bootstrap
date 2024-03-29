import React from 'react';
import HeaderNavbar from './HeaderNavbar';
import Banner from './Banner';
import MidSection from './MidSection';
import Symbol from './Symbol';
import EatLOveTag from './EatLOverTag';
import Reviews from './Reviews';
import Locations from './Locations';
import Footer from './Footer';
import Service from './Service';

const Home = () => {
    return (
        <>
            <HeaderNavbar />
            <Banner />
            <MidSection />
            <Symbol />
            {/* <Symbol /> */}
            <EatLOveTag />
            <Service />
            <Reviews />
            <Locations />
            <Footer />
        </>
    );
};

export default Home;