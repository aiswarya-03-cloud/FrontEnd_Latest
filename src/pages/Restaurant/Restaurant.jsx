import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from '../../components/Navbar_1/Navbar.jsx'
import RestaurantHeader from '../../components/Restaurants/RestaurantHeader'
import MenuScroller from '../../components/Scrollbar/Scrollbar'
import './Restaurant.css'
import FoodScroller from '../../components/Scrollbar/MenuItemsScrollbar'
import { axiosInstance } from '../../config/axiosinstance'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import RestaurantScroller from '../../components/Scrollbar/RestaurantScrollbar'
//import {useFetch} from '../../components/Hooks/UseFetch'
import {RestaurantSkeleton} from '../../components/Skeletons/Skeletons.jsx'

// export async function loader() {
//     const response = await fetch(`${import.meta.env.VITE_BASE_URL}/v1/restaurants/all-restaurants`)
//     const restaurants = await response.json()
//     console.log("restaurants===", restaurants)
//     return { restaurants };
//   }


 const Restaurant = () => {


const [restaurantList, setRestaurantList] = useState([])
// const [isLoading,setIsloading] = useState(true);
// const[error,setError] = useState(null);

// const fetch = asyn  fetchRestaurants () => {
    const fetchRestaurants =async()=>{


    try{

        const response = await axiosInstance({
            method: "GET",
            url:"/restaurant/all-restaurants",

        });
        console.log("Response1---",response)
        console.log("response===", response.data)
        console.log("response===ooo", response.data.restaurants)
        // setRestaurantList(response.data)
        console.log("Hooo---", response.data.restaurants)
        

//Ensure the restaurantList is an array

    setRestaurantList(response.data.restaurants || []);
    console.log("res-->",response.data.restaurants)
    // setIsloading(false);
        
    } catch(error){
        console.log(error);
    }

};


//When the page loads, the useeffect will be evoked/ the function will be called
useEffect(() =>{
    fetchRestaurants();
},[]);

// const [restaurantList, isLoading, error] = useFetch("/restaurants/all-restaurants");

  return (
// {isLoading } ?
//   <RestaurantSkeleton />:
  

    <div>
      <RestaurantHeader />

      <h1 className="top-restaurants-title">Top Restaurants Near You</h1>

      <section className="grid grid-rows-3 grid-cols-3 gap-y-10 w-full">
 
         {/* {restaurantList?.map((restaurant, index)=>( */}
            <RestaurantScroller key={restaurantList?._id} restaurantList={restaurantList} />

         {/* ))} */}
         
      </section>

      <h1 className="top-restaurants-title">Top Cuisines Near You</h1>
      <FoodScroller />
    </div>
    
  
        )
  

}



export default Restaurant



// import React, { useEffect, useState } from 'react'
// import Navbar from '../../components/Navbar/Navbar'
// import RestaurantHeader from '../../components/Restaurants/RestaurantHeader'
// import MenuScroller from '../../components/Scrollbar/Scrollbar'
// import RestaurantScroller from '../../components/Scrollbar/RestaurantScrollbar'
// import './Restaurant.css'
// import FoodScroller from '../../components/Scrollbar/MenuItemsScrollbar'
// import { axiosInstance } from '../../config/axiosinstance'

// const Restaurant = () => {
//   const [restaurantList, setRestaurantList] = useState([])

//   const fetchCourses = async () => {
//     try {
//       const response = await axiosInstance({
//         method: "GET",
//         url: "/restaurant/all-restaurants",
//       });

//       console.log("response===", response)
//       setRestaurantList(response?.data?.data)  // Storing fetched restaurant data

//     } catch (error) {
//       console.log("Error fetching data:", error)
//     }
//   };

//   // Call the fetch function when the component mounts
//   useEffect(() => {
//     fetchCourses();
//   }, [])

//   return (
//     <div>
//       <RestaurantHeader />

//       <h1 className="top-restaurants-title">Top Restaurants Near You</h1>

//       {/* Displaying restaurant list */}
//       <section className='grid grid-rows-3 grid-cols-3 gap-y-10 w-full'>
//         {restaurantList?.map((restaurant, index) => {
//           console.log("restaurant===", restaurant._id)  // Logging each restaurant ID
//           return <RestaurantScroller key={restaurant?._id} restaurant={restaurant} />;
//         })}
//       </section>

//       <h1 className="top-restaurants-title">Top Cuisines Near You</h1>
//       <FoodScroller />
//     </div>
//   )
// }

// export default Restaurant
 