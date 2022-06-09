import React from "react";
import Banner from "../components/Home/HomeBanner";
import ShopCategories from "../components/Home/ShopCategories";
import TopDealNewProduct from "../components/Home/TopDealNewProduct";
import Navbar from "../components/Shared/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <ShopCategories />
            <TopDealNewProduct />
        </>
    );
};

export default Home;
