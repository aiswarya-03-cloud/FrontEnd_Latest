import React from 'react'
import UpdateProfileCard from './pages/User/UpdateProfileCard'
import RestaurantHeader from '../../components/Restaurants/RestaurantHeader'

const UpdateProfile = ()=>{
    return(
        <div>
            <RestaurantHeader />
        </div>

        <div>
           <UpdateProfileCard />
        </div>
    )
}

export default UpdateProfile