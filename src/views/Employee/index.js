import React, { useState, useEffect, useCallback } from 'react';
import AddEmployee from './AddEmployee';
import axios from '../../util/api'
import EmployeeList from './EmployeeList';


const Employee = (props) => {
    const [IsShown, setIsShown] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [IsemployeeStatusUpdate, setIsemployeeStatusUpdate] = useState(false);

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
    }, [loadData, IsemployeeStatusUpdate])

    return (
      <section className='employees'>
        <div className='container'>
          <button className='btn-add__employee' onClick={showHandler}>
            Add Employee
          </button>
          {IsShown && <AddEmployee hideHandler={hideHandler} />}
          <br /> <br />
          { employees.length > 0 ?
          <EmployeeList 
            employees={employees}
            onDeactivate={deactivateHandler}
            onActivate={activateHandler}
          />
            :
          <h1 className='no--data__header'>No Data Found</h1>
          }
        </div>
      </section>
    )
}

export default Employee;