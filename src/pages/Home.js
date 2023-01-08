import React from 'react';

import Banner from '../components/Banner';
import Search from '../components/Search';
import HouseList from '../components/HouseList';

const Home = () => {
    return (
        <div className="bg-white">
            <Banner />
            <Search />
            <HouseList />
        </div>
    );
};

export default Home;
