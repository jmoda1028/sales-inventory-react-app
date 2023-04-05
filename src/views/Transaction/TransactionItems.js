import { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal'
import axios from '../../util/api';
import { useParams, useNavigate  } from 'react-router-dom';
import {modalActions} from '../../store/modalSlice';
import {useDispatch, useSelector} from "react-redux";
import TransactionDetailForm from './TransactionDetailForm';


const TransactionDetail = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const isModalVisible = useSelector((state) => state.modal.isShown);

    const initialValues = {
        transactionCode: "",
        productCode: "",
        productName: "",
        price: "",
        quantity: "",
    };

    const [values, setValues] = useState(initialValues);

    const hideHandler = () => {
        dispatch(modalActions.setModal(false));
        navigate('/transaction');
    };

    const getTransaction= transactionId => {
        axios.get(`get_transaction_item_detail/?transaction_id=${transactionId}`)
            .then(res => {
                const transactItems = res.data;
                console.log(transactItems)
                transactItems.map(transactItem => {
                    setValues({
                        transactionCode: transactItem.transaction__transaction_code,
                        productCode: transactItem.product__product_code,
                        productName: transactItem.product__name,
                        price: transactItem.price,
                        quantity: transactItem.quantity
                    });

                    return transactItems;
                })
                
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if(params && params.id)
        getTransaction(params.id);
            dispatch(modalActions.setModal(true));
    }, [dispatch, params])

    return(
        <>
        {isModalVisible &&
            <Modal>
                <TransactionDetailForm 
                    onHideModal={hideHandler}
                    values={values}
                />
            </Modal>
        }       
        </>
    )
}

export default TransactionDetail;