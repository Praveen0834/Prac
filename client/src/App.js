import './App.css';
import { useState,useEffect } from "react";                               
import AddDetails from './components/AddData';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ViewData from './components/ViewData';

function App() {
  const[productData,setProductData] = useState([]);
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
  /* useEffect(() => {
    const getTasks = async () => {
      try {
        const productDetailsFromServer = await fetch("http://localhost:5000/insertProduct");
        const data = await productDetailsFromServer.json();
        
          setProductName(data.productName);
          setProductCategory(data.productCategory);
          setProductMrp(data.productMrp);
          setProductWeight(data.productWeight);
  
        const currentTimeStamp = getTimeStamp();
        var createdAt = currentTimeStamp;
        var modifyAt = currentTimeStamp;
  
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
  
    getTasks();
  }, []);
   */
  useEffect(() => {
    const getDetails = async () => {
      const productDetails = await getTasks()
      setProductData(productDetails)
    };
    getDetails();
  },[])
  // console.log(productData);
  const deleteDetails = async (id) => {

    await fetch(`http://localhost:5000/remove/${id}`, {
      method: "DELETE",
    });
    setProductData(productData.filter((val) => val.product_id !== id));
  };

  return (
    <>
        {/* <AddDetails data={addData}/> */}

      <Router>
        <Routes>
          <Route path='/add' element={<AddDetails data={addData}/>}/>
          <Route path='/view' element={<ViewData pData={productData} onDelete={deleteDetails}/>}/>
        </Routes>
      </Router>
          
    </>
  );

}
export default App;
