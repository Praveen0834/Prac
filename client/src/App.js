import './App.css';
import { useState } from "react";                               
function App() {
  const [productName, setProductName] = useState();
  const [productCategory, setProductCategory] = useState();
  const [productMrp, setProductMrp] = useState();
  const [productWeight, setProductWeight] = useState();

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

  const handleSubmission = (e) => {
    e.preventDefault();
    addData(
      {
        productName,
        productCategory,
        productMrp,
        productWeight
      }
    )
    setProductName("");
    setProductCategory("");
    setProductMrp("");
    setProductWeight("");
  }

  return (
    <>
      <form onSubmit={handleSubmission}>
        <label for="productName">Product Name: &nbsp;</label>
        <input type="text" placeholder="Enter the product name" value={productName} onChange={(e) => setProductName(e.target.value)} required /><br></br>
        <label for="productCategory">Product Category: &nbsp;</label>
        <input type="text" placeholder="Enter the product category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required /><br></br>
        <label for="productMrp">MRP: &nbsp;</label>
        <input type="text" placeholder="Enter the MRP" value={productMrp} onChange={(e) => setProductMrp(e.target.value)} required /><br></br>
        <label for="productWeight">Weight: &nbsp;</label>
        <input type="text" placeholder="Enter the weight" value={productWeight} onChange={(e) => setProductWeight(e.target.value)} required /><br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
