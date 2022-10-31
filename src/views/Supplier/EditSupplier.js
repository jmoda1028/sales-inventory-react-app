import { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal'
import axios from '../../util/api';
import { useParams, useNavigate  } from 'react-router-dom';
import {modalActions} from '../../store/modalSlice';
import {useDispatch, useSelector} from "react-redux";
import EditSupplierForm from './EditSupplierForm';


const EditSupplier = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const isModalVisible = useSelector((state) => state.modal.isShown);

    const initialValues = {
        companyName: "",
        address: "",
        contact: "",
    };

    const [values, setValues] = useState(initialValues);

    const hideHandler = () => {
        dispatch(modalActions.setModal(false));
        navigate('/supplier');
      };

    const getSupplier = supplierId => {
        axios.get(`suppliers/${supplierId}`)
            .then(res => {
                const {data} = res;
                console.log(res);
                setValues({
                    companyName: data.company_name,
                    address: data.address,
                    contact: data.contact_no
                });
            })
            .catch(e => {
                console.log(e);
            });
    };
    
    useEffect(() => {
        if(params && params.id)
            getSupplier(params.id);
            dispatch(modalActions.setModal(true));
    }, [dispatch, params])

    const inputHandlerChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };

    const handleUpdate = (supplierId) => {
        axios.put(`suppliers/${supplierId}/`, {
            id: supplierId,
            company_name: values.companyName,
            address: values.address,
            contact_no: values.contact
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
        navigate('/supplier');
    }

    return(
          <>
            {isModalVisible &&
                <Modal>
                    <EditSupplierForm 
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

export default EditSupplier;