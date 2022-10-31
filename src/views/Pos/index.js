import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from '../../util/api'
// import axios from "axios";
import ProductItem from './ProductItem';
import {messageActions} from '../../store/messageSlice'
import Card from "../../components/UI/Card";



const Pos = (props) => {

  const dispatch = useDispatch();

    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

    // const { currentUser } = useSelector((state) => state.auth);

    const {successMessage} = useSelector((state) => state.message);

    useEffect(() => {
      axios.get("get_products/")
           .then((res) => setProducts(res.data))
           .catch((err) => console.log(err))
    }, []);

    // const categoryItems = [...new Set(...products.map((Val) => Val.category__name))];

    const getFilteredList = () => {
      if (!selectedCategory) {
        return products;
     }
     return products.filter((item) => item.category__name === selectedCategory);
    }
    
    let filteredList = useMemo(getFilteredList, [selectedCategory, products])
    
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    }
      // const handleChangeProduct = useCallback(e => {
      //   const { value } = e.target;
      //   setProductItem({...productItem, value});
      // })
    
     const getUnique = (arr, comp) => {
        const unique = arr
          //store the comparison values in array
          .map(e => e[comp])
    
          // store the keys of the unique objects
          .map((e, i, final) => final.indexOf(e) === i && i)
    
          // eliminate the dead keys & store unique objects
          .filter(e => arr[e])
    
          .map(e => arr[e]);
    
        return unique;
      }
    
      const uniqueCategory = getUnique(products, "category__name");

    //  console.log(currentUser);

    //const filterDropdown = products.filter((result) => {
        //return result.category__name === productItem;
    //})

    const getTimeout = () => {
      setTimeout(() => {
        dispatch(messageActions.clearMessage());
      }, 3000);
    };

    if(successMessage){
      getTimeout();
    }
    

    let message;

    if(successMessage){
      message = <div className='centered pos-success__message'>{successMessage}</div>
    }

  return (
  
    <section className='pos-products'>
      {/* <h2>Buy your favorite products</h2> */}
     {message}

      
      <div className='category-select'>
      <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            {uniqueCategory.map(item => (
                
                <option key={item.id} value={item.category__name}>
                  {item.category__name}
                </option>
              ))}
          </select>
          </div>
          <br />
     
      <Card>
      <ul>
        {filteredList.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
      </Card>
    </section>
  );
};

export default Pos;
