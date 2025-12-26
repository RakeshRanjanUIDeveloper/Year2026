import React, { useEffect, useState } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utilis/useOnlineStatus';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9536392&lng=77.695126&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
       // console.log(json)
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
         return ( 
                     <div className="content-area">You are offline. Please check your internet connect</div>
                ) 
    }

    
    
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <React.Fragment>
            <div className='filter-container'>
                <div className='search'>
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search for restaurants..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="search-button"
                        onClick={() => {
                            const filteredRestaurants = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurants);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className='filter'>
                    <button
                        className='filter-btn'
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.3
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
            </div>

            <div className="res-cards">
                {filteredRestaurant.length === 0 ? (
                    <p>No restaurants found.</p>
                ) : (
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        {
                            restaurant.info.isOpen ? <RestaurantCardPromoted resData={restaurant}  /> :  <RestaurantCard  resData={restaurant} />
                        }
                       
                        </Link>
                    ))
                )}
            </div>
        </React.Fragment>
    );
};

export default Body;
