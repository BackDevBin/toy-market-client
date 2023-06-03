import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SellPage from '../SellPage/SellPage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <SellPage></SellPage>
        </div>
    );
};

export default Home;