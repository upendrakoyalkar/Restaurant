import RestaurantCard from "./RestaurantCard"
import {useState , useEffect} from "react";
//import resList from "../utils/mockData";
import Shimmer from "./shimmer";

const Body = () => {

const [ListOfRestaurants , setListOfRestaurants] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);

const [searchtext , setSearchtext] = useState("")

console.log("BodyRenfer")

useEffect(() => {
fetchData()
},[]);

const fetchData = async() => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();
  setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  setFilteredRestaurant(
    json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  console.log(json)
}



if(ListOfRestaurants.length === 0){
  return <Shimmer/>
}


    return (
        <div className="body">

          <div className="filter"> 
            <input type = "text" value={searchtext} onChange={(e) => {setSearchtext(e.target.value)}}/>

             <button onClick = {() => {

              const filteredRestaurant = ListOfRestaurants.filter((res) => 
                 res.info.name.toLowerCase().includes(searchtext.toLowerCase()));

              setFilteredRestaurant(filteredRestaurant)
             }}>Search</button>

            <button
            className="filter-btn" 
            onClick = {() => {
              const FilterRestaurent =   ListOfRestaurants.filter(
                (res) => res.info.avgRating >= 4);
                setFilteredRestaurant(FilterRestaurent)
              }}
              >Top Rated restaurant</button>
          </div>
            <div className="res-container">
               
             {filteredRestaurant.map((Restaurant) => (
              <RestaurantCard key = {Restaurant.info.id} resData={Restaurant} />))}

            </div>
        </div>
    )
};



export default Body