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
    };

    const [values, setValues] = useState(initialValues);

    const hideHandler = () => {
        dispatch(modalActions.setModal(false));
        navigate('/inventory');
    };

    const getInventory = inventoryId => {
        axios.get(`get_product_detail/?product_id=${inventoryId}`)
            .then(res => {
                const product = res.data;
                product.map(product => {
                    setValues({
                            productCode: product.product_code,
                            ProductName: product.name,
                            description: product.description,
                            quantity: product.qty_on_hand,
                            price: product.price.toFixed(2),
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

    return(
        <>
        {isModalVisible &&
            <Modal>
                <InventoryDetailForm 
                    onHideModal={hideHandler}
                    values={values}
                />
            </Modal>
        }       
        </>
    )
}

export default InventoryDetail;