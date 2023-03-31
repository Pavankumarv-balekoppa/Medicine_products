import { useState } from 'react';
import * as XLSX from 'xlsx';

const Excel = () => {
    let[data,setData]=useState()
    // const workbook = XLSX.read(file, { type: 'array' });
    const readExcelFile = (file) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: 'buffer' });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
        return promise;
    };


    const handleFile = async (file) => {
        const data = await readExcelFile(file);
        setData(data);
    };



    return (
        <div className="excel">
            <input type="file" onChange={(e) => handleFile(e.target.files[0])} />


            <table border={4}>
                <thead>
                    <tr>
                        <th>PRODUCTID</th>
                        <th>PRODUCT_NAME</th>
                        <th>MRP</th>
                        <th>RX_REQUIRED</th>
                        <th>PACKING</th>
                        <th>TYPEOFPRODUCT</th>
                        <th>COMPOSITION</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.PRODUCTID}</td>
                            <td>{item.PRODUCT_NAME}</td>
                            <td>{item.MRP}</td>
                            <td>{item.RX_REQUIRED}</td>
                            <td>{item.PACKING}</td>
                            <td>{item.TYPEOFPRODUCT}</td>
                            <td>{item.COMPOSITION}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Excel;