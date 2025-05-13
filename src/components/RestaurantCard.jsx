import { CDN_URL, FALLBACK_IMAGE_URL }  from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla,

    } = resData.info;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt-logo="res-logo"
                src={ CDN_URL + cloudinaryImageId 

                }
                onError={(e) => {
                    e.target.src = FALLBACK_IMAGE_URL;
                  }}
                
            />
            <h3>{ name}</h3>
            <h4>{ cuisines.join(", ") }</h4>
            <h4>{ avgRating } stars</h4>
            <h4>{costForTwo} FOR TWO</h4>
            <h4>{ sla.slaString} minutes</h4>

        </div>
    );
}
export default RestaurantCard;