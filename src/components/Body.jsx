import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
    const [restaurants, setRestaurants] = useState(resList);
    
    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={() => {
                    const filteredList = restaurants?.filter(
                        (restaurant) => restaurant.data.avgRating > 4.0
                    );
                    setRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />

                ))}
            </div>
        </div>
    );
};

export default Body;