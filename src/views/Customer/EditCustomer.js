import { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal'
import axios from '../../util/api';
import { useParams, useNavigate, useLocation  } from 'react-router-dom';
import {modalActions} from '../../store/modalSlice';
import {useDispatch, useSelector} from "react-redux";
import EditCustomerForm from './EditCustomerForm';


const EditCustomer = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const isModalVisible = useSelector((state) => state.modal.isShown);

    const initialValues = {
      firstName: "",
      lastName: "",
      contact: "",
    };

    const [values, setValues] = useState(initialValues);

    const hideHandler = () => {
      dispatch(modalActions.setModal(false));
      navigate('/customer');
    };

    const getCustomer = customerId => {
      axios.get(`customers/${customerId}`)
        .then(response => {
          const {data} = response;
          setValues({
              firstName: data.first_name, lastName: data.last_name, contact: data.contact_no
          });

        })
        .catch(e => {
          console.log(e);
        });
    };

    useEffect(() => {
      if (params && params.id)
      getCustomer(params.id);
      dispatch(modalActions.setModal(true));
    },[dispatch, params]);

    const inputHandlerChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };

    const handleUpdate = (customerId) => {
      axios.put(`customers/${customerId}/`, {
          id: customerId,
          first_name: values.firstName,
          last_name: values.lastName,
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
      navigate('/customer');
    }
        
    const {pathname} = location;

    return (
      <>
        {pathname === `/customer/` + params.id && 
          <Modal>
            <EditCustomerForm 
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

export default EditCustomer;