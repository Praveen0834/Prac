import './App.css';
import { useState,useEffect } from "react";                               
import AddDetails from './components/AddData';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ViewData from './components/ViewData';
import UpdateData from './components/UpdateData';

function App() {  
  const[productData,setProductData] = useState([]);
  const [updateId, setUpdateId] = useState(null)
  
  const addData = async (data) => {
    const res = await fetch("http://localhost:5000/insertProduct", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
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
          <Route path='/add' element={<AddDetails data={addData}/>}/>
          <Route path='/view' element={<ViewData pData={productData} onDelete={deleteDetails} updateId={setUpdateId}/>}/>
          <Route path='/update' element={<UpdateData pData={productData} updateId={updateId}/>}/>
        </Routes>
      </Router>          
    </>
  );

}
export default App;
 