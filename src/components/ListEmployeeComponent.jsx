import React, {useEffect, useState} from "react";
import {listEmployees} from "../service/EmployeeService.js";
import HeaderComponent from "./HeaderComponent.jsx";

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch((error) => {
            console.error(error)
        })
    })

    return (

        <div className="container-fluid">
            <h2 className={"text-center"}>List of Employee</h2>

            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
                <tr>

                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent;