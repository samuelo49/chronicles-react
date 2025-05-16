import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API_URL } from '../utils/constants';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(`${MENU_API_URL}${resId}`);
        const jsonData = await data.json();
        setResInfo(jsonData);
    };

    if (resInfo === null ) return <Shimmer />;

    const menuSection = resInfo?.data?.cards.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR);
    
    const menuCards = menuSection?.groupedCard?.cardGroupMap?.REGULAR?.cards;
 
    const sectionWithItems = menuCards?.find((card) => Array.isArray(card?.card?.card?.itemCards));
  
    const  itemCards  = sectionWithItems?.card?.card?.itemCards;

    
    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;
    
    
    return (
        <div className="menu-container">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3>Menu</h3>
            <ul className="menu-list">
                {itemCards.map((item) => (
                    <li className="menu-item" key={item.card.info.id}>
                        <div className="menu-item-image">
                            {item.card.info.imageId && (
                                <img
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                                    alt={item.card.info.name}
                                />
                            )}
                        </div>
                        <div className="menu-item-details">
                            <h4>{item.card.info.name}</h4>
                            <p>{item.card.info.description}</p>
                            <p><strong>${item.card.info.price / 100 || item.card.info.defaultPrice / 100}</strong></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;