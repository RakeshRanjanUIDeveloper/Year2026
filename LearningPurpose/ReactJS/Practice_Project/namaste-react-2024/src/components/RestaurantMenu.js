import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utilis/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null)
    if (resInfo === null) {
        return <Shimmer />;
    }
    
    const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
    if (!restaurantInfo) {
        return <p>Restaurant information not available.</p>;
    }

    const { name, avgRating, totalRatingsString, cuisines, sla } = restaurantInfo;
    
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )
    console.log(categories)
    return (
        <div className="menu content-area">
            <div className='menu-details'>
                <h3>{name}</h3>
                <p><b>{avgRating} <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg> ({totalRatingsString})</b></p>
                <p className='cuisines'>{cuisines.join(', ')}</p>
                <p>{sla.lastMileTravelString} | Delivery in {sla.slaString} </p>
            </div>
            <div className='menu-accordion'>
                {
                    categories.map((category, index)=>
                        <RestaurantCategory key={category.card.card.title} 
                                            data={category.card.card} 
                                            showItems={index === showIndex ? true :false} 
                                            setShowIndex={()=> setShowIndex(prevIndex => prevIndex===index ? null : index)}
                                            />
                    )
                }
            </div>

        
        </div>
    );
};

export default RestaurantMenu;
