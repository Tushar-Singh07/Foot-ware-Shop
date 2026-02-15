import React from 'react'
import Corosol from '../../Pages/Corosol'
import ShoesTypeCard from '../../Pages/ShoesTypeCard'
import HomeBanner from '../../Pages/HomeBanner'
import Data from "../../../AllDemoData.json"
import ItemCard from '../../Pages/ItemCard'


const Home = () => {
    const RecentArrivelProducts = Data.RecentArrivelProducts;
    return (
        <div>
            <Corosol />
            <ShoesTypeCard />
            <ItemCard Products={RecentArrivelProducts} Headding={"RECENT ARRIVAL"} />
            <HomeBanner />
        </div>
    )
}

export default Home
