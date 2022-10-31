import React, { useState, useEffect, useCallback } from 'react';
import AddEmployee from './AddEmployee';
// import Modal from '../../components/UI/Modal'
// import Card from '../../components/UI/Card'
import axios from '../../util/api'
import EmployeeList from './EmployeeList';


const Employee = (props) => {

  const [IsShown, setIsShown] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [IsemployeeStatusUpdate, setIsemployeeStatusUpdate] = useState(false);
  // const [isActiveStatus, setIsActiveStatus] = useState(false);
  // const [submitting, setSubmitting] = useState(true);

  const showHandler = () => {
    setIsShown(true);
  };

  const hideHandler = () => {
    setIsShown(false);
  };

  const deactivateHandler = async (e, id) => {
    e.preventDefault();
     await  axios.patch(`update_users/${id}`, {
      id: id,
      is_active: false
     });
     setIsemployeeStatusUpdate(!IsemployeeStatusUpdate);
  }

  const activateHandler = async (e, id) => {
    e.preventDefault();
    await  axios.patch(`update_users/${id}`, {
     id: id,
     is_active: true
    });
    setIsemployeeStatusUpdate(!IsemployeeStatusUpdate);
 }

  console.log(IsShown);

  // const ModalContent = (
  //   <AddEmployee onClose={hideHandler} />
  // )

  // useEffect(() => {
  //     if(IsShown){
  //       return  <AddEmployee hideHandler={hideHandler} /> ;
        
  //     }
  // }, [IsShown]);

  const loadData = useCallback(async () => {
    try {
     const res = await axios.get("get_users_role/")
     setEmployees(res.data);
    }
     catch(error){
          console.log(error);
     } 
      
  }, [])

  useEffect(() => {
    loadData();
  }, [IsemployeeStatusUpdate,loadData])



    return (
      <>
        {/* <div className='centered'>  */}
          {/* <h1>Employee</h1> */}
          <button type="button" className='btn-add__employee' onClick={showHandler}>
            Add Employee
          </button>
          {IsShown && <AddEmployee hideHandler={hideHandler} />}
          {/* </div> */}
        <br /> <br />
        { employees.length > 0 ?
          <EmployeeList 
              employees={employees}
              onDeactivate={deactivateHandler}
              onActivate={activateHandler}
          />
          :
          <h1 className='centered'>No Data Found</h1>
        }
       </>
    )
}

export default Employee;