import { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal'
import axios from '../../util/api';
import { useParams, useNavigate  } from 'react-router-dom';
import {modalActions} from '../../store/modalSlice';
import {useDispatch, useSelector} from "react-redux";
import EditInventoryForm from './EditInventoryForm';


const EditInventory = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const isModalVisible = useSelector((state) => state.modal.isShown);

    const initialValues = {
        quantity: "",
        price: "",
    };

    const [values, setValues] = useState(initialValues);

    const hideHandler = () => {
        dispatch(modalActions.setModal(false));
        navigate('/inventory');
    };

    const getInventory = inventoryId => {
        axios.get(`products/${inventoryId}`)
            .then(res => {
                const {data} = res;
                setValues({
                    quantity: data.qty_on_hand,
                    price: data.price
                });
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

    const inputHandlerChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleUpdate = (inventoryId) => {
        axios.patch(`products/${inventoryId}/`, {
            id: inventoryId,
            qty_on_hand: values.quantity,
            price: values.price,
        })
        .then(res => {
            console.log(res);
            
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(params.id) {
            handleUpdate(params.id);
        }
        hideHandler();
        navigate('/inventory');
    }

    return(
        <>
        {isModalVisible &&
            <Modal>
                <EditInventoryForm 
                    onSubmit= {handleSubmit}
                    onHideModal={hideHandler}
                    onInputChange={inputHandlerChange}
                    values={values}
                />
            </Modal>
        }       
        </>
    )
}

export default EditInventory;