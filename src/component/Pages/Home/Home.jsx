import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import SellPage from '../SellPage/SellPage';
import CustomerReview from '../CustomerReview/CustomerReview';
import ShopCatacories from '../ShopCatacories/ShopCatacories';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])


    return (
        <div className='w-full'>
            <Banner></Banner>
            <ShopCatacories></ShopCatacories>
            <Gallery></Gallery>
            <div  data-aos="fade-right" >
            <SellPage></SellPage>
            </div>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;