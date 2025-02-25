import { useParams } from "react-router-dom";
//import MenuScroller from "../Scrollbar/Scrollbar";
import BurgerCard from "../../components/FoodItemsCard/BurgerCard";
import MenuScroller from "../../components/Scrollbar/Scrollbar";

export default function Burger() {
  const { foodName } = useParams();



  const foodData = [
    { name: 'Chocolate Cake', description: 'Delicious molten chocolate cake', price: 5.99 },
    { name: 'Cheeseburger', description: 'Juicy beef burger with cheese', price: 7.99 },
    { name: 'Pasta', description: 'Creamy Alfredo pasta', price: 8.99 },
    { name: 'Pizza', description: 'Delicious pizza with extra cheese', price: 10.99 },
    // Add more food items as needed
  ];

  return (
    <div>
    {/* Menu scroller appears at the top of this page */}
    <MenuScroller />

    <div className="p-4">
      <h1 className="text-xl font-bold">Related images for {foodName}</h1>
      {/* <img src={`/images/${foodName}.jpg`} alt={foodName} className="w-full h-64 object-cover mt-4 rounded" /> */}
      {/* <img src="\src\assets\assets\MY_ASSETS\desert_bg.avif" alt={foodName} className="w-full h-64 object-cover mt-4 rounded" /> */}
       
      

        {/* Grid for displaying multiple cards */}
        <div className="grid grid-rows-4 grid-cols-4 bg-red-50 w-full">
          {foodData.map((food, index) => (
            <BurgerCard key={index} food={food} />
          ))}
        </div>

    </div>
  </div>
  );
}
