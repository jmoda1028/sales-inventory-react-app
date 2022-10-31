import { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal'
import axios from '../../util/api';
import { useParams, useNavigate  } from 'react-router-dom';
import {modalActions} from '../../store/modalSlice';
import {useDispatch, useSelector} from "react-redux";
import InventoryDetailForm from './InventoryDetailForm';


const InventoryDetail = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const isModalVisible = useSelector((state) => state.modal.isShown);

    const initialValues = {
        // productName: "",
        // description: "",
        productCode: "",
        ProductName: "",
        description: "",
        quantity: "",
        price: "",
        dateStock: "",
        category: "",
        supplier: "",
        firstName: "",
        lastName: "",
        createdAt: "",
        updatedAt: "",
        productImage: "",

        // date_stock_in: "",
        // category: "",
        // supplier: ""
    };

    const [values, setValues] = useState(initialValues);
    // const [image, setImage] = useState(null);

    const hideHandler = () => {
        dispatch(modalActions.setModal(false));
        navigate('/inventory');
      };

    const getInventory = inventoryId => {
        axios.get(`get_product_detail/?product_id=${inventoryId}`)
            .then(res => {
                // const {data} = res;
                // setValues({
                //     quantity: data.qty_on_hand,
                //     price: data.price
                // });
                const product = res.data;
                console.log(product);
                product.map(product => {
                    setValues({
                            productCode: product.product_code,
                            ProductName: product.name,
                            description: product.description,
                            quantity: product.qty_on_hand,
                            price: product.price,
                            dateStock: product.date_stock_in,
                            category: product.category__name,
                            supplier: product.supplier__company_name,
                            firstName: product.created_by__first_name,
                            lastName: product.created_by__last_name,
                            createdAt: product.created_at,
                            updatedAt: product.updated_at,
                            productImage: product.image
                        });

                        return product;
                })

               
            })
            .catch(e => {
                console.log(e);
            });
    };
    
    useEffect(() => {
        if(params && params.id)
            getInventory(params.id);
            dispatch(modalActions.setModal(true));
    }, [dispatch, params])

    console.log(values);

    // const inputHandlerChange = (e) => {
    //     const { name, value } = e.target;
    //     setValues({
    //       ...values,
    //       [name]: value,
    //     });
    // };

    // const handleUpdate = (inventoryId) => {
    //     axios.put(`products/${inventoryId}/`, {
    //         id: inventoryId,
    //         qty_on_hand: values.quantity,
    //         price: values.price,
    //     })
    //     .then(res => {
    //         console.log(res);
            
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if(params.id) {
    //         handleUpdate(params.id);

    //     }
    //     hideHandler();
    //     navigate('/inventory');
    // }

    return(
          <>
            {isModalVisible &&
                <Modal>
                    <InventoryDetailForm 
                    // onSubmit= {handleSubmit}
                    onHideModal={hideHandler}
                    // onInputChange={inputHandlerChange}
                    values={values}
                    // image={image}
                    />
                </Modal>
            }       
          </>
    )

}

export default InventoryDetail;