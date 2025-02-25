
import React, { useState } from 'react';
import './Add.css';
import {assets} from '../../assets/assets/admin_assets/assets'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Add = ({url}) => {

   


    // const url = 'http://localhost:3000'
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salads"
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const navigate = useNavigate();

    const listpage = ()=>{

        navigate('/list')
    }

    //Making API Calls
    const onSubmitHandler = async (event) =>{
         event.preventDefault();
         const formData = new FormData();
          formData.append("name",data.name)
          formData.append("description",data.description)
          formData.append("price",Number(data.price))
          formData.append("category",data.category)
          formData.append("image",image)


          const response = await axios.post(`${url}/api/v1/food/add`, formData);
          if (response.data.success){
             setData({
                name: "",
                description: "",
                price: "",
                category: "Salads"
            })
            setImage(false)
            toast.success(response.data.message)
          }
          else{
             toast.error(response.data.message)
          }
    }   

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    return (
        <div className='add'>
            ADD
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
                </div>

                <div className='add-product-name flex-col'>
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' />
                </div>

                <div className='add-product-description flex-col'>
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='Write content here' />
                </div>

                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} name='category' value={data.category}>
                            <option value='Salads'>Salads</option>
                            <option value='Burger'>Burger</option>
                            <option value='Pizza'>Pizza</option>
                            <option value='Chicken'>Chicken</option>
                            <option value='Noodles'>Noodles</option>
                            <option value='Deserts'>Deserts</option>
                            <option value='Soups'>Soups</option>
                            <option value='Beverages'>Beverages</option>
                            <option value='Rice'>Rice</option>
                            <option value='Pasta'>Pasta</option>
                            <option value='Sandwich'>Sandwich</option>
                        </select>
                    </div>

                    <div className='add-price flex-col'>
                        <p>Product Price</p>
                        <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='$20' />
                    </div>
                </div>

                <button type='submit' className='add-btn'>ADD</button>
                <button type='submit' className='add-btn' onClick={listpage}>List Items</button>
            </form>
        </div>
    );
};

export default Add;

