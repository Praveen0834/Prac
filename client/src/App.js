import './App.css';
import { useState,useEffect } from "react";                               
import AddDetails from './components/AddData';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ViewData from './components/ViewData';
import UpdateData from './components/UpdateData';

function App() {  
  const [productData,setProductData] = useState([]);
  
  const addData = async (data) => {
    const res = await fetch("http://localhost:5000/insertProduct", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
    const resp = await res.json();
    setProductData([...productData,resp]);
    console.log(data)
  }  

  const getTasks = async () => {
    const productDetailsFromServer = await fetch("http://localhost:5000/product");
    const data =  await productDetailsFromServer.json();
    return data;
  }

  useEffect(() => {
    const getDetails = async () => {
      const productDetails = await getTasks()
      setProductData(productDetails)
    };
    getDetails();
  },[])


  const updateDetails = async (details,id) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify(details),
      });
      const resp = await res.json();
      setProductData([...productData, resp]);
  }

  const deleteDetails = async (id) => {

    await fetch(`http://localhost:5000/remove/${id}`, {
      method: "DELETE",
    });
    setProductData(productData.filter((val) => val.product_id !== id));
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AddDetails data={addData}/>}/>
          <Route path='/view' element={<ViewData pData={productData} onDelete={deleteDetails}/>}/>
          <Route path='/update' element={<UpdateData pData={productData} updateId={updateDetails}/>}/>
        </Routes>
      </Router>  
      <ViewData pData={productData} onDelete={deleteDetails}/>        
    </>
  );

}
export default App;
 