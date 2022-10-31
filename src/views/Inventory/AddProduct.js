import React, { useEffect, useState, useCallback } from 'react';
// import { useDispatch } from "react-redux";
import ProductForm from './ProductForm';
import Modal from '../../components/UI/Modal'
import axios from '../../util/api'
// import AuthHeader from '../../util/AuthHeader';

const AddProduct = (props) => {

    // const dispatch = useDispatch();

    const initialValues = {
        productName: "",
        description: "",
        quantity: "",
        price: "",
        date_stock_in: "",
        category: "",
        supplier: ""
    };

    const [values, setValues] = useState(initialValues);
    const [categories, setCategories] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const inputHandlerChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

    const inputFileHandler = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    console.log(selectedFile);

    const submitHandler = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    const currentYear = new Date().getFullYear(); // current year
    const randomNumber = Math.floor(100 + Math.random() * 900); // 8 digit random numbers
    const poductCode =  `${currentYear}${randomNumber}`;
    // const price = values.price.toFixed(2);
    const currentUser = localStorage.getItem('userId');    

    let form_data = new FormData();
    form_data.append('image', selectedFile, selectedFile.name);
    form_data.append('created_by', currentUser);
    form_data.append('product_code', poductCode);
    form_data.append('name', values.productName);
    form_data.append('description', values.description);
    form_data.append('qty_on_hand', values.quantity);
    form_data.append('price', values.price);
    form_data.append('date_stock_in', values.date_stock_in);
    form_data.append('category', values.category);
    form_data.append('supplier', values.supplier);
   

    axios.post('products/', form_data
        // created_by: currentUser, 
        // product_code: poductCode,
        // name: values.productName,
        // description: values.description,
        // qty_on_hand: values.quantity,
        // price: values.price,
        // image: values.image,
        // image: form_data,
        // date_stock_in: values.date_stock_in,
        // category: values.category,
        // supplier: values.supplier,
 , {headers: {
    'content-type': 'multipart/form-data',
    'Authorization': 'Bearer ' + token
  }})
    .then(res => {
        props.hideHandler();
        window.location.reload(true);
    })
    .catch(err => {
        console.log(err);
    })
};

const loadData = useCallback(() => {
    axios.get('categories/')
        .then(res => {
            setCategories(res.data);
        })
        .catch(err => {
          console.log(err);
      })

      axios.get('suppliers/')
      .then(res => {
          setSuppliers(res.data);
      })
      .catch(err => {
        console.log(err);
    })

  }, [])

useEffect(() => {
    loadData();
},[loadData])



return  (
        <Modal onClose={props.onClose}>
            <ProductForm 
                onInputHandler={inputHandlerChange}
                onSubmitHandler={submitHandler}
                values={values}
                categories={categories}
                suppliers={suppliers}
                onFileChange={inputFileHandler}
                // isLoading={loading}
                // error={error}
                onClose={props.hideHandler}
            />
        </Modal>
    );
}

export default AddProduct;