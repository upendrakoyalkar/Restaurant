import RestaurantCard from "./RestaurantCard"
import {useState , useEffect} from "react";
import resList from "../utils/mockData";
import Shimmer from "./shimmer";

const Body = () => {

const [ListOfRestaurants , setListOfRestaurants] = useState(resList)

//useEffect(() => {
//   fetchData()
//},[]);

//const fetchData = async() =>{
//const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
// const jsonData = await data.json()
// console.log(jsonData)
//setListOfRestaurants(jsonData.data.cards[0].card.card.imageGridCards.info)
//}


if(ListOfRestaurants.length === 0){
  return <Shimmer/>
}


    return (
        <div className="body">

          <div className="filter"> 
            <input type = "text"></input>
             <button>Search</button>
            <button
            className="filter-btn" 
            onClick = {() => {
              const FilterRestaurent =   ListOfRestaurants.filter(
                (res) => res.info.avgRating >= 4);
                setListOfRestaurants(FilterRestaurent)
              }}
              >Top Rated restaurant</button>
          </div>
            <div className="res-container">
               
             {ListOfRestaurants.map((Restaurant) => (
              <RestaurantCard key = {Restaurant.info.id} resData={Restaurant} />))}

            </div>
        </div>
    )
};



export default Body