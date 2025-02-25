import React from 'react'
import Navbar from '../../components/Navbar_1/Navbar'
import RestaurantHeader from '../../components/Restaurants/RestaurantHeader'
import MenuScroller from '../../components/Scrollbar/Scrollbar'
import RestaurantScroller from '../../components/Scrollbar/RestaurantScrollbar'
//import './Restaurant.css'
import FoodScroller from '../../components/Scrollbar/MenuItemsScrollbar'
import UserProfile from '../../pages/User/UserProfile'

const UserProfileLayout = () => {
  return (
    <div>
      <RestaurantHeader />
    
      <UserProfile />

    </div>
  )
}

export default UserProfileLayout
