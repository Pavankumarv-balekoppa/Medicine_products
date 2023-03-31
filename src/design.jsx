import { useEffect, useRef, useState } from "react";
import Table from 'react-bootstrap/Table';

const Design = () => {
    let [data, setdata] = useState([])
    let [value, setvalue] = useState()

    let search = useRef()

    // useEffect(() => {
    //     let fetching = async () => {
    //         let response = await fetch(`http://localhost:4000/medicine`)
    //         let data1 = await response.json()
    //         setdata(data1)
    //         console.log(data1);
    //     }
    //     fetching()
    // }, [])

    // let data3={"medicine":[
    //     {
    //         "PRODUCTID": "655_24",
    //         "PRODUCT_NAME": "Azidiva 250 Tablet",
    //         "MRP": 67,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 6 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Mediva Lifecare",
    //         "__EMPTY": "Azithromycin (250mg)"
    //     },
    //     {
    //         "PRODUCTID": "655_25",
    //         "PRODUCT_NAME": "Amloallit-AT Tablet",
    //         "MRP": 35,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Allito Biocare",
    //         "__EMPTY": "Amlodipine (5mg) + Atenolol (50mg)"
    //     },
    //     {
    //         "PRODUCTID": "655_26",
    //         "PRODUCT_NAME": "Azlice 250 Tablet",
    //         "MRP": 69,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 6 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Alicia Healthcare",
    //         "__EMPTY": "Azithromycin (250mg)"
    //     },
    //     {
    //         "PRODUCTID": "655_27",
    //         "PRODUCT_NAME": "Allitomox 0.5% Eye Drop",
    //         "MRP": 90,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "bottle of 5 ml Eye Drop",
    //         "TYPEOFPRODUCT": "bottle",
    //         "COMPOSITION": "Allito Biocare",
    //         "__EMPTY": "Moxifloxacin (0.5% w/v)"
    //     },
    //     {
    //         "PRODUCTID": "655_28",
    //         "PRODUCT_NAME": "Allitomik 500 Injection",
    //         "MRP": 66,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "vial of 2 ml Injection",
    //         "TYPEOFPRODUCT": "vial",
    //         "COMPOSITION": "Allito Biocare",
    //         "__EMPTY": "Amikacin (500mg)"
    //     },
    //     {
    //         "PRODUCTID": "655_29",
    //         "PRODUCT_NAME": "Alepride M 1mg/500mg Tablet SR",
    //         "MRP": 50,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablet sr",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Alester Pharma Pvt Ltd",
    //         "__EMPTY": "Glimepiride (1mg) + Metformin (500mg)"
    //     },
    //     {
    //         "PRODUCTID": "655_30",
    //         "PRODUCT_NAME": "A-Set Oral Suspension Mango Sugar Free",
    //         "MRP": 72,
    //         "PACKING": "bottle of 170 ml Oral Suspension",
    //         "TYPEOFPRODUCT": "bottle",
    //         "COMPOSITION": "Advok Pharmacia Private Limited",
    //         "__EMPTY": "Magaldrate (400mg) + Simethicone (20mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_1",
    //         "PRODUCT_NAME": "Azilius 250mg Tablet",
    //         "MRP": 83,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 6 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Azithromycin (250mg) + Lactic acid bacillus (60Million spores)"
    //     },
    //     {
    //         "PRODUCTID": "909_2",
    //         "PRODUCT_NAME": "Aeltax SB 1000mg/500mg Injection",
    //         "MRP": 124,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "vial of 1 Injection",
    //         "TYPEOFPRODUCT": "vial",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Ceftriaxone (1000mg) + Sulbactam (500mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_3",
    //         "PRODUCT_NAME": "Aminex AT 5mg/50mg Tablet",
    //         "MRP": 38,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Global Care",
    //         "__EMPTY": "Amlodipine (5mg) + Atenolol (50mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_4",
    //         "PRODUCT_NAME": "Akmika 500mg Injection",
    //         "MRP": 66,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "vial of 1 Injection",
    //         "TYPEOFPRODUCT": "vial",
    //         "COMPOSITION": "Global Care",
    //         "__EMPTY": "Amikacin (500mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_5",
    //         "PRODUCT_NAME": "Afitra-SB 100 Capsule",
    //         "MRP": 250,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 capsules",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Rapross Pharmaceuticals Pvt Ltd",
    //         "__EMPTY": "Itraconazole (100mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_6",
    //         "PRODUCT_NAME": "Afitra-SB 50 Capsule",
    //         "MRP": 150,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 capsules",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Rapross Pharmaceuticals Pvt Ltd",
    //         "__EMPTY": "Itraconazole (50mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_7",
    //         "PRODUCT_NAME": "Austirab D 30mg/20mg Capsule SR",
    //         "MRP": 125,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 capsule sr",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Austin Health Care",
    //         "__EMPTY": "Domperidone (30mg) + Rabeprazole (20mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_8",
    //         "PRODUCT_NAME": "Aelclav 500mg/125mg Tablet",
    //         "MRP": 158,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 6 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Amoxycillin (500mg) + Clavulanic Acid (125mg) + Lactobacillus (60Million spores)"
    //     },
    //     {
    //         "PRODUCTID": "909_9",
    //         "PRODUCT_NAME": "Ajubi Tablet",
    //         "MRP": 24,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Technopharm Pvt Ltd",
    //         "__EMPTY": "Aspirin (300mg) + Paracetamol (150mg) + Caffeine (30mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_10",
    //         "PRODUCT_NAME": "Aelcef SB 1000mg/500mg Injection",
    //         "MRP": 274,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "vial of 1 Injection",
    //         "TYPEOFPRODUCT": "vial",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Cefoperazone (1000mg) + Sulbactam (500mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_11",
    //         "PRODUCT_NAME": "Aelcob G 300mg/500mcg Tablet",
    //         "MRP": 124,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Gabapentin (300mg) + Methylcobalamin (500mcg)"
    //     },
    //     {
    //         "PRODUCTID": "909_12",
    //         "PRODUCT_NAME": "Aelthio 100mg/8mg Tablet",
    //         "MRP": 234,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Aceclofenac (100mg) + Thiocolchicoside (8mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_13",
    //         "PRODUCT_NAME": "Albetin A Oral Suspension",
    //         "MRP": 32,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "bottle of 10 ml Oral Suspension",
    //         "TYPEOFPRODUCT": "bottle",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Ivermectin (1.5mg/5ml) + Albendazole (200mg/5ml)"
    //     },
    //     {
    //         "PRODUCTID": "909_14",
    //         "PRODUCT_NAME": "Akmika 250mg Injection",
    //         "MRP": 34,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "vial of 1 Injection",
    //         "TYPEOFPRODUCT": "vial",
    //         "COMPOSITION": "Global Care",
    //         "__EMPTY": "Amikacin (250mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_15",
    //         "PRODUCT_NAME": "Amydoxa Capsule",
    //         "MRP": 81,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 capsules",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Global Care",
    //         "__EMPTY": "Amoxycillin (250mg) + Dicloxacillin (250mg) + Lactobacillus (60Million spores)"
    //     },
    //     {
    //         "PRODUCTID": "909_16",
    //         "PRODUCT_NAME": "Aeltram P 50mg/325mg Tablet",
    //         "MRP": 60,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Tramadol (50mg) + Paracetamol (325mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_17",
    //         "PRODUCT_NAME": "Abiways-M Tablet SR",
    //         "MRP": 190,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablet sr",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Mankind Pharma Ltd",
    //         "__EMPTY": "Acebrophylline (200mg) + Montelukast (10mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_18",
    //         "PRODUCT_NAME": "Amloden TM 40mg/5mg Tablet",
    //         "MRP": 57,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Denglow Pharmaceuticals Private Limited",
    //         "__EMPTY": "Telmisartan (40mg) + Amlodipine (5mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_19",
    //         "PRODUCT_NAME": "Aelcef SB 500mg/500mg Injection",
    //         "MRP": 239,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "vial of 1 Injection",
    //         "TYPEOFPRODUCT": "vial",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Cefoperazone (500mg) + Sulbactam (500mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_20",
    //         "PRODUCT_NAME": "Aelcin 100mg Injection",
    //         "MRP": 21,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "vial of 2 ml Injection",
    //         "TYPEOFPRODUCT": "vial",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Amikacin (100mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_21",
    //         "PRODUCT_NAME": "Acdac MR 100mg/325mg/250mg Tablet",
    //         "MRP": 58,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "IGP Medventures Pvt Ltd",
    //         "__EMPTY": "Aceclofenac (100mg) + Paracetamol (325mg) + Chlorzoxazone (250mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_22",
    //         "PRODUCT_NAME": "Aelcob 1500mcg Injection",
    //         "MRP": 65,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "vial of 2 ml Injection",
    //         "TYPEOFPRODUCT": "vial",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Methylcobalamin (1500mcg)"
    //     },
    //     {
    //         "PRODUCTID": "909_23",
    //         "PRODUCT_NAME": "Aelthio 100mg/4mg Tablet",
    //         "MRP": 167,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Aceclofenac (100mg) + Thiocolchicoside (4mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_24",
    //         "PRODUCT_NAME": "Aelcof Syrup",
    //         "MRP": 71,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "bottle of 100 ml Syrup",
    //         "TYPEOFPRODUCT": "bottle",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Bromhexine (4mg) + Guaifenesin (50mg) + Menthol (2.5mg) + Terbutaline (1.5mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_25",
    //         "PRODUCT_NAME": "Aelnor 5mg Tablet",
    //         "MRP": 52,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Aelius Lifesciences Llp",
    //         "__EMPTY": "Norethisterone (5mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_26",
    //         "PRODUCT_NAME": "Aceclosafe SP 100mg/325mg/15mg Tablet",
    //         "MRP": 90,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Safe Life Care",
    //         "__EMPTY": "Aceclofenac (100mg) + Paracetamol (325mg) + Serratiopeptidase (15mg)"
    //     },
    //     {
    //         "PRODUCTID": "909_27",
    //         "PRODUCT_NAME": "Amcliway 500mg/125mg Tablet",
    //         "MRP": 165,
    //         "RX_REQUIRED": "Prescription Required",
    //         "PACKING": "strip of 10 tablets",
    //         "TYPEOFPRODUCT": "strip",
    //         "COMPOSITION": "Phaway Pharmaceuticals Private Limited",
    //         "__EMPTY": "Amoxycillin (500mg) + Clavulanic Acid (125mg)"
    //     }
    // ]
    // }


    const selected = (event) => {
        setvalue(event.target.value);
    };


    let find = async () => {
        let response = await fetch(`http://localhost:4000/medicine`)
        let data1 = await response.json()
        if(value=="Product_name")
        {
            let filterdata = data1.filter(x => x.PRODUCT_NAME == search.current.value)
        setdata(filterdata)
        }
        else
        {
            let filterdata = data1.filter(x => x.COMPOSITION == search.current.value)
        setdata(filterdata)
        }
    }

    let reset = () => {
        search.current.value = '';
    }
    return (
        <div className="design bg-success  rounded-4 m-5 p-3">
            
            <div className="nav bg-primary m-4 p-3">
                
                <label className="m-2" htmlFor="">FILTER  :</label>
                <select className="m-2" value={value} onChange={selected} required>
                    <option value="">select to filter</option>
                    <option value="Product_name">Product_name</option>
                    <option value="Company_name">Company_name</option>
                </select>
                <input className="m-2 w-50" type="text" placeholder={value} ref={search} required/>
                <button className="btn btn bg-success" onClick={() => find()}>Search</button>
                <button className="btn btn bg-warning ms-3" onClick={reset}>Reset</button>
            </div>
            
            <br /><br /><br />
            <div className="info ">
                <h1 className="text-center">-: Information about :- <h1 className=" text-warning">{search.current.value}</h1></h1><br /><br />
                <Table striped bordered hover variant="dark">
                    <thead className="bg-info">
                            <th>PRODUCTID</th>
                            <th>PRODUCT_NAME</th>
                            <th>MRP</th>
                            <th>RX_REQUIRED</th>
                            <th>PACKING</th>
                            <th>TYPEOFPRODUCT</th>
                            <th>COMPANY_NAME</th>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr >
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
                </Table><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
}

export default Design;