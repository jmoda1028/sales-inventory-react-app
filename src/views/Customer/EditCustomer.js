import { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal'
import axios from '../../util/api';
import { useParams, useNavigate  } from 'react-router-dom';
import {modalActions} from '../../store/modalSlice';
import {useDispatch, useSelector} from "react-redux";
import EditCustomerForm from './EditCustomerForm';


const EditCustomer = () => {


    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    // const location = useLocation();

    const isModalVisible = useSelector((state) => state.modal.isShown);

    const initialValues = {
        firstName: "",
        lastName: "",
        contact: "",
    };

    const [values, setValues] = useState(initialValues);
    // const [customer, setCustomer] = useState([]);

    // const {pathname} = location;

    // const getCustomer =  useCallback((id) => {
    //     axios.get(`customers/${id}`).then(res => setCustomer(res.data));
    // }, []);

    // useEffect(() => {
    //     if(params && params.id){
    //         getCustomer(params.id).map
    //             values.firstName = customer.first_name;
    //             values.lastName = customer.last_name;
    //             values.contact  = customer.contact_no;
         
    //     }
    //   }, [getCustomer]);

    // const showHandler = () => {
    //   dispatch(modalActions.setModal(true));
    // };

    const hideHandler = () => {
      dispatch(modalActions.setModal(false));
      navigate('/customer');

    };

  
    
    // const getCustomer = useCallback(() => {    
    //               values.firstName = customer.first_name;
    //               values.lastName = customer.last_name;
    //               values.contact  = customer.contact_no;  
    // }, [])

      // useEffect(() => {
      //       axios.get(`customers/${params.customerId}`)
      //           .then(res => {
      //               setCustomer(res.data);
      //           })

      //           // dispatch(modalActions.setModal(true));
      //           values.firstName = customer.first_name;
      //           values.lastName = customer.last_name;
      //           values.contact  = customer.contact_no;
               
      //             // getCustomer();
        
               
      // }, [values]);

      const getCustomer = customerId => {
        axios.get(`customers/${customerId}`)
          .then(response => {
            // setCustomer(response.data);
            // console.log(response.data);
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

        
       
       
                // setValues({
                //   ...values,
                //   firstName: customer.first_name,
                //   lastName: customer.last_name,
                //   contact: customer.contact_no
                // });
            

          
            // values.firstName = customer.first_name;
            // values.lastName = customer.last_name;
            // values.contact  = customer.contact_no;

          
       
  },[dispatch, params]);


     
 

      // console.log(customer);

      console.log(values);

      const inputHandlerChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });

        // setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))

        // e.preventDefault()
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

    return (
      <>
          {isModalVisible &&
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