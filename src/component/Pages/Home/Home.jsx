import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SellPage from '../SellPage/SellPage';
import CustomerReview from '../CustomerReview/CustomerReview';
import ShopCatacories from '../ShopCatacories/ShopCatacories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShopCatacories></ShopCatacories>
            <Gallery></Gallery>
            <SellPage></SellPage>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;