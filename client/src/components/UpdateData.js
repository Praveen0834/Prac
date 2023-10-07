import { useNavigate } from "react-router-dom"
import { useState } from "react"; 

const UpdateData= ({pData,updateId})=>{
    const[productName,setProductName] = useState();
    const[productCategory,setProductCategory] = useState();
    const[productMrp,setProductMrp] = useState();
    const[productWeight,setProductWeight] = useState();
    const navigate = useNavigate()
    
    const handleSubmission = (e) => {

    const UpdateMain = async (details, id) => {

        details={
            "product_id" :productName,
            "product_catagory" :productCategory,
            "product_mrp" :productMrp,
            "product_weight" :productWeight
        }

        const res = await fetch(`http://localhost:5000/umain/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(details),
        });
        const resp = await res.json();     
        
        navigate("/view")
    }
}

 return(
    
    pData.map((data)=>{
        if(data.product_id==updateId){
            <form onSubmit={handleSubmission}>
                <label for="productName">Product Name: &nbsp;</label>
                <input type="text" placeholder={data.product_name} value={productName} onChange={(e) => setProductName(e.target.value)} required /><br></br>
                <label for="productCategory">Product Category: &nbsp;</label>
                <input type="text" placeholder={data.product_catagory} value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required /><br></br>
                <label for="productMrp">MRP: &nbsp;</label>
                <input type="text" placeholder={data.mrp} value={productMrp} onChange={(e) => setProductMrp(e.target.value)} required /><br></br>
                <label for="productWeight">Weight: &nbsp;</label>
                <input type="text" placeholder={data.weight} value={productWeight} onChange={(e) => setProductWeight(e.target.value)} required /><br></br>
                <button type="submit">Submit</button>
            </form>
        }
    })    
 )}

 export default UpdateData