import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    useEffect(() => {
      fetchData();
    }, []);
  

    const fetchData = async () => {
      
        console.log("Body Rendered");
        const res = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
  
        console.log("Fetching data");
        const jsonData = await res.json();
       
        console.log("Data fetched");
        console.log(jsonData);
        const restaurantCard = jsonData?.data?.cards?.find(
          (card) =>
            card?.card?.card?.id === "restaurant_grid_listing" ||
            card?.card?.card?.id === "restaurant_grid_listing_v2"
        );
  
        const fetchedRestaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setRestaurants(fetchedRestaurants);
        setFilteredRestaurants(fetchedRestaurants);

     
    };
  
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              placeholder="Search for restaurants"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                }}
            />
            <button className="search-btn" 
            onClick={() => { 
              
              const filteredRestaurants = restaurants?.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurants(filteredRestaurants);
            } }
            >Search</button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filtered = restaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.0
              );
              setRestaurants(filtered);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
  
        <div className="res-container">
          {restaurants.length === 0 ? (
        <Shimmer />
      ) :(filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
            < RestaurantCard resData={restaurant} />
          </Link>
          )))}
        </div>
      </div>
    );
  };

export default Body;