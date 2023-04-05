import moment from "moment";


const EmployeeList = (props) => {
    const {onDeactivate, onActivate, employees} = props;

    return (
        <div className="table--container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Created_at</th>
                        <th>Updated_at</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.first_name}{" "}{employee.last_name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.role__name}</td>
                        <td>{employee.is_active === true ? "active" : "deactive"}</td>
                        <td>{moment(employee.created_at).format('MMMM DD, YYYY | hh:mm A')}</td>
                        <td>{moment(employee.updated_at).format('MMMM DD, YYYY | hh:mm A')}</td>
                        <td>
                            <button className="btn-deactivate" onClick={(e) => onDeactivate(e, employee.id)}>Deactivate</button> {" "}
                            <button className='btn-activate'  onClick={(e) => onActivate(e, employee.id)}>Activate</button>
                        </td>       
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList;