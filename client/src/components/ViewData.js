import { useNavigate } from "react-router-dom"

const ViewData = ({ pData,onDelete,updateId }) => {

    const navigate = useNavigate()

    const onUpdate = (product) => {
        const id = product.product_id;
        const name = product.product_name;
        const category = product.product_category;
        const mrp = product.mrp;
        const weight = product.weight;
        const createdAt = product.created_at;
        const modifiedAt = product.modified_at;
        sessionStorage.setItem("detail",JSON.stringify({id,name,category,mrp,weight,createdAt,modifiedAt}));
        navigate("/update");
    }

    return (
        <>
            <tr>
                <th>Product Name</th>&nbsp;
                <th>Product Category</th>&nbsp;
                <th>MRP</th>&nbsp;
                <th>Weight</th>&nbsp;
                <th>Created_At</th>&nbsp;
                <th>Modified_At</th>&nbsp;
            </tr>
            {
                pData.map((data) => (
                        <tr key={data.product_id}>
                            <td>{data.product_name}</td>&nbsp;
                            <td>{data.product_category}</td>&nbsp;
                            <td>{data.mrp}</td>&nbsp;
                            <td>{data.weight}</td>&nbsp;
                            <td>{data.created_at}</td>&nbsp;
                            <td>{data.modified_at}</td>&nbsp;
                            <td><button onClick={()=>onDelete(data.product_id)}>Delete</button></td>
                            <td><button onClick={()=>onUpdate(data)}>Update</button></td>
                        </tr>
                )
                )
            }
        </>

    )
}
export default ViewData;