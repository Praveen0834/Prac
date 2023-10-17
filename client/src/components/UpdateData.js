import { useState } from "react"; 

const UpdateData= ({updateId})=>{
    
    const id = JSON.parse(sessionStorage.getItem('detail')).id;
    const name = JSON.parse(sessionStorage.getItem('detail')).name;
    const category = JSON.parse(sessionStorage.getItem('detail')).category;
    const mrp = JSON.parse(sessionStorage.getItem('detail')).mrp;
    const weight = JSON.parse(sessionStorage.getItem('detail')).weight;

    const[productName,setProductName] = useState(name);
    const[productCategory,setProductCategory] = useState(category);
    const[productMrp,setProductMrp] = useState(mrp);
    const[productWeight,setProductWeight] = useState(weight);

    const handleSubmission = async (e) => {
        e.preventDefault()
        console.log("Submitted");
        updateId({productName,productCategory,productMrp,productWeight},id);
}

 return(
    <form onSubmit={handleSubmission}>
    <label for="productName">Product Name: &nbsp;</label>
    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required /><br></br>
    <label for="productCategory">Product Category: &nbsp;</label>
    <input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required /><br></br>
    <label for="productMrp">MRP: &nbsp;</label>
    <input type="text" value={productMrp} onChange={(e) => setProductMrp(e.target.value)} required /><br></br>
    <label for="productWeight">Weight: &nbsp;</label>
    <input type="text" value={productWeight} onChange={(e) => setProductWeight(e.target.value)} required /><br></br>
    <button type="submit">Submit</button>
</form>   
 )}

 export default UpdateData