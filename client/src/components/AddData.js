import { useState } from "react"

const AddDetails = ({data}) => {
    const[productName,setProductName] = useState();
    const[productCategory,setProductCategory] = useState();
    const[productMrp,setProductMrp] = useState();
    const[productWeight,setProductWeight] = useState();

    const getTimeStamp = () => {
        const d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth()+1;
        var day = d.getDate();
        var hour = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        return  `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
      }
    
      const handleSubmission = (e) => {
        e.preventDefault();
        const currentTimeStamp = getTimeStamp();
        var createdAt = currentTimeStamp;
        var modifyAt = currentTimeStamp;
        data(
          {
            productName,
            productCategory,
            productMrp,
            productWeight,
            createdAt,
            modifyAt
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
    )
}

export default AddDetails