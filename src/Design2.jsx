import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';



const Design2 = () => {
    const [data, setData] = useState([]);
    const [tableData, setTableData] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:4000/medicine");
        const result = await response.json();
        console.log(result); // Debugging
        setData(result);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const filterData = () => {
        const filter1 = document.querySelector("select").value;
        const query = document.querySelector("input").value;

        let filteredData = [];

        if (Array.isArray(data)) {
            if (filter1 === "product") {
                filteredData = data.filter((item) =>
                    item.PRODUCT_NAME.toLowerCase().includes(query.toLowerCase())
                );
            } else if (filter1 === "company") {
                filteredData = data.filter((item) =>
                    item.COMPANY_NAME.toLowerCase().includes(query.toLowerCase())
                );

            }
        }

        setTableData(filteredData);
    };

    const resetSearch = () => {
        setTableData([]);
        document.querySelector("input").value = "";
    };

    return (
        <div className="medicine bg-light p-2 ">
            <h1 className="text-center">MEDICINE DETAILS</h1>
            <select className="dropdown w-25 m-2">
                <option value="product">Search By Product Name</option>
                <option value="company">Search by Company Name</option>
            </select>

            <input className="form m-2 w-50" type="text" placeholder="Enter your search" />

            <button className='btn btn-success m-2' onClick={filterData}>Search</button>

            <button className='btn btn-success' onClick={resetSearch}>Reset</button>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>MRP</th>
                        <th>RX_REQUIRED</th>
                        <th>PACKING</th>
                        <th>TYPEOFPRODUCT</th>
                        <th>Composition</th>
                        <th>Company Name</th>
                    </tr>
                </thead>

                <tbody>
                    {Array.isArray(tableData) &&
                        tableData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.PRODUCTID}</td>
                                <td>{item.PRODUCT_NAME}</td>
                                <td>{item.MRP}</td>
                                <td>{item.RX_REQUIRED}</td>
                                <td>{item.PACKING}</td>
                                <td>{item.TYPEOFPRODUCT}</td>
                                <td>{item.COMPOSITION}</td>
                                <td>{item.COMPANY_NAME}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Design2;